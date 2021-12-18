/** @format */

const { createHmac } = require("crypto");

const genHash = (str) => {
  const secret = "jsondatasaver";
  if (typeof (str === "string") && str.length > 0) {
    const hash = createHmac("sha256", secret).update(str).digest("hex");

    return hash;
  }

  return false;
};

const compareHash = (str, hashPass = "") => {
  const secret = "jsondatasaver";

  const hash = createHmac("sha256", secret).update(str).digest("hex");

  return hash === hashPass;
};

module.exports = { genHash, compareHash };
