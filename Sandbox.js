var Sandbox = function (core, moduleId) {
   return {
      notify: function () {
         return core.Communication.notify.apply(core.Communication, arguments);
      },

      addListener: function (topic, callback, context) {
         core.Communication.addListener(topic, callback, context);
      },

      removeListener: function (topic, callback) {
         core.Communication.removeListener(topic, callback);
      },

      removeAllListeners: function (context) {
         core.Communication.removeAllListenersForContext(context);
      },

      //DOM操作
      sayHello: function (data) {
         // console.info(core.DomManipulation)
         var $ = core.DomManipulation.getJquery();
         $("#test").append("hello world " + data);
      },

      //数据请求
      request: function(data) {
         core.Ajax.request(data, moduleId);
      }
   };
};