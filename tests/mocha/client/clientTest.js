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
        chai.assert.equal($(".time:eq(1)").html(), "01-03-2015");
      });

      it("should show my latest post, first.", function(){
        Meteor.flush();
        chai.assert.equal($(".title:eq(0)").html(), "Neutra messenger bag");
      });
    });

    // tests for adding a post.
    // tests for deleting a post.

    describe("Measure the streak", function(){
      it("displays how many continuous days the user has matched its goal", function(){
        Meteor.flush();
        chai.assert.equal($(".title:eq(1)").html(), "fatback filet mignon");
      });
    });
  });
}
