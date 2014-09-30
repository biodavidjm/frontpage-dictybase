// 'use strict';

/**
 * @ngdoc overview
 * @name angularjsFooterDevApp
 * @description
 * # angularjsFooterDevApp  
 *
 * Main module of the application.
 */


(function(){

    var dictyFooter = angular.module('dictyFooterApp', []);

    dictyFooter.controller('dictyFooterCtrl', ['$scope', function ($scope) {

    	$scope.sections = {};

    	$scope.sections.menus = [
        {
            "main": "Genomes", 
            "submain": {
                "D. discoideum": "#",
                "D. fasciculatum": "#",
                "D. purpureum": "#",
                "P. pallidum": "#"
            }
        }, 
        {
            "main": "Tools", 
            "submain": {
                "DictyMine": "#",
                "Signaling Pathways": "#",
                "Genome Browser": "#",
                "BLAST": "#",
                "ID Converter": "#",
                "dictyMart": "#",
                "Textpresso": "#",
                "Biochemical Pathways": "#",
                "Third Party Tools": "#"
            }
        }, 
        {
            "main": "DictyAccess", 
            "submain": {
                "Genome Eye View": "#",
                "Genomic statistics": "#",
                "Annotations": "#",
                "Ontology": "#",
                "Phylogeny": "#"
            }
        }, 
        {
            "main": "Stock Center", 
            "submain": {
                "Home": "#",
                "About SC": "#",
                "Search SC": "#",
                "Order": "#",
                "Deposit": "#",
                "Strain Catalog": "#",
                "Plasmid Catalog": "#",
                "Additional Materials": "#",
                "SC FAQ": "#",
                "Other SC": "#"
            }
        }, 
        {
            "main": "Research", 
            "submain": {
                "Learn about Dicty": "#",
                "Teaching Protocols": "#",
                "Techniques": "#",
                "Anatomy Ontology": "#",
                "Mutant Phenotypes": "#",
                "HTP Phenotyping at Princeton": "#",
                "Codon Bias Table": "#",
                "Nomenclature Guidelines": "#",
                "Axenic Strains History": "#",
                "Franke Dicty Reference Library": "#",
                "Genome Resources": "#"
            }
        },
        {
            "main": "Community", 
            "submain": {
                "Submit an Abstract": "#",
                "Dicty News": "#",
                "Listserv Archive": "#",
                "Colleagues profiles": "#",
                "Dicty Anual Conference": "#",
                "Job Opportunities": "#",
                "History": "#",
                "DictyLabs web": "#",
                "Pictures/Videos": "#",
                "dictyArt": "#",
                "Useful Links": "#",
                "Virtual Library": "#"
            }
        }
    	];

    	$scope.title = 'Dynamic Footer (this is dynamic itself)';

    }]);

    dictyFooter.directive('firstDirective', function (){
        return{
            restrict: 'E',
            template: "<h3><strong>Test: This is a directive</strong></h3>"
        }
    });
})();