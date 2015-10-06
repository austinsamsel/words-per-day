Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

  Meteor.subscribe('posts');

  // This code only runs on the client
  Template.layout.helpers({
    posts: function () {
      return Posts.find({});
    }
  });
}
