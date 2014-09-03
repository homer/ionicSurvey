// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

// if none of the above states are matched, use this as the fallback
// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
$stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

  // Each tab has its own nav history stack:

    .state('tab.survey', {
      url: '/survey',
      views: {
        'tab-survey': {
          templateUrl: 'templates/tab-survey.html',
          controller: 'SurveyCtrl'
        }
      }
    })
    .state('tab.survey-questions', {
      url: '/survey/:surveyId',
      views: {
        'tab-survey': {
          templateUrl: 'templates/survey-questions.html',
          controller: 'SurveyQuestionCtrl'
        }
      }
    })

    .state('tab.market', {
      url: '/market',
      views: {
        'tab-market': {
          templateUrl: 'templates/tab-market.html',
          controller: 'MarketCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/survey');

});