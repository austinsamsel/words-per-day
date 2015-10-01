// On server startup, create some posts if DB is empty
if (Meteor.isServer) {
  Meteor.publish("posts", function(){
    return Posts.find();
  });

  Meteor.startup(function () {
    if (Posts.find().count() === 0) {
      var content = ["post numero one",
                   "second postttt",
                   "even a third post here",
                   "fourth post",
                   "number five post"];
      for (var i = 0; i < content.length; i++)
        Posts.insert({content: content[i]});
    }
  });
}
