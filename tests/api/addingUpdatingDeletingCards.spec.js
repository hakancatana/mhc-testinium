describe("Trello RESTAPI Spec", () => {
  let credentials = {
    key: Cypress.env("trelloApiKey"),
    token: Cypress.env("trelloDevToken"),
  };

  let randomText = "";
  let uuid = "";
  let idBoard = "";
  let idList = "";
  let cardList = [];

  before(() => {
    cy.generateRandomText().then((responseText) => {
      randomText = responseText;
    });

    cy.generateUUID().then((responseText) => {
      uuid = responseText;
    });
  });

  it("POST/ creating a new board", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("restApiUrl") + "/boards/",
      qs: {
        name: "testBoard_" + randomText,
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).to.be.eq(200);
    });
  });

  it("GET/ search & get id of newly created board", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("restApiUrl") + "/search",
      qs: {
        query: "testBoard_" + randomText,
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      idBoard = response.body.boards[0].id;
    });
  });

  it("GET/ the board checklist", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("restApiUrl") + "/boards/" + idBoard + "/lists",
      qs: {
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      idList = response.body[0].id;
    });
  });

  it("POST/ creating a card on current board", () => {
    // Creating first card
    cy.request({
      method: "POST",
      url: Cypress.env("restApiUrl") + "/cards/",
      qs: {
        name: "testCard_" + randomText,
        idBoard: idBoard,
        idList: idList,
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      cardList.push(response.body.id);
    });

    // Creating second card
    cy.request({
      method: "POST",
      url: Cypress.env("restApiUrl") + "/cards/",
      qs: {
        name: "testCard_" + randomText,
        idBoard: idBoard,
        idList: idList,
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      cardList.push(response.body.id);
    });
  });

  it("PUT/ updating the card", () => {
    let randomCard = cardList[Math.floor(Math.random() * cardList.length)];

    cy.request({
      method: "PUT",
      url: Cypress.env("restApiUrl") + "/cards/" + randomCard,
      qs: {
        name: "updatedCardName",
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
    });
  });

  it("DELETE/ deleting all cards", () => {
    // Deleting first card
    cy.request({
      method: "DELETE",
      url: Cypress.env("restApiUrl") + "/cards/" + cardList[0],
      qs: {
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
    });

    // Deleting second card
    cy.request({
      method: "DELETE",
      url: Cypress.env("restApiUrl") + "/cards/" + cardList[1],
      qs: {
        key: credentials.key,
        token: credentials.token,
      },
    }).then((response) => {
      expect(response.status).eq(200);
    });
  });
});
