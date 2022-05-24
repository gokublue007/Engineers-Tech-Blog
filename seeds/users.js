//* import the user model
const { User } = require("../models");

//* Create example/seed data set for the user data
const userData = [
{
    username: "gokublue007",
    email: "jack_crate33@yahoo.com",
    password: "placeholder",
},
{
    username: "k9Unit",
    email: "santahatkid@gmail.com",
    password: "something",
},
{
    username: "InnerBloom",
    email: "TheHoolagon16@yahoo.com",
    password: "crazystuff",
},
];

//* seed the example data
const seedUsers = () =>
    User.bulkCreate(userData, {
    individualHooks: true,
});

//* export the function
module.exports = seedUsers;
