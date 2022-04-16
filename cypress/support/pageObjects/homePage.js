class homePage {
  constructor() {
    this.fields = {
      // Cookie Policy
      closeCookieButton:
        "main > div:nth-child(3) > section:nth-child(1) > section:nth-child(2)",
      // Header Elements
      headerElm: {
        mainLogo: 'img[alt="GittiGidiyor"]',
        searchInput: '[data-cy="header-search-input"]',
        searchButton: '[data-cy="search-find-button"]',
        loginButton: '[data-cy="header-user-menu"]',
        basketButton: '[data-cy="header-cart-menu"]',
      },
      // Navigation Menu Elements
      navElm: {
        navigationContainer: '[data-cy="navigation-container"]',
        navigationFirstItem:
          '[data-cy="navigation-container"] span:nth-child(1)',
        navigationSecondItem:
          '[data-cy="navigation-container"] span:nth-child(2)',
        navigationThirdItem:
          '[data-cy="navigation-container"] span:nth-child(3)',
        navigationFourthItem:
          '[data-cy="navigation-container"] span:nth-child(4)',
        navigationFifthIem:
          '[data-cy="navigation-container"] span:nth-child(5)',
        navigationSixthItem:
          '[data-cy="navigation-container"] span:nth-child(6)',
        navigationSeventhItem:
          '[data-cy="navigation-container"] span:nth-child(7)',
        navigationEighthItem:
          '[data-cy="navigation-container"] span:nth-child(8)',
        navigationNinthItem:
          '[data-cy="navigation-container"] span:nth-child(9)',
      },
      // Searched Bar Elements
      searchElm: {
        firstSearchedItem:
          '[data-cy="auto-complete-list-container"] li:nth-child(1)',
        secondSearchedItem:
          '[data-cy="auto-complete-list-container"] li:nth-child(2)',
        thirdSearchedItem:
          '[data-cy="auto-complete-list-container"] li:nth-child(3)',
        fourthSearchedItem:
          '[data-cy="auto-complete-list-container"] li:nth-child(4)',
        fifthSearchedItem:
          '[data-cy="auto-complete-list-container"] li:nth-child(5)',
      },
    };
  }
  checkAndClickCookieButton() {
    cy.get(this.fields.closeCookieButton, { timeout: 5000 })
      .should("be.visible")
      .click();
  }
  checkInitialElements() {
    for (let argumentsKey in this.fields.headerElm) {
      cy.get(this.fields.headerElm[argumentsKey], { timeout: 5000 }).should(
        "be.visible"
      );
    }
  }
  checkNavigationMenu() {
    for (let argumentsKey in this.fields.navElm) {
      cy.get(this.fields.navElm[argumentsKey], { timeout: 5000 }).should(
        "be.visible"
      );
    }
  }
  setSearchInput(itemName) {
    cy.get(this.fields.headerElm.searchInput).type(itemName);
  }
  checkSearchedItems() {
    for (let argumentsKey in this.fields.searchElm) {
      cy.get(this.fields.searchElm[argumentsKey], { timeout: 5000 }).should(
        "be.visible"
      );
    }
  }
  clickAnySearchedItem(numOfItemStr) {
    let { searchElm } = this.fields;
    let {
      firstSearchedItem,
      secondSearchedItem,
      thirdSearchedItem,
      fourthSearchedItem,
      fifthSearchedItem,
    } = searchElm;
    switch (numOfItemStr) {
      case "first":
        cy.get(firstSearchedItem).click();
        break;

      case "second":
        cy.get(secondSearchedItem).click();
        break;

      case "third":
        cy.get(thirdSearchedItem).click();
        break;

      case "fourth":
        cy.get(fourthSearchedItem).click();
        break;

      case "fifth":
        cy.get(fifthSearchedItem).click();
        break;
    }
  }
}

export default new homePage();
