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
      var wordCount = Session.get('wordCountResult');

      var mostRecent = Goals.findOne({}, {sort: {createdAt: -1}});
      var dailyGoal = mostRecent.dailyGoal

      if (wordCount >= dailyGoal){
        Posts.insert({
          title: title,
          content: content,
          wordCount: wordCount,
          createdAt: new Date()
        });
        $('[name=title]').val('');
        $('[name=content]').val('');
        Session.set('wordCountResult', 0);
      } else {
        console.log('not yet!!!');
      }
    },
    'keyup [name=content]': function(e){
      var wordsToCount = $('[name="content"]').val();
      Meteor.call('getWordcount', wordsToCount, function(err, results){
        if(err) console.error(err);
        else    Session.set('wordCountResult', results);
      });
    }
  });

  Template.createPost.helpers({
    wordCount: function(){
      return Session.get('wordCountResult');
    },
    enoughWords: function(){
      var wordCount = Session.get('wordCountResult');
      var mostRecent = Goals.findOne({}, {sort: {createdAt: -1}});
      if (wordCount >= mostRecent.dailyGoal){
        return true;
      }
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


  Template.currentStreak.helpers({
    streak: function(){
      //
    }
  })


}
