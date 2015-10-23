if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("Layout", function(){
      it("shows the header", function(){
        Meteor.flush();
        chai.assert.equal($("header > h1").html(), "Capote")
      });

      it("shows the app tagline", function(){
        Meteor.flush();
        chai.assert.equal($("header > h2").html(), "Track your daily word count")
      });
    });
    describe("Posts", function(){
      it("should show a clean 'time ago' timestamp", function(){
        chai.expect($(".time:eq(1)").html()).to.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm);
      });

      // it("should show a clean 'time ago' timestamp", function(){
      //  // chai.expect($(".time:eq(1)").html()).to.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm);
      // });

      it("should show my latest post, first.", function(){
        Meteor.flush();
        chai.assert.equal($(".title:eq(0)").html(), "Neutra messenger bag");
      });
    });

    describe("Measure the streak", function(){
      it("displays how many continuous days the user has matched its goal", function(){
        Meteor.flush();

        //chai.assert.equal($(".title:eq(1)").html(), "fatback filet mignon");
      });
    });

    describe("deleting posts", function(){
      before(function(done){
        // creating a post to delete
        $('[name="title"]').val('delete me');
        $('[name="content"]').val('please delete me');
        $(".createPost input[type='submit']").first().click();
        done();
      });

      it("deletes when I tell it to delete", function(){
        Meteor.flush();
        $(".deletePost").first().click();
        chai.assert.equal($(".title:eq(0)").html(), "Neutra messenger bag");
      });

    // can combine these two blocks together... (i think). nevermind.
     });
     describe("creating posts", function(){
      after(function(done){
        // for now delete it to keep posts the same
        $(".deletePost").first().click(); // why no delete
        done();
      });

      it("creates a post when I fill in the fields", function(){
        Meteor.flush();
        $('[name="title"]').val('a new post');
        $('[name="content"]').val('automatic style');
        $(".createPost input[type='submit']").first().click();
        chai.assert.equal($(".title:eq(0)").html(), "a new post");
      });
    });

    describe("wordcount", function() {
      before(function(done){
        // type in the form
        //$('[name="title"]').val('a new post');
        //$('[name="content"]').val('automatic style');
        //$('[name="content"]').keyup(); // to trigger keyup. better bdd
        Session.set('wordCountResult', 2); // set session.
        done();
      });
      it("displays the wordcount when the user types in the form", function(){
        Meteor.flush();
        chai.assert.equal($('.wordcount').html(), "2")
      });
    })

    describe("daily words goal", function(){
      before(function(done){
        $('[name="goal"]').val(400);
        done();
      })
      it("shows the users goal", function(){
        chai.assert.equal($('[name="goal"]').val(), 400)
      });
      // it("user can update the goal and it is saved in the database", function(){
      //   var mostRecent = Goals.findOne({}, {sort: {createdAt: -1}});
      //   var dailyGoal = mostRecent.dailyGoal;
      //   chai.assert(dailyGoal == 400);
      // });

      after(function(done){
        $('[name="goal"]').val(400);
        done();
      });
      it("user can change their goal", function(){
        $('[name="goal"]').val(900);
        chai.assert.equal($('[name="goal"]').val(), 900)
      });
    })
  });
}
