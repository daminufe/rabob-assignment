(function (angular) {
    'use strict';

    angular.module('RabobankAssignment')
    .controller('IssuesController', ['$scope', function($scope) {
        var vm = this;
        vm.page = 'Issues';

        vm.isValidIssues = function (issues) {
            issues.forEach(function (issue) {
                if (issue.hasOwnProperty('first_name') && issue.hasOwnProperty('sur_name') &&
                    issue.hasOwnProperty('issue_count') && issue.hasOwnProperty('date_of_birth')) {
                    vm.validIssues = true;
                } else {
                    vm.validIssues = false;
                }
            });
        };
    }]);
}(angular));
