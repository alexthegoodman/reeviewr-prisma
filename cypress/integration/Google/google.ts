/// <reference types="Cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";
Given("I open Google page", () => {
  cy.visit(url);
});
