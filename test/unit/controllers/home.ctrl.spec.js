describe('HomeController', function() {
    beforeEach(module('RabobankAssignment'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.page', function() {
        it('verify if page is Homepage', function() {
            var $scope = {};
            var controller = $controller('HomeController');
            expect(controller.page).toEqual('Homepage');
        });
    });
});
