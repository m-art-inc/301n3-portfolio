(function(module) {
  var portfolioView = {};

  portfolioView.initIndexPage = function() {
    $("#about").hide(),
    $("#contact").hide(),
  Piece.all.forEach(function(a) {
    $("#templateContent").append(a.postIt());
  });

    // $('#totalWords').text(Piece.numWordsAll() + ' total words in project description.');
  };

    module.portfolioView = portfolioView


})(window);
