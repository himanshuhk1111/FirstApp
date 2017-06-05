/**
 * FormApp config are as follow 
 */

angular.module('FormApp')

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('mainApp',{
		url:'/',
		views:{
			'header':{
				templateUrl:'views/header.html',
				controller:'NavbarCtrl'
			},
			'content':{
				templateUrl:'views/form.html',
				controller:'FormCtrl'
			}
		}
	})
	.state('mainApp.results',{
		url:'results',
		views:{
			'content@':{
				templateUrl:'views/results.html',
				controller:'ResultCtrl'
			}
		}
	})
	.state('mainApp.userDetails',{
		url:'results/:id',
		views:{
			'content@':{
				templateUrl:'views/userDetails.html',
				controller:'UserDetailsCtrl'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/');
	
})
;