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

      it("should show my 2nd post, second.", function(){
        Meteor.flush();
        chai.assert.equal($(".title:eq(1)").html(), "fatback filet mignon");
      });
    });

    // create a post.
    // edit a post
    // hide content until user expands it.
    //



  });
}
