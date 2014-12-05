Design Principles
===================

# Introduction

Development of a dynamic framework for the dictybase using AngularJS, an open-source web application framework. The advantage of AngularJS is that the client side only requires HTML, CSS, and Javascript. The model-view-controller capability makes both development and testing easier. 

These are the design principles

## FrontPage

### Overall Framework
The size of the framework hosting the content will be limited to a maximum of width screen. This approach will enable:

- More control on how the user experience the web.
- Easy to read (avoiding long sentences).

![LimitSize](https://github.com/dictyBase/frontpage-dictybase/blob/feature/footer/images/newDictyLimitingSize.jpg)

### Frontpage layout
This is how the main sections will be organized in the front page:

![FrontpageLayout](https://github.com/dictyBase/frontpage-dictybase/blob/feature/footer/images/newDictyFrontpageLayout.jpg)

### Frontpage mockup
This is the initial design that we plan to accomplish. It will evolve as technology is implemented and as consequence of rounds of interactions.

![Dicty Mockup](https://github.com/dictyBase/frontpage-dictybase/blob/master/images/frontpageNIHmockup.jpg)

## Front page Grid System

A default bootstrap container is used to scaffold the grid system. 


#### Large screens

The grid is divided in two same size main columns. The `left` column contains two rows, one for **Images**, and the second row is for the **latest papers published**. The `right` column contains two rows. The one of the top is for the __latest news__, and the second row contains the shortcuts to the main sections of the dictyBase, which is further divided in two columns: ___widgets___ and ___shortcuts___

* This is a real implementation in HTML5 and Bootstrap:

![FronpageGridDesignApp](https://github.com/dictyBase/frontpage-dictybase/blob/develop/images/frontpageGrid/frontpageGridApp.jpg)

* This is the grid system behind that implementation:

![FronpageGridDesignLarge](https://github.com/dictyBase/frontpage-dictybase/blob/develop/images/frontpageGrid/frontpageGridBig.jpg)

#### Small screens

For extra small screens, a single column contains all the sections, organizes as follows:

![FronpageGridDesignSmall](https://github.com/dictyBase/frontpage-dictybase/blob/develop/images/frontpageGrid/frontpageGridSmall.jpg)

## Footer

The footer will contain the full navigation menu of main sections and submenus. Everything will be generated dynamically as a Angular.JS directive.

The basic scaffold is pre-specified and independent of the number of sections. It will also adapt to a wide range of devices. The scaffold is based on the default Bootstrap grid system of 12 columns.

## Static pages
General layout for static pages:

![Dicty Mockup](https://github.com/dictyBase/frontpage-dictybase/blob/feature/footer/images/newDictyStatic.jpg)