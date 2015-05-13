frontpage-dictybase
===================

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

# Design principles

Documentation about design [can be found here](/documentation/frontpage-design.md).

# Build Status

### Travis CI configuration
[![Travis Build Status](https://travis-ci.org/dictyBase/frontpage-dictybase.svg?branch=develop)](https://travis-ci.org/dictyBase/frontpage-dictybase.svg?branch=develop)

The configuration file `.travis.yml` contains the specifications for [Travis](https://travis-ci.org/), including the `node` versions to be tested, required installations, and specifications to run the browsers Firefox and Travis. 


