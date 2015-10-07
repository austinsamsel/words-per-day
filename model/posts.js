Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

  Meteor.subscribe('posts');

  // This code only runs on the client
  Template.body.helpers({
    posts: function () {
      return Posts.find({});
    }
  });

  Template.registerHelper('cleanDate', function(date) {
  	return moment(date).format('MM-DD-YYYY');
  });
}
