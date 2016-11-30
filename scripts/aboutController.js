(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $("#contact").hide(),
    $("#work").hide(),
    $("#repos").hide(),
    $("#about").delay(100).hide().slideDown(300)
  },

  module.aboutController = aboutController

})(window);
