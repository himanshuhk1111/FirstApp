/**
 *  Contains user Factory
 */

angular.module('FormApp')

.factory('UserFactory',function(){
	var userFac = {};
	
	var userInfo = [
		{"firstName":"Jatin","lastName":"Sokhal","city":"Faridabad","emailId":"jatin.sokhal3@gmail.com","pincode":"121004","mobile":"9873832448","landline":"1292211067","description":"I want to join your company because i have all the required Skils for the job position"}
		,{"firstName":"Nitin","lastName":"Sokhal","city":"Abohar","emailId":"nitinsokhal@gmail.com","pincode":"121004","mobile":"90009990","landline":"9990900990","description":"I am fresher and i want to join good reputated company where i can explore myself and can learn lots of new things."}
		,{"firstName":"Jatin","lastName":"Sokhal","city":"Faridabad","emailId":"jatin.sokhal3@gmail.com","pincode":"121004","mobile":"9873832448","landline":"1292211067","description":"I want to join your company because i have all the required Skils for the job position"}
		,{"firstName":"Nitin","lastName":"Sokhal","city":"Abohar","emailId":"nitinsokhal@gmail.com","pincode":"121004","mobile":"90009990","landline":"9990900990","description":"I am fresher and i want to join good reputated company where i can explore myself and can learn lots of new things."}
		,{"firstName":"Jatin","lastName":"Sokhal","city":"Faridabad","emailId":"jatin.sokhal3@gmail.com","pincode":"121004","mobile":"9873832448","landline":"1292211067","description":"I want to join your company because i have all the required Skils for the job position"}
		,{"firstName":"Deepika","lastName":"Sokhal","city":"Abohar","emailId":"deepikasokhal@gmail.com","pincode":"121004","mobile":"90009990","landline":"9990900990","description":"I am fresher and i want to join good reputated company where i can explore myself and can learn lots of new things."}


	];
	
	userFac.addUser = function(user){
		userInfo.push(user);
	};
	
	userFac.getAllUser = function(){
		return userInfo;
	};
	
	userFac.getSize = function(){
		console.log('userInfo '+userInfo.length);
		return userInfo.length;
	}
	
	userFac.removeUser = function(id){
		for(var index = 0;index<userInfo.length;index++){
			if(userInfo[index].emailId == id){
				var remove = userInfo.splice(index,1);
				return remove;
			}
		}
		return 'not delelted';
	}
	
	userFac.getUser = function(emailId){
		for(var user in userInfo){
			if(userInfo[user].emailId == emailId)
				return userInfo[user];
		} 
		return null;
	};
	
	return userFac;
})

;
