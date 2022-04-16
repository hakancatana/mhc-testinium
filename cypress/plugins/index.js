/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  require("cypress-mochawesome-reporter/plugin")(on);
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.family === "chromium" && browser.name !== "electron") {
      launchOptions.args.push("--no-sandbox", "--incognito");
    }
    if (browser.family === "firefox") {
      launchOptions.preferences["media.navigator.streams.fake"] = true;
      launchOptions.preferences["media.navigator.permission.disabled"] = true;
    }
    return launchOptions;
  });
};
