FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "homePage"});
  }
});

FlowRouter.route('/:postId', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "singlePost"});
  }
});
