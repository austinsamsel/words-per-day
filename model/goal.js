Goals = new Mongo.Collection('goals');

if (Meteor.isClient) {
  Meteor.subscribe('goals');

  Template.dailyGoal.helpers({
    dailyGoal: function () {
      var mostRecent = Goals.findOne({}, {sort: {createdAt: -1}});
      return mostRecent.dailyGoal
    }
  });

  Template.dailyGoal.events({
    'keyup [name=goal]': function(e){
      e.preventDefault();
      var goal = $('[name="goal"]').val();
      Goals.insert({
        dailyGoal: goal,
        createdAt: new Date()
      });
    },
    'keyup [name=content]': function(e){
      var wordsToCount = $('[name="content"]').val();
      Meteor.call('getWordcount', wordsToCount, function(err, results){
        if(err) console.error(err);
        else    Session.set('wordCountResult', results);
      });
    }
  })
}
