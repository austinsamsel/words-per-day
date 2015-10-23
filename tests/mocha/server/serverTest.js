if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should insert posts into the database after server start", function(){
        chai.assert(Posts.find().count() > 0);
      });
    });
    
    // not sure if i need this or if it really does anything?
    describe("Update daily goal", function(){
      before(function(done){
        // for now delete it to keep posts the same
        Goals.insert({
          dailyGoal: 300,
          createdAt: new Date()
        });
        done();
      });
      it("user can update the goal and it matches the database", function(){
        var mostRecent = Goals.findOne({}, {sort: {createdAt: -1}});
        var dailyGoal = mostRecent.dailyGoal;
        chai.assert(dailyGoal == 300)
      })
    })
  });

  // test for server method for word count?
}
