if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("Second Post", function(){
      // before(function(done){
      //   Meteor.autorun(function(){
      //     var numeroDos = Posts.findOne({content: "second postttt"});
      //     if (numeroDos){
      //       //selectNumeroDos();
      //       done();
      //     }
      //   })
      // });

      it("shows the header", function(){
        Meteor.flush();
        chai.assert.equal($("header > h1").html(), "Capote")
      });

      it("shows the tagline", function(){
        Meteor.flush();
        chai.assert.equal($("header > h2").html(), "Track your daily word count")
      });

      // it("should allow me to create a post", function(){ /* */ });
      // it("allow me to log in", function(){ /* */ });
      // it("allows me to create a new post", function(){ /* */ });

      it("should show My second post inside div class='container' ", function(){
        Meteor.flush();
        chai.assert.equal($("div.container > li.content:nth-of-type(2)").html(), "fatback filet mignon");
      });
    });



  });
}
