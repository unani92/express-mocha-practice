const utils = require("./utils.js");
// const assert = require("assert");
const should = require("should");

describe("utils.js is used to", () => {
  it("change first letter from lower to upper", () => {
    const result = utils.capitalize("hello");
    result.should.be.equal("Hello");
  });
});
