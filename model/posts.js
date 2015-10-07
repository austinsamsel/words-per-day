Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

  // Meteor.subscribe('posts');

  // This code only runs on the client
  Template.body.helpers({
    posts: function () {
      return Posts.find({});
    }
  });
  Template.registerHelper('cleanDate', function(date) {
  	return moment(date).format('MM-DD-YYYY');
  });

  Template.createPost.events({
    'submit form': function(e){
      e.preventDefault();
      var title = $('[name=title]').val();
      var content = $('[name=content]').val();
      Posts.insert({
        name: title,
        content: content,
        //wordcount: wordcount,
        createdAt: new Date()
      });
    }
  })


}
