// TODO: Due to Cypress, global types like Jest are not properly
// readable and packages like these must be imported in spec files
// This also causes some post-compile errors in WebPack, which can hopefully be fixed soon
// See: https://github.com/cypress-io/cypress/issues/1087
// See also: https://github.com/cypress-io/cypress/issues/1091

require("jest-extended");
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
// https://github.com/nickcolley/jest-axe
// https://github.com/mattphillips/jest-chain
// https://github.com/jefflau/jest-fetch-mock
