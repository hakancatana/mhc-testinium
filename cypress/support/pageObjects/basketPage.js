class BasketPage {
  constructor() {
    this.fields = {
      productElm: {
        productItemsContainer: ".product-items-container",
        addedProductTitle: ".product-item-box-container .text-box h2",
        addedProductQuantitySb:
          "div.product-item-box-container .gg-input-select select",
        addedProductDeleteIcon:
          ".product-item-box-container .text-box .gg-icon-bin-medium",
        basketTotalPrice: ".new-price",
      },
      headerBasketPopupGo: ".header-cart-buttons a.gg-ui-btn-default",
    };
  }
  checkInitialElements() {
    for (let argumentsKey in this.fields.productElm) {
      cy.get(this.fields.productElm[argumentsKey], { timeout: 5000 }).should(
        "be.visible"
      );
    }
  }
  clickGoToBasketButton() {
    cy.get(this.fields.headerBasketPopupGo).trigger("mouseover").click();
  }
  clickDeleteProductIcon() {
    cy.get(this.fields.productElm.addedProductDeleteIcon).click();
  }
  selectProductQuantity(value) {
    cy.get(this.fields.productElm.addedProductQuantitySb).select(value);
  }
}

export default new BasketPage();
