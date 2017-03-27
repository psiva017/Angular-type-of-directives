/**
 * myApp Module
 *
 * Description
 */
angular.module('myApp', []).controller('MainCtrl', ['$scope', function($scope) {
        $scope.text = "Siva";
        $scope.users = "Siva";
        $scope.dateNow = new Date();
        $scope.univ = [{
            "id": "1",
            "name": "Univ 1"
        }, {
            "id": "2",
            "name": "Univ 2"
        }, {
            "id": "3",
            "name": "Univ 3"
        }, {
            "id": "4",
            "name": "Univ 4"
        }, {
            "id": "5",
            "name": "Univ 5"
        }];
        $scope.saveUniv = function() {
            console.log($scope.test);
        }
    }])
    /**
     * attrCheck Directive
     *
     * This directive takes an attribute and perform some actions
     */
    .directive('attrCheck', [function() {
        return {
            restrict: 'E',
            link: function(scope, iElement, iAttrs) {
                var s = iAttrs.name.toString();
                scope.name = s;
            },
            template: "<h2>Hello {{name}}</h2>"
        };
    }])
    /**
     * itemSelect Directive
     *
     * This directive takes an attribute  as object and render Select menu in page
     */
    .directive("itemSelect", function() {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                scope.objects = eval(attrs.value);
            },
            template: `<div class="row"><div class="form-group col-md-4">
             <label>Select University :</label> 
             <select class="form-control"  ng-model="test" ng-options="test as test.name for test in objects" ng-change="saveUniv()">
 			<option value = "1"> Option 1</option>
             </select> <br/>
 			<strong> Selected Univ: </strong> <span class="badge"> {{test.name}}</span> </div></div>`
        }
    })
    /**
     * directiveWithAtScope Directive
     *
     * This directive takes an @ scope. So need to bind if it is coming from controller  using {{}}. 
     */
    .directive('directiveWithAtScope', function() {
        return {
            restrict: 'E',
            scope: {
                message: "@"
            },
            template: "<span>Hello {{message}} !</span>"
        };
    })
    /**
     * directiveWithEqScope Directive
     *
     * This directive takes an = scope. So no need to bind if it is coming from controller using {{}}. 
     */
    .directive('directiveWithEqScope', function() {
        return {
            restrict: 'E',
            scope: {
                usernames: "="
            },
            template: '<input type="text" ng-model="usernames" name="username">'
        };
    })
    /*Filter to reverse a string*/
    .filter(function(input) {
        if (input.length > 0) {
            return input.split("").reverse().join("");
        } else {
            return input;
        }
    });







/*https://code.tutsplus.com/tutorials/mastering-angularjs-directives--cms-22511*/