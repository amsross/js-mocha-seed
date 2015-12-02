var assert = require("assert");
var Person = require("../src/kata");

describe("Person", function () {
  it("has a greeting", function() {
    var person = new Person();
    assert.equal(person.greet(), "Hello!");
  });
});
