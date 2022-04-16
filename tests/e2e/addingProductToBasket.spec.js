import homePage from "../../cypress/support/pageObjects/homePage";
import searchingPage from "../../cypress/support/pageObjects/searchingPage";
import productDetailPage from "../../cypress/support/pageObjects/productDetailPage";
import basketPage from "../../cypress/support/pageObjects/basketPage";

describe("E2E GittiGidiyor Spec", () => {
  it("Opening home page of GittiGidiyor", () => {
    cy.visit("/");
    homePage.checkAndClickCookieButton();
    homePage.checkInitialElements();
    homePage.checkNavigationMenu();

    context("Searching an item", () => {
      homePage.setSearchInput("bilgisayar");
      homePage.checkSearchedItems();
      homePage.clickAnySearchedItem("second");
      searchingPage.checkInitialElements();
      searchingPage.checkProducts();
      searchingPage.navigatingDesiredProductToBasket("second");
    });

    context("Adding desired product to the basket", () => {
      productDetailPage.checkInitialElements();
      productDetailPage.setProductDetailsToTxt();
      productDetailPage.addingProductToBasket();
    });

    context("Navigating to the basket page and assertions", () => {
      basketPage.clickGoToBasketButton();
      basketPage.checkInitialElements();
      // Asserting product title from text file
      cy.get(basketPage.fields.productElm.addedProductTitle).then(($el) => {
        const productTitle = $el
          .text()
          .split(" ")
          .slice(0, 3)
          .join(" ")
          .toUpperCase();
        cy.readFile("productDetail.txt")
          .should("exist")
          .and("contains", productTitle);
      });

      // Asserting product price from the same text file
      cy.get(basketPage.fields.productElm.basketTotalPrice).then(($el) => {
        const productPrice = $el.text().valueOf();
        cy.readFile("productDetail.txt")
          .should("exist")
          .and("contains", productPrice);
      });

      // Increasing product amount and asserting
      basketPage.selectProductQuantity("2");
      cy.get(basketPage.fields.productElm.addedProductQuantitySb)
        .invoke("attr", "value")
        .then((state) => {
          expect(state).to.eq("2");
        });

      // Deleting product from the basket and asserting
      basketPage.clickDeleteProductIcon();
      cy.get(basketPage.fields.productElm.addedProductTitle).should(
        "not.exist"
      );
    });
  });
});
