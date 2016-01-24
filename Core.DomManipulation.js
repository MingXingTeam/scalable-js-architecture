/*globals Core, $*/
(function() {

   var coreDomManipulation = function($, document) {

      var elementMappings = { };

      //wrap dom methods
      var domManipulation = {
         setVisible: function(element, isVisible) {
            if (isVisible) {
               $(element).show();
            } else {
               $(element).hide();
            }
         }
      };

      return {
         addMapping: function(name, domElement) {
            elementMappings[name] = domElement;
         },
         removeMapping: function(name) {
            delete elementMappings[name];
         },
         getDom: function() {
            return domManipulation;
         },
         getJquery: function() {
            return $;
         }
      };
   };
   
   //manage require module loading scenario
   if (typeof define === "function" && define.amd) {
      define("Core.DomManipulation", ["Core", "jquery"], function (core, jQuery) {
         core.DomManipulation = coreDomManipulation(jQuery, document);
         return core.DomManipulation;
      });
   }
   else {
      Core.DomManipulation = coreDomManipulation($, document);
   }

})();