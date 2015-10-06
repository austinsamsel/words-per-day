if (Meteor.isClient) {

  Meteor.subscribe('posts');

  Template.homePage.helpers({
    posts: function () {
      return Posts.find({});
    }
  });
  Template.singlePost.onCreated(function() {
    var self = this;
    self.autorun(function() {
      var postId = FlowRouter.getParam('postId');
      self.subscribe('post', postId);
    });
  });
  Template.singlePost.helpers({
    post: function() {
      var postId = FlowRouter.getParam('postId');
      var post = Posts.findOne({_id: postId}) || {};
      return post;
    }
  });

  //
  Template.postItem.helpers({
    pathForPost: function() {
      var post = this;
      var postId = post._id;
      var path = FlowRouter.path(postId);
      return path;
    }
  });


}
