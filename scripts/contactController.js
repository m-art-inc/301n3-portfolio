(function(module) {
  var contactController = {};
  contactController.index = function() {
    $("#about").hide(),
    $("#work").hide(),
    $("#repos").hide(),
    $("#contact").delay(100).hide().slideDown(300)
  },

  module.contactController = contactController

})(window);
