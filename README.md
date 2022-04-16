# Testinium Case Study

#### E2E & RESTAPI Automation with Cypress

This project aims to automate E2E and API automation for given scenarios.

**Project Structure**

```bash
├── cypress
│   ├── fixtures          # mock data for responses to routes
│   ├── integrations      # default integration tests folder
│   ├── plugins           # launch config
│   ├── screenshots       # failed tests' screenshots
│   ├── support           # custom commands
│       ├── pageObjects   # page objects
├── tests                 # automated tests
│   ├── api               # api specs
│   ├── e2e               # e2e specs
├── reports               # will be generated after run for HTML reports
├── cypress.env.json      # environment variables
├── cypress.json          # cypress config
├── package.json          # package.json
└── README.md
```

##### **Requirements**

- Node v10 or higher
- Following environment variables should be filled by creating "cypress.env.json" on project root. Example file is below;

```json
{
  "trelloApiKey": "{apiKey}",
  "trelloDevToken": "{devToken}"
}
```

**Installations**

You need to run following commands;

`npm install`

Then open new terminalon project root

If you want to run all tests with GUI, you can run with below command:

`npm run cy:open`

If you want to run only e2e spec with headless mode, you can run with below command:

`npm run cy:run-e2e`

If you want to run only api spec with headless mode, you can run with below command:

`npm run cy:run-api`

If you want to run both e2e and api specs with headless mode, you can run with below command:

`npm run cy:run-all`
