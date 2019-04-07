// todo: put this in one place and import it
function envVarOrBust(s) {
  if (!s) {
    var e =
      "\n\n" +
      "========== CONFIGURATION ERROR! ==========\n" +
      "  Database env var is absent.             \n" +
      "  Did you symlink .env.example to .env?   \n" +
      "==========================================\n\n";
    console.log(e);
    throw e;
  }
  return s;
}

module.exports = {
  // databaseUrl: envVarOrBust(
  //   process.env.DEV_DATABASE_URL || process.env.DATABASE_URL
  // ),
  databaseConnection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DATABASE || 'development',
  },
  server: {
    requireSsl: false,
    enableDeveloperLogin: true,
    secret: "cat",
    graphiql: true,
    apiKey: "thisIsTheTestApiKey"
  },
};
