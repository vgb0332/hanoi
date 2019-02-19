var express = require('express');
var router = express.Router();

// module.exports = router;

// module.exports = (app) => {
//   /* GET home page. */
//   app.get('/', function(req, res, next) {
//     console.log('whats the matter')
//     res.render('client/template1/index', { title: 'Express' });
//   })
//
// }

router.get('/', function(req, res) {
  res.render('client/template1/index', { title: 'Express' });
});

router.get('/about-us', function(req, res) {
  res.render('client/template1/about-us', { title: 'Express' });
});

router.get('/agencies-listing', function(req, res) {
  res.render('client/template1/agencies-listing', { title: 'Express' });
});

router.get('/agency-detail', function(req, res) {
  res.render('client/template1/agency-detail', { title: 'Express' });
});

router.get('/agent-detail', function(req, res) {
  res.render('client/template1/agent-detail', { title: 'Express' });
});

router.get('/agents-listing', function(req, res) {
  res.render('client/template1/agents-listing', { title: 'Express' });
});

router.get('/blog-detail', function(req, res) {
  res.render('client/template1/blog-detail', { title: 'Express' });
});

router.get('/blog', function(req, res) {
  res.render('client/template1/blog', { title: 'Express' });
});

router.get('/bookmarked', function(req, res) {
  res.render('client/template1/bookmarked', { title: 'Express' });
});

router.get('/contact', function(req, res) {
  res.render('client/template1/contact', { title: 'Express' });
});

router.get('/create-account', function(req, res) {
  res.render('client/template1/create-account', { title: 'Express' });
});

router.get('/create-agency', function(req, res) {
  res.render('client/template1/create-agency', { title: 'Express' });
});

router.get('/error', function(req, res) {
  res.render('client/template1/error', { title: 'Express' });
});

router.get('/faq', function(req, res) {
  res.render('client/template1/faq', { title: 'Express' });
});

router.get('/index-advanced-horizontal-search', function(req, res) {
  res.render('client/template1/index-advanced-horizontal-search', { title: 'Express' });
});

router.get('/index-google-map-fixed-height', function(req, res) {
  res.render('client/template1/index-google-map-fixed-height', { title: 'Express' });
});

router.get('/index-google-map-fixed-navigation', function(req, res) {
  res.render('client/template1/index-google-map-fixed-navigation', { title: 'Express' });
});

router.get('/index-google-map-fullscreen', function(req, res) {
  res.render('client/template1/index-google-map-fullscreen', { title: 'Express' });
});

router.get('/index-horizontal-search-floated', function(req, res) {
  res.render('client/template1/index-horizontal-search-floated', { title: 'Express' });
});

router.get('/index-osm-fixed-height', function(req, res) {
  res.render('client/template1/index-osm-fixed-height', { title: 'Express' });
});

router.get('/index-osm-fixed-navigation', function(req, res) {
  res.render('client/template1/index-osm-fixed-navigation', { title: 'Express' });
});

router.get('/index-osm', function(req, res) {
  res.render('client/template1/index-osm', { title: 'Express' });
});

router.get('/index-slider-horizontal-search-box-floated', function(req, res) {
  res.render('client/template1/index-slider-horizontal-search-box-floated', { title: 'Express' });
});

router.get('/index-slider-horizontal-search-box', function(req, res) {
  res.render('client/template1/index-slider-horizontal-search-box', { title: 'Express' });
});

router.get('/index-slider-search-box', function(req, res) {
  res.render('client/template1/index-slider-search-box', { title: 'Express' });
});

router.get('/index-slider', function(req, res) {
  res.render('client/template1/index-slider', { title: 'Express' });
});

router.get('/invoice-print', function(req, res) {
  res.render('client/template1/invoice-print', { title: 'Express' });
});

router.get('/left-sidebar', function(req, res) {
  res.render('client/template1/left-sidebar', { title: 'Express' });
});

router.get('/my-properties', function(req, res) {
  res.render('client/template1/my-properties', { title: 'Express' });
});

router.get('/pricing', function(req, res) {
  res.render('client/template1/pricing', { title: 'Express' });
});

router.get('/profile', function(req, res) {
  res.render('client/template1/profile', { title: 'Express' });
});

router.get('/properties-listing-grid', function(req, res) {
  res.render('client/template1/properties-listing-grid', { title: 'Express' });
});

router.get('/properties-listing-lines', function(req, res) {
  res.render('client/template1/properties-listing-lines', { title: 'Express' });
});

router.get('/properties-listing', function(req, res) {
  res.render('client/template1/properties-listing', { title: 'Express' });
});

router.get('/property-detail', function(req, res) {
  res.render('client/template1/property-detail', { title: 'Express' });
});

router.get('/right-sidebar', function(req, res) {
  res.render('client/template1/right-sidebar', { title: 'Express' });
});

router.get('/rtl', function(req, res) {
  res.render('client/template1/rtl', { title: 'Express' });
});

router.get('/shortcodes', function(req, res) {
  res.render('client/template1/shortcodes', { title: 'Express' });
});

router.get('/sign-in', function(req, res) {
  res.render('client/template1/sign-in', { title: 'Express' });
});

router.get('/sticky-footer', function(req, res) {
  res.render('client/template1/sticky-footer', { title: 'Express' });
});

router.get('/submit', function(req, res) {
  res.render('client/template1/submit', { title: 'Express' });
});

router.get('/terms-conditions', function(req, res) {
  res.render('client/template1/terms-conditions', { title: 'Express' });
});

router.get('/thank-you', function(req, res) {
  res.render('client/template1/thank-you', { title: 'Express' });
});

router.get('/timeline', function(req, res) {
  res.render('client/template1/timeline', { title: 'Express' });
});

module.exports = router;
