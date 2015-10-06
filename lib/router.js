Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'home',
    template: 'postList',
    waitOn: function() {
      return Meteor.subscribe('posts');
    },
    data: function () {
      templateData = { posts: Posts.find() };
      return templateData;
    }
});

Router.route('/post/:_id', {
    name: 'singlePost',
    template: 'singlePost',
    data: function(){
        var currentPost = this.params._id;
        return Posts.findOne({ _id: currentPost });
    }
});
