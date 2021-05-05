"use strict";

var testMode = process.env.NODE_ENV === "test";

module.exports = testMode ? {} : require("@abandonware/noble");
