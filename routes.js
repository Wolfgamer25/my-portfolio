app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'view/home.html',
    controller: 'PortfolioCtrl'
  })
  .when('/projects/',{
  templateUrl: 'view/projects.html',
  controller: 'PortfolioCtrl'
  })
  .when('/projects/:number',{
    templateUrl: 'view/projects.html',
    controller: 'PortfolioCtrl'
    })
});
