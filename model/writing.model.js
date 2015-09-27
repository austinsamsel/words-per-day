Posts = new Mongo.Collection('posts');

// if (Meteor.isClient) {
//   // This code only runs on the client
//   Template.body.helpers({
//     tasks: [
//       { text: "This is task 1" },
//       { text: "This is task 2" },
//       { text: "This is task 3" }
//     ]
//   });
// }
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    posts: function () {
      return Posts.find({});
    }
  });
}
