To run this project follow these steps:
install nodejs: https://nodejs.org/en/download/package-manager
install playwright in project terminal: npm init playwright@latest
install allure report: npm install -D allure-playwright
To run test files in debug mode : npx playwright test (filename) --debug
to generate allure reports: allure generate ./allure-results -o ./allure-report, and to open the report: allure open ./allure-report
