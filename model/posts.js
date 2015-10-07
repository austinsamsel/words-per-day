Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

  Meteor.subscribe('posts');

  // This code only runs on the client
  Template.body.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}});
    }
  });
  Template.registerHelper('cleanDate', function(date) {
  	return moment(date).format('MM-DD-YYYY');
  });

  Template.createPost.events({
    'submit form': function(e){
      e.preventDefault();
      var title = $('[name="title"]').val();
      var content = $('[name="content"]').val();
      Posts.insert({
        title: title,
        content: content,
        //wordcount: wordcount,
        createdAt: new Date()
      });
      $('[name=title]').val('');
      $('[name=content]').val('');
    }
  });
  Template.content.events({
    'click .deletePost': function(e){
      e.preventDefault();
      var thisPostId = this._id;
      Posts.remove(thisPostId);
    }
  })


}
