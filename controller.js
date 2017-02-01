app.controller('PortfolioCtrl',['$scope', '$routeParams', function($scope, $routeParams){
  $scope.number = $routeParams.number || 0;
$scope.intro = {
  name: 'Jonathan Torres',
  subheading: 'Web Developer / Front-end / Angular',
  logo: 'pictures/jeffrey_tarr_JT_initials_logo.png'
};
$scope.about ={
  heading: 'About Me',
  picture: 'pictures/15094473_270516176678578_6862859510010474998_n (1).jpg',
  bio: "I have completed the front-end Certificate for FreeCodeCamp & completed the Web Immersive course at General Assembly. I have done projects in HTML, CSS, Bootstrap, Javascript, Angular and NodeJS. I prefer front-end because I love designing and being able to see the work I do, however; I understand how back-end works and I can combine it with my front-end. I want to program, the idea of learning something new every day excites me.",
  programs:{
    freecodeCamp:{
      title:'FreeCodeCamp',
      logo: 'fa fa-free-code-camp',
      subheading: 'Front-end Certificate',
      bio1: 'An online program / "university" to help me further enhance my knowledge, practice and software development training. An extensive online course covering a vast variety of skills and topics as well as building portfolio projects as pro-bono work for non-profits. Utilizes the Mean Stack and provides certifications for Front End Dev, Data Visualization & Back End Dev along with additional course topics.'
    },
    generalAssembly: {
      title:'General Assembly',
      logo: 'pictures/GA_logo.png',
      subheading: 'Web Developement Immersive',
      bio:'12 week course covering the fundamentals and beyond for web development. Learned and applied best practices for product development, front-end development, and back-end development. Languages/topics covered include HTML, CSS, Javascript, Node.js, MongoDB, Express.js, Angular.js, Heroku, Git/GitHub and Twitter Bootstrap.'
    },
  },
};
$scope.video = {
  title:'Who am I?',
  video:''
};
$scope.project = {
  intro:{
    heading: {
      heading1:'What can I do?',
      heading2: 'Well this website is built using Angular. Check outmore of my work By clicking the arrow!',
      },
    right: 'fa fa-arrow-right',
    left: 'fa fa-arrow-left'
  },
  project1: {
    heading:'PokeBall',
    picture:'pictures/PokeBall.png',
    languages: 'Html, Jquery, Javascript, Css',
    description: 'I created a 2 player pokemon themed foosball game in a canvas. The objective of the game is to make 3 goals on your opponent. Each player has 4 keys to controle each row of characters. I inserted each row of characters into objects because I wanted each row of characters to move as one just like in real foosball. For the menu I used jquery to show when someone enters the page or when someone wins. I was able to make the ball bounce by stating if ball touches the objects position go the opposite direction. ',
    website: 'http://retailer-antennas-51271.bitballoon.com/',
    github: 'https://github.com/Wolfgamer25/Pokemon-Foosball'

  },
  project2: {
    heading: 'UdemyReview',
    picture:'pictures/UdemyReview.png',
    languages: 'Html, Javascript, NodeJS, MongoDB, Express',
    description: 'I created a website where people who have completed udemy courses, can come and review that specific course. I used passport to give users the ability to create a account. Once the user has created a account they can post a review or post a course for people to review. Each comment is liked to the user who posted it thanks to the schema I used. Now if a user tries to post a comment when theyre not logged in, it will direct them back to the login screen.',
    website: 'https://intense-savannah-36248.herokuapp.com/',
    github: 'https://github.com/Wolfgamer25/Udemy-Course-Review'
  },
  project3: {
    heading: 'WeatherDB',
    picture:'pictures/WeatherDB.png',
    languages: 'Html, CSS, Foundation, Angular',
    description: 'I created a weather SPA app where it shows the user the weather in any city they want. I used angular-routes to give each page its own specific route and I also used the weatherAPI to get the json of the specific city they wanted weather information on. Ng-repeat was used to file through the array of days inside the json. ',
    website: 'http://organist-presents-41131.bitballoon.com/#!/',
    github: 'https://github.com/Wolfgamer25/Angular-Weather-App'
  },
};
$scope.projects = [$scope.project.project1, $scope.project.project2, $scope.project.project3];
$scope.cur = $scope.projects[$scope.number];
$scope.increase = function(){
  $scope.number++;
  console.log($scope.number);
};
$scope.decrease = function(){
  $scope.number--;
};
$scope.leng= $scope.projects.length-1;
$scope.contact={
  heading: 'Contact Me',
  email: 'Jonathan.torres25@live.com',
  phone: '678-793-7041',
  linkedin: 'https://www.linkedin.com/in/jonathantorres250',
  github: 'https://github.com/Wolfgamer25',
  icons:{
    github:'fa fa-github',
    linkedin:'fa fa-linkedin-square'
  }
};
}]);
