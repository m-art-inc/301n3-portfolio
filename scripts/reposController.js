(function(module) {
  var reposController = {};

  reposController.index = function() {
    $("#about").hide(),
    $("#work").hide(),
    $("#contact").hide(),
    $('#repos').delay(100).hide().slideDown(300)
    repos.requestRepos(repoView.index);
  };

  module.reposController = reposController;
})(window);
