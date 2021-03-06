const { Sequelize } = require('sequelize');

const User = require('../models/User');
const Client = require('../models/Client');
const Address = require('../models/Address');
const Product = require('../models/Product');
const Photo = require('../models/Photo');
const Buy = require('../models/Buy');
const Product_Buy = require('../models/Product_Buy');

const configDB = require('../configs/database');

const connection = new Sequelize(configDB)

User.init(connection);
Client.init(connection);
Address.init(connection);
Product_Buy.init(connection);
Product.init(connection);
Photo.init(connection);
Buy.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Client.associate(connection.models);
Product.associate(connection.models);
Photo.associate(connection.models);
Buy.associate(connection.models);
