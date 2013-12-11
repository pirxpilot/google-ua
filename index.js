var dataset = require('dataset');
var load = require('load');

module.exports = analytics;

function analytics(propertyId) {
  if (!propertyId) {
    propertyId = dataset(document.body, 'gaPropertyId');
    if (!propertyId) {
      return;
    }
  }

  function ga() {
    var q = window.ga.q = window.ga.q || [];
    q.push(arguments);
  }

  window.GoogleAnalyticsObject = 'ga';
  window.ga = window.ga || ga;
  window.ga.l = 1 * new Date();

  ga('create', propertyId);
  ga('send', 'pageview');

  return load('//www.google-analytics.com/analytics.js');
}
