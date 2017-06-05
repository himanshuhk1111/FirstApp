/**
 *	This file contain All Contorllers of FormApp 
 */
angular.module('FormApp')

.run(function($rootScope,LayoutService,UserFactory) {
	console.log("intialize parameters");
	LayoutService.setResults(UserFactory.getSize());
	$('#results').html(LayoutService.getResults());
})

.controller('FormCtrl',function($scope,$http,UserFactory,LayoutService,$location){
	
	console.log($location.protocol()+'://'+$location.host()+':'+$location.port()+'/angularjs/HandleForm');
	$scope.FormData = {
			firstName :"",
			lastName : "",
			emailId : "",
			city : "",
			pincode : "",
			mobile : "",
			landline : "",
			description : ""
	};
	
	$scope.onSubmit = function(){
		
		console.log('posting Data...');
		$http
		.post($location.protocol()+'://'+$location.host()+':'+$location.port()+'/angularjs/HandleForm', JSON.stringify($scope.FormData))
		.then(function(response){
				$scope.results = response.data;
				console.log($scope.results.firstName +" "+$scope.results.lastName );
				UserFactory.addUser(response.data);
				LayoutService.setResults(UserFactory.getSize());
				$('#results').html(LayoutService.getResults());
				//$controller('NavbarCtrl', {$scope : navCtrl});
				//console.log(navCtrl);
				//$scope.$scope.registeredUsers = LayoutService.getResults();
		},
			function(response){
				alert("something Went Wrong");
			}
		);
	};
})

.controller('ResultCtrl',function($scope,UserFactory,LayoutService){
	
	$scope.users = UserFactory.getAllUser();
	
	$scope.setUser = function(id){
		console.log(id);
		$scope.currentUser = UserFactory.getUser(id);
		console.log($scope.currentUser);
	}
	
	$scope.remove = function(emailId){
		console.log('removing '+emailId);
		console.log(UserFactory.removeUser(emailId));
		LayoutService.setResults(UserFactory.getSize());
		$('#results').html(LayoutService.getResults());
	}
	
	
})

.controller('NavbarCtrl',function($scope,$rootScope,LayoutService){
	$scope.registeredUsers = LayoutService.getResults();
	$('#results').html(LayoutService.getResults());
	console.log("Number at client side "+$scope.registeredUsers);
})
.controller('UserDetailsCtrl',function($scope,$stateParams,UserFactory,LayoutService){
	console.log("Check "+$stateParams.id);
	$scope.currentUser = UserFactory.getUser($stateParams.id);
	
	$scope.remove = function(emailId){
		console.log('removing '+emailId);
		console.log(UserFactory.removeUser(emailId));
		LayoutService.setResults(UserFactory.getSize());
		$('#results').html(LayoutService.getResults());
		$('#delUser').css({'display':'block'});
		$('#mainContent').css({'display':'none'});
	}
})

;
