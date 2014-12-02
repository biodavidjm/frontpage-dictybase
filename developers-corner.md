Developers corner
===================

*Computational framework for the development of the dictybase*



##### Basic installation
You should have already installed and running in your Mac computer `node`, `npm`, `grunt`, `bower`, `karma`, `yo`. If you have not, then you should VERY carefully install all of them.

--- 

# Grunt

## Test

#### Browser plugins 

Grunt and yeoman used as a default testing growers PhantomJS. 
To test different browser, first they plugging must be installed. For example:
`npm install karma-firefox-launcher --save-dev`

And then the `test/karma.conf.js` file must be updated in the section `plugins`:

```
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Firefox'
    ],

    // Which plugins to enable
    plugins: [
      'karma-safari-launcher',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-opera-launcher',
      'karma-jasmine'
    ],
```

---

# AngularJS
I used the Yeoman generator `generator-angular`, which creates the scaffold to build a web application. It also takes care of Bootstrap and Sass. Steps:

1. `sudo npm install -g generator-angular`
2. `yo angular`

#### Dicty Angular Carousel
* it requires the Angular-UI package (you might choose to install it locally)

	`<script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>`



