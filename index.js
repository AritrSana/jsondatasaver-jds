/** @format */

const { genHash, compareHash } = require("./hash");
const { create, read, update, del } = require("./jds");

const jds = {
  create,
  read,
  update,
  del,
  genHash,
  compareHash,
};

module.exports = jds;
