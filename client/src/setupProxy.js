const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};



// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
// };
// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(proxy('/auth/google',
//         { target: 'http://localhost:5000/' }
//     ));
// }
