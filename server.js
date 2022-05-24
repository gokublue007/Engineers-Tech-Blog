//* IMPORT EVERYTHING NEEDED TO CREATE SERVER
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

//* IMPORT HELPERS AND ROUTES
const routes = require('./controllers');
const helpers = require('./utils/helpers');

require('dotenv').config();

//* INITIALIZE APP AND ESTABLISH PORT
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);