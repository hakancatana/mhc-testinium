// Generate random text
Cypress.Commands.add("generateRandomText", () => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
});

Cypress.Commands.add("generateUUID", () => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i < 24; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
});
