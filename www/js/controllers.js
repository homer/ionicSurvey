angular.module('surveyup.controllers', [])

.controller('WelcomeCtrl', function($scope, $state){
  $scope.goGetNumber = function(){
    $state.go('getnumber');
  }
})
.controller('GetNumberCtrl', function($scope, $state){
  $scope.goCodeConfirm = function(){
    $state.go('codeconfirm');
  }
})
.controller('CodeConfirmCtrl', function($scope, $state){
  $scope.startSurveyApp = function(){
    $state.go('app.survey');
  }
})
.controller('SurveyCtrl', function($scope, Surveys) {
  $scope.surveys = Surveys.all();
})
.controller('SurveyQuestionCtrl', function($scope, $stateParams, $state, $ionicNavBarDelegate) {
  $scope.surveyId = $stateParams.surveyId;

  $scope.focusQ = 0;

  $scope.survey = {
    title: "Elektrikli Otomobiller",
    questions: [
      {
        type:1,
        q:"Elektrikli Araba kullanmak istermisiniz?",
        a:[
            "Evet",
            "Hayir"
        ]
      },{
        type:2,
        q:"Hangi marka arabaya binmekten hoslanirsiniz?",
        a:[
            "Mercedes",
            "BMW",
            "Audi",
            "Volkswagen",
            "Honda",
            "Opel"
        ]
      },{
        type: 3,
        q:"Kisaca bize hayattan ne istediginizi soyler misiniz?"
      }
    ]
  };

  $ionicNavBarDelegate.setTitle($scope.survey.title);

  $scope.populateQuestion = function(focus) {
    $scope.focusQuestion = $scope.survey.questions[focus];
  };

  $scope.populateQuestion($scope.focusQ);

  $scope.nextQuestion = function(){
    $scope.focusQ++;
    if($scope.focusQ == $scope.survey.questions.length){
      $state.go('app.survey');
    } else{
      $scope.populateQuestion($scope.focusQ);
    }
  }
})

.controller('MarketCtrl', function($scope, Gifts) {
  $scope.gifts = Gifts.all();
})

.controller('ProfileCtrl', function($scope) {
})

.controller('InfoCtrl', function($scope) {
})

.controller('InfoFaqCtrl', function($scope, $ionicNavBarDelegate) {
  $ionicNavBarDelegate.setTitle("SIKÇA SORULAN SORULAR");
})

.controller('InfoPrivacyCtrl',function($scope, $ionicNavBarDelegate){
  $ionicNavBarDelegate.setTitle("GİZLİLİK SÖZLEŞMESİ");
});