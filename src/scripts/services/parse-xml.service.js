(function (angular) {
    'use strict';

    angular.module('RabobankAssignment')
    .factory('ParseXML', [function() {
        String.prototype.replaceAll = function (search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
        var parseXmlFn;

        if (typeof window.DOMParser != "undefined") {
            parseXmlFn = function(xmlStr) {
                return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
            };
        } else if (typeof window.ActiveXObject != "undefined" &&
               new window.ActiveXObject("Microsoft.XMLDOM")) {
            parseXmlFn = function(xmlStr) {
                var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            throw new Error("No XML parser found");
        }

        return function (content) {
            var xml = parseXmlFn(content);
            debugger;

        };
    }]);
}(angular));
