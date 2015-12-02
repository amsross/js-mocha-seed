var should = require("should");
var Person = require("../src/kata");

describe(Person, function () {
  describe("#greet", function () {
    it("returns a greeting", function() {
      var person = new Person();
      person.greet().should.eql("Hello!");
    });
  });
});
