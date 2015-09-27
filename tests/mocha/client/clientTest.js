if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    var selectSecondPost = function(){
      Session.set("selected_post", Players.findOne({content: "second postttt"})._id);
    };

    var unselectPost = function(){
      Session.set("selected_post", null);
      Meteor.flush();
    }

    describe("Second Post", function(){
      before(function(done){
        Meteor.autorun(function(){
          var numeroDos = Posts.findOne({content: "second postttt"});
          if (numeroDos){
            //selectNumeroDos();
            done();
          }
        })
      });

      it("should show My second post inside div class='container' ", function(){
        Meteor.flush();
        chai.assert.equal($("div.container > li.content:nth-of-type(2)").html(), "second postttt");
      });
    });



  });
}
