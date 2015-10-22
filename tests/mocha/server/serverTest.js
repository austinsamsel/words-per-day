if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should insert posts into the database after server start", function(){
        chai.assert(Posts.find().count() > 0);
      });
    });
    describe("Update daily gaol", function(){
      it("user can update the goal and it matches the database", function(){
        var mostRecent = Goals.findOne({}, {sort: {createdAt: -1}});
        var dailyGoal = mostRecent.dailyGoal;
        chai.assert()
      })
    })
  });

  // test for server method for word count?
}
