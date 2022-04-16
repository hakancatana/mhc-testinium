class ProductDetailPage {
  constructor() {
    this.fields = {
      // Product detail page elements
      generalProductContainer: "#product-general-info",
      productGalleryContainer: "#gallery",
      productTitle: "#sp-title",
      productPrice: "#sp-price-lowPrice",
      productBuyNowButton: "#buy-now",
      productAddBasketButton: "#add-to-basket",
    };
  }
  checkInitialElements() {
    for (let argumentsKey in this.fields) {
      cy.get(this.fields[argumentsKey], { timeout: 5000 })
        .should("be.visible")
        .scrollIntoView();
    }
  }
  addingProductToBasket() {
    cy.get(this.fields.productAddBasketButton).click();
  }
  // Setting product info/price to text file
  setProductDetailsToTxt() {
    cy.document().then((doc) => {
      let titleText = doc
        .querySelector(this.fields.productTitle)
        .innerHTML.trim()
        .split(" ")
        .slice(0, 3)
        .join(" ");
      let priceText = doc
        .querySelector(this.fields.productPrice)
        .innerHTML.trim();
      cy.writeFile("tests/e2e/productDetail.txt", titleText + "\n" + priceText);
    });
  }
}

export default new ProductDetailPage();
