(function (angular) {
    'use strict';

    angular.module('RabobankAssignment')
    .controller('RecordsController', [function() {
        var vm = this;
        vm.page = 'Records';

        vm.validRecords = false;

        vm.isValidRecords = function (issues) {
            issues.forEach(function (issue) {
                if (issue.hasOwnProperty('first_name') && issue.hasOwnProperty('sur_name') &&
                    issue.hasOwnProperty('issue_count') && issue.hasOwnProperty('date_of_birth')) {
                    vm.validRecords = true;
                } else {
                    vm.validRecords = false;
                }
            });
        };


    }]);
}(angular));
