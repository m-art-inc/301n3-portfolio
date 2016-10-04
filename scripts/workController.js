(function(module) {
  var workController = {};
  workController.index = function() {
    $("#about").hide(),
    $("#contact").hide(),
    $("#work").delay(100).hide().slideDown(300)
  },

  module.workController = workController

})(window);
