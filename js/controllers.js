/**
 * Created by erikamotely on 4/14/16.
 */
angular.module('starter.controllers', [])



    // This part of the controller help you in User, ie login/lougout of the app. You will need to instantiate in the specifed HTML file

    // LogIn Controller/Signup
    .controller('LoginCtrl', function($scope, $state, $ionicHistory, $ionicPopup) {

        $scope.myGoBack = function(){
            $ionicHistory.goBack();
        }
        $scope.data = {};

        // Auto Login for User
        var currentUser = Parse.User.current();
        if (currentUser) {
            $state.go('app.home');
        } else {

        }
        $scope.signupEmail = function(){
            //Create a new user on Parse
            var user = new Parse.User();
            user.set("username", $scope.data.username);
            user.set("password", $scope.data.password);
            user.set("email", $scope.data.email);

            // other fields can be set just like with Parse.Object
            user.set("somethingelse", "like this!");

            user.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    //alert("Success! You are now registered");
                    $ionicPopup.alert({
                        title: 'Success',
                        content: 'You are now registered!'
                    })
                    $state.go('app.home');

                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    $ionicPopup.alert({
                        title: 'Error',
                        content: error.code + '' + error.message
                    })
                    //alert("Error: " + error.code + " " + error.message);
                }
            });
        };

        $scope.loginEmail = function(){
            Parse.User.logIn($scope.data.username, $scope.data.password, {
                success: function(user) {
                    // Do stuff after successful login.
                    console.log(user);
                    $state.go('app.home');

                },
                error: function(user, error) {
                    // The login failed. Check error to see why.
                    //alert("Error! Please check your information and try again");
                    $ionicPopup.alert({
                        title: 'Error',
                        content: 'Please check your information and try again'
                    })
                    //var alertPopup =
                }
            });
        };

        $scope.forgetPasswordButton = function(){
            $state.go('forgetpassword');

        }

    })


    // Forgot Password Controller
    .controller('ForgotPasswordController', function($scope, $state, $ionicLoading, $ionicHistory) {
        $scope.myGoBack = function(){
            $ionicHistory.goBack();
        }


        $scope.user = {};
        $scope.error = {};
        $scope.state = {
            success: false
        };

        $scope.reset = function() {
            $scope.loading = $ionicLoading.show({
                content: 'Sending',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });

            Parse.User.requestPasswordReset($scope.user.email, {
                success: function() {
                    // TODO: show success
                    $ionicLoading.hide();
                    $scope.state.success = true;
                    $scope.$apply();
                },
                error: function(err) {
                    $ionicLoading.hide();
                    if (err.code === 125) {
                        $scope.error.message = 'Email address does not exist';
                    } else {
                        $scope.error.message = 'An unknown error has occurred, ' +
                            'please try again';
                    }
                    $scope.$apply();
                }
            });
        };

        $scope.login = function() {
            $state.go('login');
        };
    })

    .controller('CoursesCtrl', function($scope, $state) {
        $scope.submit = function () {
            var Course = Parse.Object.extend("Course");
            var course = new Course();

            course.set(coursename, $scope.data.CourseName/*document.getElementById("inputSection").value*/);
            course.set(crn, $scope.data.crn);
            course.set(sectionname, $scope.data.sectionname);
            course.set(courseday,[false, false, false, false, false]);

            course.save(null, {
                success: function(Course) {
                    // Execute any logic that should take place after the object is saved.
                    alert

                    ('New object created with objectId: ' + Course.id);
                },
                error: function(Course, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    })