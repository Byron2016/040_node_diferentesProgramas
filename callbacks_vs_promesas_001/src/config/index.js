const dotenv = require("dotenv");

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(`Coundn´t find .env file!!`);
}

module.exports = {
  port: process.env.PORT || 4000,
};
