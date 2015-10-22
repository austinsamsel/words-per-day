// /* globals
//    resetDatabase: true,
//    loadDefaultFixtures: true,
// */
//
// var Future = Npm.require('fibers/future');
//
// resetDatabase = function () {
//   console.log('Resetting database');
//
//   // safety check
//   if (!process.env.IS_MIRROR) {
//     console.error('velocityReset is not allowed outside of a mirror. Something has gone wrong.');
//     return false;
//   }
//
//   var fut = new Future();
//
//   var collectionsRemoved = 0;
//   var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;
//   db.collections(function (err, collections) {
//
//     var appCollections = _.reject(collections, function (col) {
//       return col.collectionName.indexOf('velocity') === 0 ||
//         col.collectionName === 'system.indexes';
//     });
//
//     if (appCollections.length > 0) {
//       _.each(appCollections, function (appCollection) {
//         appCollection.remove(function (e) {
//           if (e) {
//             console.error('Failed removing collection', e);
//             fut.return('fail: ' + e);
//           }
//           collectionsRemoved++;
//           console.log('Removed collection');
//           if (appCollections.length === collectionsRemoved) {
//             console.log('Finished resetting database');
//             fut['return']('success');
//           }
//         });
//       });
//     } else {
//       console.log('No collections found. No need to reset anything.');
//       fut['return']('success');
//     }
//
//   });
//
//   return fut.wait();
// };
//
// loadDefaultFixtures = function () {
//   console.log('Loading default fixtures');
//
//       if (Posts.find().count() === 0) {
//         Posts.insert({
//           title: "Neutra messenger bag",
//           content: "Tousled forage trust fund readymade Neutra messenger bag. Drinking vinegar chia Marfa, vegan messenger bag disrupt Wes Anderson try-hard. Small batch scenester raw denim synth cronut cornhole, iPhone try-hard single-origin.",
//           createdAt: new Date(2015,0,4),
//           wordCount: 33
//         });
//         Posts.insert({
//           title: "fatback filet mignon",
//           content: "Bacon ipsum dolor amet alcatra turkey shank cupim corned beef brisket chuck boudin tri-tip t-bone kevin fatback filet mignon. Short loin tongue short ribs.",
//           createdAt: new Date(2015,0,3),
//           wordCount: 26
//         });
//         Posts.insert({
//           title: "know what I'm sayin'",
//           content: "You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'?",
//           createdAt: new Date(2015,0,1),
//           wordCount: 54
//         });
//       }
//
//   console.log('Finished loading default fixtures');
// };
//
// // beforeAll(function () {
// //   resetDatabase();
// //   loadDefaultFixtures();
// //   console.log('Done fixtures')
// // });
