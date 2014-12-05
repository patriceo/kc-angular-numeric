"use strict";
/**
 * User JQuery Numeric Lib to constrain input field to numeric values
 *
 * Usage : <input type="text" numeric-field ...
 */
angular.module("kc-angular-numeric", [])
.directive('numericField', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).numeric();
    }
  }
});