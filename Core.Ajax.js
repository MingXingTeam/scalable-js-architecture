/*globals Core, $, require*/
(function () {

    var coreAjax = function ($) {
        return {
            //   requestData = {
            //      name: urlMapping
            //      data: data to send to the server - optional
            //      context: callback context - optional
            //      success: callback function (response) - optional
            //      failure: callback function (error message) - optional
            //   }
            request: function(options) {
                    
                    var ajaxMessage = $.extend({
                        type: "GET",
                        dataType: "json"
                    },options);

                    $.ajax(ajaxMessage);
            }
        }
    }

    //manage require module loading scenario
    if (typeof define === "function" && define.amd) {
        define("Core.Ajax", ["Core", "jquery"], function (core, jQuery) {
            core.Ajax = coreAjax(jQuery);
            return core.Ajax;
        });
    }
    else {
        Core.Ajax = coreAjax($);
    }
})();