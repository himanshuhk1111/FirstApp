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
				templateUrl:'views/header.jsp',
				controller:'NavbarCtrl'
			},
			'content':{
				templateUrl:'views/form.jsp',
				controller:'FormCtrl'
			}
		}
	})
	.state('mainApp.results',{
		url:'results',
		views:{
			'content@':{
				templateUrl:'views/results.jsp',
				controller:'ResultCtrl'
			}
		}
	})
	.state('mainApp.userDetails',{
		url:'results/:id',
		views:{
			'content@':{
				templateUrl:'views/userDetails.jsp',
				controller:'UserDetailsCtrl'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/');
	
})
;