// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('surveyup', ['ionic', 'surveyup.controllers', 'surveyup.services'])

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
$urlRouterProvider
    .when('/app/info', '/app/info/faq')
    .when('/app/market', 'app/market/marketitems')
    .otherwise('/welcome');
// if none of the above states are matched, use this as the fallback
// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
$stateProvider

    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/welcome.html",
      controller: "WelcomeCtrl"
    })

    .state('getnumber', {
      url: "/getnumber",
      templateUrl: "templates/get-number.html",
      controller: "GetNumberCtrl"
    })

    .state('codeconfirm', {
      url: "/codeconfirm",
      templateUrl: "templates/code-confirm.html",
      controller: "CodeConfirmCtrl"
    })

  // setup an abstract state for the tabs directive
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

  // Each tab has its own nav history stack:

    .state('app.survey', {
      url: '/survey',
      views: {
        'tab-survey': {
          templateUrl: 'templates/tab-survey.html',
          controller: 'SurveyCtrl'
        }
      }
    })
    .state('app.survey-questions', {
      url: '/survey/:surveyId',
      views: {
        'tab-survey': {
          templateUrl: 'templates/survey-questions.html',
          controller: 'SurveyQuestionCtrl'
        }
      }
    })

    .state('app.market', {
      url: '/market',
      views: {
        'tab-market': {
          templateUrl: 'templates/tab-market.html',
          controller: 'MarketCtrl'
        }
      }
    })

    .state('app.market.marketitems', {
      url: '/marketitems',
      templateUrl: 'templates/sec-itemsmarket.html',
      controller: 'ItemsMarketCtrl'
    })

    .state('app.market.useritems', {
      url: '/useritems',
      templateUrl: 'templates/sec-itemsuser.html',
      controller: 'ItemsUserCtrl'
    })

    .state('app.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoCtrl'
        }
      }
    })

    .state('app.info.faq', {
      url: '/faq',
      templateUrl: 'templates/sec-faq.html',
      controller: 'InfoFaqCtrl'
    })

    .state('app.info.privacy', {
      url: '/privacy',
      templateUrl: 'templates/sec-privacy.html',
      controller: 'InfoPrivacyCtrl'
    });



});