frontpage-dictybase 
===
[![Travis Build Status](https://travis-ci.org/dictyBase/frontpage-dictybase.svg?branch=develop)](https://travis-ci.org/dictyBase/frontpage-dictybase.svg?branch=develop) [![Dependency Status](https://david-dm.org/dictyBase/frontpage-dictybase.svg)](https://david-dm.org/dictyBase/frontpage-dictybase) [![devDependency Status](https://david-dm.org/dictyBase/frontpage-dictybase/dev-status.svg)](https://david-dm.org/dictyBase/frontpage-dictybase#info=devDependencies)

*The new dynamic FrontPage of dictyBase.*

<img src="https://github.com/dictyBase/frontpage-dictybase/blob/develop/images/frontpageGrid/frontpageGridApp.jpg" width="600">

---

# Introduction

Development of a dynamic framework for the dictybase using AngularJS, an open-source web application framework. The advantage of AngularJS is that the client side only requires HTML, CSS, and Javascript. The model-view-controller capability makes both development and testing easier. 

# Usage

Requires `npm version ^0.10` and `git`. If you have them, run:

```shell
git clone https://github.com/dictyBase/frontpage-dictybase.git
cd frontpage-dictybase
npm install --production
```

As a result, all the dependencies specified in `package.json` are installed locally in the directory `node_modules`. To use them, they have to be added to the path, for example:

`export PATH="$(npm bin):$PATH"`

The final step is to run `bower`:

```shell
bower install
```

# Build

- `grunt serve` for preview
- `grunt build` builds the frontpage into the folder `www`

# Installation for developers

Requires the following installations:

```shell
python
libpng-dev
```
...and then run

```shell
npm install 
```

# Test & Coverage

```shell
grunt test
```

- It uses `Karma` to run the tests available at `test/`
- It uses the plugin `karma-coverage` to generate code coverage using `Istanbul`. The report is available at `coverage/`

To find out more, check the file `test/karma.conf.js`

# Design principles

Documentation about design [can be found here](/documentation/frontpage-design.md).



