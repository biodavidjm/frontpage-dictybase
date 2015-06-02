Developers corner
===================
*Computational framework for the development of the dictybase*

##### Basic installations
You should have already installed and running in your Mac computer `node`, `npm`, `grunt`, `bower`, `karma`, `yo`. If you have not, then you should VERY carefully install all of them.

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

Use the Yeoman generator `generator-angular`, which creates the scaffold to build a web application. It also takes care of Bootstrap and Sass. Steps:

1. `sudo npm install -g generator-angular`
2. `yo angular`

## Initial steps

* [Official tutorial](https://docs.angularjs.org/tutorial)
* Install Chrome extension AngularJS Batarang
* Install [AngularJs Sublime Text 2 Bundle](https://github.com/Iristyle/Sublime-AngularJS-Coffee-Completions)

## Recommended readings
These are interesting readings about Angular:
* [Things I wish I were told about AngularJS](http://ruoyusun.com/2013/05/25/things-i-wish-i-were-told-about-angular-js.html)

## Scaffolding the project

* `generator-angular`: Yeoman scaffold to develop and test AngularJS. It has its problems
* `angular-seed`: This is an official alternative to keep in mind.


## Style Guides

* Main by [John Papa](https://github.com/johnpapa/angularjs-styleguide)
* Close alternative by [Todd Motto](https://github.com/toddmotto/angularjs-styleguide)

### Principles

The general consensus - shared at some conference talks by members of the AngularJS team - is fortunately quite clear: it's best to group your source-code into modules by functionality. 

## Unit testing

* Library for testing [Jasmine](http://jasmine.github.io/)
* Test runner: [karma](http://karma-runner.github.io/0.12/index.html)
* Adding coverage:
    1. Install `npm install karma-coverage --save-dev` (only if not already included in the package.json file for development)
    2. Add the following parameters to the `karma.conf.js`

        ```       
        reporters: ['progress','coverage'],

        preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'app/scripts/**/*.js': ['coverage']
        },
        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        },
        // Which plugins to enable
        plugins: [
          'karma-phantomjs-launcher',
          'karma-firefox-launcher',
          'karma-jasmine',
          'karma-coverage' <--------- To Include!
        ],
        ```
* Running `grunt test` generates and updates

#### How to access `templateUrl` in unit tests. 

It is not a trivial business. 

* Install karma's ng-html2js preprocessor, which will enable Karma to automatically generates the js file and adds the html into $templateCache, which can also be done by hand if needed. 

	`npm install karma-ng-html2js-preprocessor --save-dev`

* Add to `karma.conf.js`:

```
    files: [
    //add the html templates here
    ]
    ...
    
    preprocessors: {
      'app/scripts/**/*.html': ['ng-html2js'],
      'app/scripts/**/*.json': ['ng-json2js']
    },
    
    ...
    
	//This is necessary to strip the 
	// "app/" part from the "preprocessors"
	ngHtml2JsPreprocessor: { 	
		stripPrefix: 'app/' 
    },
	
	...
	
    plugins: [
      'karma-ng-html2js-preprocessor'
    ],    

```

#### How to access `JSON files` in unit tests. 

It is not definitely trivial. 

* Install `karma-ng-json2js-preprocessor`:

	npm install karma-ng-json2js-preprocessor --save-dev

## Tips

* [JShint](http://www.jshint.com/) to detect errors in javascript code


## Dicty Angular Carousel
* it requires the Angular-UI package (you might choose to install it locally)

	`<script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>`


# Build Status 

### Travis CI configuration

The configuration file `.travis.yml` contains the specifications for [Travis](https://travis-ci.org/), including the `node` versions to be tested, required installations, and specifications to run the browsers Firefox and Travis. 

[![Travis Build Status](https://travis-ci.org/dictyBase/frontpage-dictybase.svg?branch=develop)](https://travis-ci.org/dictyBase/frontpage-dictybase.svg?branch=develop) 

### Check node.js dependencies status using David:
[![Dependency Status](https://david-dm.org/dictyBase/frontpage-dictybase.svg)](https://david-dm.org/dictyBase/frontpage-dictybase) 
[![devDependency Status](https://david-dm.org/dictyBase/frontpage-dictybase/dev-status.svg)](https://david-dm.org/dictyBase/frontpage-dictybase#info=devDependencies)

# NODE

## Update npm dependencies

```shell
# Check for outdated dependencies:
npm outdated
# Update the package.json with the versions you want to update
npm update --save

npm update <name of package>
```

# BOWER
```shell

# Update bower:
npm update -g bower

# List of packages installed with bower:
bower list

```
#### bower updates:
* 2015.05.28. to 1.4.1 (from: 1.3.12)


# DICTY DIRECTIVES

## frontImage
The frontpage carousel requires ui-bootstrap. It is available at the own directory of the directive to facilitate its exportability.

Problem: the carousal stopped loading images from the second slide. The problem was solved by updating from `ui-bootstrap-tpls-0.12.0.js` to `ui-bootstrap-tpls-0.13.0.js`

