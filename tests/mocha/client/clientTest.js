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

      it("should show my latest post, first.", function(){
        Meteor.flush();
        chai.assert.equal($(".title:eq(0)").html(), "fatback filet mignon");
      });
    });

    // tests for adding a post.
    // tests for deleting a post.

    describe("Measure the streak", function(){
      it("displays how many continuous days the user has matched its goal", function(){
        Meteor.flush();

        //chai.assert.equal($(".title:eq(1)").html(), "fatback filet mignon");
      });
    });

    describe("crud for posts", function(){
      it("deletes when I tell it to delete", function(){
        // add post before delete it....
        
        //Meteor.flush();
        //var posts = Posts.find().fetch();
        //$(".delete").click();
        //chai.assert(posts.count() == 2);

        // https://github.com/mad-eye/meteor-mocha-web/issues/136
        // reset datbase, or how to do this...

        Meteor.flush();
        $(".deletePost").first().click();
        chai.assert.equal($(".title:eq(0)").html(), "fatback filet mignon");

        // for now just recreating the post.
        $('[name="title"]').val('fatback filet mignon');
        $('[name="content"]').val('Bacon ipsum dolor amet alcatra turkey shank cupim corned beef brisket chuck boudin tri-tip t-bone kevin fatback filet mignon. Short loin tongue short ribs.');
        $(".createPost input[type='submit']").first().click();
      });
      it("creates a post when I fill in the fields", function(){
        Meteor.flush();
        $('[name="title"]').val('a title test');
        $('[name="content"]').val('some content for a test.');
        $(".createPost input[type='submit']").first().click();
        chai.assert.equal($(".title:eq(0)").html(), "a title test");
        // then delete it
        $(".deletePost").first().click();
      });
    });

  });
}
