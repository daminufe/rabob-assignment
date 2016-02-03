describe('ParseXML', function () {
    beforeEach(module('RabobankAssignment'));

    describe('service defined', function () {
        it('should have the service defined', inject(function (ParseXML) {
            expect(ParseXML).toBeDefined();
        }));
    });

});
