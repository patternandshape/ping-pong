describe ("pingPong", function() {
  it("will return ping when a number divisible by 3 is entered", function () {
    expect(pingPong("3")).to.equal(true);
  });
  it("will return pong when a number divisible by 5 is entered", function () {
    expect(pingPong("5")).to.equal(true);
  });
  it("will return pingpong when a number divisible by 15 is entered", function () {
    expect(pingPong("15")).to.equal(true);
  });
  it("will return the number entered when the number is not divisible by 3, 5, nor 15", function () {
    expect(pingPong("4")).to.equal(false);
  });
});
