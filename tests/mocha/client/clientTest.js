if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("Layout", function(){
      it("shows the header", function(){
        Meteor.flush();
        chai.assert.equal($("header > h1").html(), "Capote")
      });

      it("shows the tagline", function(){
        Meteor.flush();
        chai.assert.equal($("header > h2").html(), "Track your daily word count")
      });
    });

    describe("Second Post", function(){
      // before(function(done){
      //   Meteor.autorun(function(){
      //     var numeroDos = Posts.findOne({title: "fatback filet mignon"});
      //     if (numeroDos){
      //       //selectNumeroDos();
      //       done();
      //     }
      //   })
      // });
      it("shows the second post on the home page", function(){
        Meteor.flush();
        chai.assert.equal($(".content:eq(1) a").html(), "fatback filet mignon");
      });

      it("follow the link to the singlePost page", function (done) {
        try {
          FlowRouter.go("/");
          afterRendered(Template.postItem, function() {
            chai.expect($(".content > div")[0]).to.not.be.undefined;
            $(".content > div:eq(1) a").click();
            setTimeout(function() {
                chai.assert.equal($(".post-content").html(), "Bacon ipsum dolor amet alcatra turkey shank cupim corned beef brisket chuck boudin tri-tip t-bone kevin fatback filet mignon. Short loin tongue short ribs.");
                done();
            },100);
          })
        } catch (e) {
          done(e);
        }
      });
    })
  });
}
