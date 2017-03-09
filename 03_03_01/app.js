var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books",{
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart",{
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		})
		.otherwise({
			redirectTo:"/books"
		});
});

myApp.factory("kartService",function(){
	var kart=[];
	
	return{
		getKart: function(){
			return kart;
		},
		addToKart: function(book){
			kart.push(book);
		},
		buy:function(book){
			alert("Thanks for buying:",book.name);
		}
	}
});

myApp.factory("bookService",function(){
	var books= [ 
		{
			imgUrl : "1.jpg",
			name : "Adultery",
			price : 205,
			rating : 4,
			binding : "Paperback",
			publisher : "Random House India",
			releaseDate : "12-08-2014",
			details : "Linda, in her thirties, begins to question the routine"
		    },
		    {
			imgUrl : "6.jpg",
			name : "You are mine Captain",
			price : 168,
			rating : 5,
			binding : "Paperback",
			publisher : "Scholastic",
			releaseDate : "01-07-2014",
			details : "Linda, in her thirties, begins to question the routine"
		    },
		    {
			imgUrl : "3.jpg",
			name : "Jasmine",
			price : 205,
			rating : 4,
			binding : "Paperback",
			publisher : "Random House India",
			releaseDate : "12-08-2014",
			details : "Linda, in her thirties, begins to question the routine"
		   }

		];
	return{
		getBooks: function(){
			return books;
		}
	}
});


myApp.controller('HeaderCtrl', function($scope,$location) {
	$scope.appDetails = {
		title : "BooKart",
		tagline : "We have 10 million of books"

	};
	$scope.nav ={};
	$scope.nav.isActive = function(path){
		if(path==$location.path()){
			return true;
		}
		return false;
	}
});

myApp.controller('KartListCtrl',function($scope, kartService){
	$scope.kart=kartService.getKart();
	
	$scope.buy=function(book){
		kartService.buy(book);
	}
});

myApp.controller('BookListCtrl', function($scope, bookService,kartService) {
	$scope.books = bookService.getBooks();

	$scope.addToKart = function(book){
		kartService.addToKart(book);
	}
});