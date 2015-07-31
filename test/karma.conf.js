// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-11-19 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-utils-pagination/dirPagination.js',
      'bower_components/SHA-1/sha1.js',
      'bower_components/angulartics/src/angulartics.js',
      'bower_components/angulartics/src/angulartics-adobe.js',
      'bower_components/angulartics/src/angulartics-chartbeat.js',
      'bower_components/angulartics/src/angulartics-cnzz.js',
      'bower_components/angulartics/src/angulartics-flurry.js',
      'bower_components/angulartics/src/angulartics-ga-cordova.js',
      'bower_components/angulartics/src/angulartics-ga.js',
      'bower_components/angulartics/src/angulartics-gtm.js',
      'bower_components/angulartics/src/angulartics-kissmetrics.js',
      'bower_components/angulartics/src/angulartics-mixpanel.js',
      'bower_components/angulartics/src/angulartics-piwik.js',
      'bower_components/angulartics/src/angulartics-scroll.js',
      'bower_components/angulartics/src/angulartics-segmentio.js',
      'bower_components/angulartics/src/angulartics-splunk.js',
      'bower_components/angulartics/src/angulartics-woopra.js',
      'bower_components/angulartics/src/angulartics-marketo.js',
      'bower_components/angulartics/src/angulartics-intercom.js',
      'bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js',
      // include the directories where the directive templates are stored:
      'app/scripts/**/*.html',
      'app/views/**/*.html',
      'app/scripts/**/*.json',
      'app/templates/*.html',
      // fixtures
      {pattern: 'app/scripts/frontNews/*.json', included: false}
    ],

    //DJM. Coverage reporter generates the coverage
    reporters: ['progress','coverage'],

    //DJM. Coverage reporter
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/!(ui-bootstrap-tpls-0.12.0).js': ['coverage'], //Not including the ui-bootstrap library in the coverage
      'views/**/*.html': ['ng-html2js'],
      'app/scripts/**/*.html': ['ng-html2js'],
      'app/scripts/*/*.json': ['ng-json2js'],
      'app/templates/*.html': ['ng-html2js']
    },
    //DJM. Coverage reporter
    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    //DJM: this is for the problem of testing templateUrl.
    //we will access this by module name later on in Jasmine
    ngHtml2JsPreprocessor: { 
      // moduleName: 'templates',
      stripPrefix: 'app/' //This is necessary to strip the "app/" part from the "preprocessors"
    },

    ngJson2JsPreprocessor: {
      // Specify a module name if you would like all files to be added as values to a single module
      moduleName : "stubs",

      // Enable / Disable RequireJS support (default is true)
      enableRequireJs : true,
      
      stripPrefix: 'app/scripts/frontNews/',
      
      prependPrefix: 'served/',
     },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      // 'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-ng-html2js-preprocessor',
      //karma's ng-html2js preprocessor which will enable 
      //Karma to automatically generates the js file and 
      //adds the html into $templateCache, which can also 
      //be done by hand if needed.
      'karma-ng-json2js-preprocessor'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
