angular.module('MyApp', ['ui.bootstrap','MyApp.controllers','MyApp.services'])

    .run(function($state) {


        Parse.initialize("myAppId");
        Parse.serverURL = 'http://45.55.141.129:1337/parse'



    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('courses', {
                url: '/courses', //uRL
                templateUrl: '/teacher.html', //Location of the hml associatedwiththe state
                controller: 'CoursesCtrl' // Controller that is related inside of controller.js
            })
            
            //something goes right here
/*
            .state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: 'LoginCtrl'
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
*/

    }); //Do not use '; ' unless done with the script
/**
 * Created by erikamotely on 4/14/16.
 */
