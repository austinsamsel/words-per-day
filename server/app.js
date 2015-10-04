// On server startup, create some posts if DB is empty
if (Meteor.isServer) {
  Meteor.publish("posts", function(){
    return Posts.find();
  });
}
