const { getConnection, destroyConnection, truncateAll } = require("db");
const cp = require("child_process");
const redis = require("db/redis");

module.exports = async () => {
  // Test db not needed for Jest, but will be needed for Cypress
};
