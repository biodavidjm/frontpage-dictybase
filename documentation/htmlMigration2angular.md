#HTML Migration to AngularJS

- Remove `<!--#include virtual*`
- Remove `<html></html>` tags
- Comment out `<head></head>` tags and revise
- Replace anchors: `<a href="#HL5">` to `<a ng-click="gotoAnchor('HL5')">`
- Keep publication links: `<a href="/publication/10608">`
- Replace `<a href="/techniques/">[INDEX]</a>` by `<a ng-href="#/research/techniques">`
- Identify pages with images `<img src="">`
  + Previously move all the images to a same folder at the same root, and link it there. For example, `techniques/media/*png` is moved to `techniques/images/`
- Identify external links: `<a href="http://www.nature.com/nprot/journal/v2/n6/full/nprot.2007.178.html">`
- Identify internal links.
- Assign new <URLs class=""></URLs> (I don't know what I meant here ;-)
- Remove `CVS` folders
