var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$location,$http){
	$scope.firstName="John";
	$scope.lastName="Doe";
	
	$scope.carname="Vovle";
	
	$scope.loc=$location.absUrl();
	/*
	$http.get("welcome.htm").then(function (response){
		$scope.wel=response.data;
	});
	*/
	$scope.myInit=function(){
		$scope.myColor='red';
		$scope.person={fName:'Yao',lName:'Wu'};
		$scope.names=['Jani','Hege','Kai'];
	}
});

app.directive('myDirect',function(){
	return {
		template:"I was made in a directive constructor!"
	};
});

