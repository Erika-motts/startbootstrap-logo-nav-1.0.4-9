/**
 * Created by erikamotely on 4/14/16.
 */
angular.module('AggiesLand.services',[]).factory('News',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){

    var object = {
        text: "",
        image: null
    };

    return {
        getAll:function(){
            return $http.get('http://45.55.141.129:1337/parse/classes/ClassNameHere',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('http://45.55.141.129:1337/parse/classes/ClassNameHere'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        create:function(data){
            return $http.post('https://api.parse.com/1/classes/News',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('http://45.55.141.129:1337/parse/classes/ClassNameHere'+id,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('http://45.55.141.129:1337/parse/classes/ClassNameHere'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        }

    }

}]).value('PARSE_CREDENTIALS',{
    APP_ID: '<APP_ID_HERE>',
    REST_API_KEY:'<REST_API_KEY_HERE>'
});