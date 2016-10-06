(function(module) {
  var reposController = {};

  reposController.index = function() {
    $("#about").hide(),
    $("#work").hide(),
    $("#contact").hide(),
    $('#about2').delay(100).hide().slideDown(300)
    repos.requestRepos(repoView.index);
  };

  module.reposController = reposController;
})(window);
