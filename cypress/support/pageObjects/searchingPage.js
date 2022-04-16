class SearchingPage {
  constructor() {
    this.fields = {
      // Content Main Elements
      contentElm: {
        contentContainer: '[data-testid="content"]',
        contentPageInfo: '[data-cy="pageinfo"]',
        paginationPrevButton: '[data-testid="paginationPrev"]',
        paginationNextButton: '[data-testid="paginationNext"]',
      },
      // Product List Elements
      productsElm: {
        productListSelector: '[data-cy="product-card-item"]',
        firstProduct: 'li:nth-child(1) [data-cy="product-card-item"]',
        secondProduct: 'li:nth-child(2) [data-cy="product-card-item"]',
        thirdProduct: 'li:nth-child(3) [data-cy="product-card-item"]',
        fourthProduct: 'li:nth-child(4) [data-cy="product-card-item"]',
      },
    };
  }
  checkInitialElements() {
    for (let argumentsKey in this.fields.contentElm) {
      cy.get(this.fields.contentElm[argumentsKey], { timeout: 5000 }).should(
        "be.visible"
      );
    }
  }
  checkProducts() {
    for (let argumentsKey in this.fields.productsElm) {
      cy.get(this.fields.productsElm[argumentsKey], { timeout: 5000 }).should(
        "be.visible"
      );
    }
  }
  navigatingDesiredProductToBasket(product) {
    let { productsElm } = this.fields;
    let { firstProduct, secondProduct, thirdProduct, fourthProduct } =
      productsElm;

    switch (product) {
      case "first":
        cy.get(firstProduct).click();
        break;

      case "second":
        cy.get(secondProduct).click();
        break;

      case "third":
        cy.get(thirdProduct).click();
        break;

      case "fourth":
        cy.get(fourthProduct).click();
        break;
    }
  }
}

export default new SearchingPage();
