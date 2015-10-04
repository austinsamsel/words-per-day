//https://stackoverflow.com/questions/28335147/requiring-timeouts-when-testing-meteor-with-velocity-and-jasmine?lq=1
//https://stackoverflow.com/questions/28639640/meteor-js-iron-router-unit-testing-with-route-go-in-server-side-doesnt

// this.afterRendered = function(template, f) {
//   var cb = template.rendered;
//   template.rendered = function() {
//     if (typeof cb === "function") {
//       cb();
//     }
//     template.rendered = cb;
//     if (typeof f === "function") {
//       f();
//     }
//   }
// }
