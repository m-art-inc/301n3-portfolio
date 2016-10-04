(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $("#contact").hide(),
    $("#work").hide(),
    $("#about").delay(100).hide().slideDown(300)
  },

  module.aboutController = aboutController

})(window);
