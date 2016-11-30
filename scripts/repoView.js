(function(module) {
  var repoView = {};

  var ui = function() {
    var $gitProjects = $('#repos');

    $gitProjects.find('ul').empty();
    $gitProjects.show().siblings().hide();
  };

  var render =  Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();

    $('#repos ul').append(
      
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
