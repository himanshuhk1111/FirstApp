/**
 * 
 */

angular.module('FormApp')

.service('LayoutService',function(){
	
	this.results = 0;
	
	this.getResults = function(){
		return this.results;
	}
	this.setResults = function(results){
		this.results = results;
	}
	
})

;