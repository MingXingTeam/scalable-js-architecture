/*globals Sandbox*/
(function () {
   var core = function () {
      // Private Variable
      var modules = {},
      slice = [].slice;  
      
      var createInstance = function (moduleId, sandbox) {
         var module = modules[moduleId],
             i,
             arrayLength,
             args = module.args,
             newArguments = [],
             instance;

         newArguments.push(sandbox);
         for (i = 0, arrayLength = args.length; i < arrayLength; i++) {
            newArguments.push(args[i]);
         }

         instance = modules[moduleId].creator.apply(null, newArguments);

         return instance;
      };

      return {
         register: function (moduleId, Creator) {
            modules[moduleId] = {
               creator: Creator,
               instance: null,
               args: slice.call(arguments, 2)
            };
         },
         
         start: function (moduleId) {
            if (modules[moduleId] === undefined) {
               throw new Error("Attempt to start a module that has not been registered: " + moduleId);
            }
            //we don't want to start the module twice
            else if (modules[moduleId].instance === null) {
               modules[moduleId].instance = createInstance(moduleId, new Sandbox(this, moduleId));
               modules[moduleId].instance.activate();
            }
         },
         stop: function (moduleId) {
            if (modules[moduleId] === undefined) {
               throw new Error("Attempt to stop a module that has not been registered: " + moduleId);
            }
            var data = modules[moduleId];
            if (data.instance) {
               data.instance.destroy();
               data.instance = null;
            }
         },
         getModule: function (moduleId) {
            var returnValue;

            if (modules[moduleId] === undefined) {
               returnValue = null;
            }
            else if (modules[moduleId].instance === null) {
               returnValue = null;
            }
            else {
               returnValue = modules[moduleId].instance;
            }
            return returnValue;
         }
      };
   };
      // Expose Core as an AMD module
   if (typeof define === "function" && define.amd) {
      define("Core", [], function () {
         return core();
      });
   }
   else {
      window['Core'] = core();
   }
})();