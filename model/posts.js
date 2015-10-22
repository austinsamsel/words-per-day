Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

  Meteor.subscribe('posts');

  // list the posts
  Template.body.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}});
    }
  });

  // clean the timestamp
  Template.registerHelper('cleanDate', function(date) {
  	return moment(date).format('MM-DD-YYYY');
  });

  // create a post
  Template.createPost.events({
    'submit form': function(e){
      e.preventDefault();
      var title = $('[name="title"]').val();
      var content = $('[name="content"]').val();
      var wordCount = parseInt($('.wordcount').html());
      Posts.insert({
        title: title,
        content: content,
        wordCount: wordCount,
        createdAt: new Date()
      });
      $('[name=title]').val('');
      $('[name=content]').val('');
      Session.set('wordCountResult', 0);
    },
    'keyup [name=content]': function(e){
      var wordsToCount = $('[name="content"]').val();
      Meteor.call('getWordcount', wordsToCount, function(err, results){
        if(err) console.error(err);
        else    Session.set('wordCountResult', results);
      });
    }
  });

  // delete a post
  Template.content.events({
    'click .deletePost': function(e){
      e.preventDefault();
      var thisPostId = this._id;
      Posts.remove(thisPostId);
    }
  });

  // helper to get the wordcount from the form.
  Template.createPost.helpers({
    wordCount: function(){
      return Session.get('wordCountResult');
    }
  });


}
