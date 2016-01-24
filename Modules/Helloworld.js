Core.register("Helloworld", function (sandbox) {//模块的构造方法
   var getDataSuccess = function(data) {
         sandbox.sayHello(JSON.stringify(data));

   }

   var getDataFailure = function(error) {

   }

   return {
      activate: function () {
         // sayHello()

         sandbox.request({
            url: "data.json",
            success: getDataSuccess,
            failure: getDataFailure
         });


      },
      destroy: function () {
         // sandbox.removeListener("ModuleGroupingStopping", moduleGroupStopped);
         // sandbox.removeListener("ModuleGroupingStarting", moduleGroupStarted);
      }
   };
});