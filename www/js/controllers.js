angular.module('starter.controllers', [])

.controller('SurveyCtrl', function($scope, Surveys) {
  $scope.surveys = Surveys.all();
})
.controller('SurveyQuestionCtrl', function($scope, $stateParams) {
  $scope.surveyId = $stateParams.surveyId;
})

.controller('MarketCtrl', function($scope, Gifts) {
  $scope.gifts = Gifts.all();
})

.controller('ProfileCtrl', function($scope) {
})

.controller('InfoCtrl', function($scope) {
});
