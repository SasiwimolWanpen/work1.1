// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('index',{
		url: '/index',
		templateUrl: 'templates/menu.html',
			//controller: 'AppCtrl'
	})
		
		.state('history',{
		url: '/history',
		templateUrl: 'templates/history.html',
			//controller: 'AppCtrl'
	})
		.state('img',{
		url: '/img',
		templateUrl: 'templates/img.html',
			//controller: 'AppCtrl'
	})
		
		.state('li',{
		url: '/li',
		templateUrl: 'templates/li.html',
			//controller: 'AppCtrl'
	})

		
		.state('login',{
		url:'/login',
		templateUrl: 'templates/login.html',
			//controller: 'AppCtrl'
	})
	.state('set',{
		url:'/set',
		templateUrl: 'templates/set.html',
			//controller: 'AppCtrl'
	})
		$urlRouterProvider.otherwise('/login');
});
