(function(module){

  var portfolioView = {};


  portfolioView.initialize = function() {
    console.log('portfolioView initialized');
  };


  portfolioView.initIndexPage = function() {
    Piece.all.forEach(function(a) {
      $('#templateContent').append(a.postIt());
      console.log('appended to TemplateContent');
    });
    // porfolioView.setTeasers();
    $('#totalWords').text(Piece.numWordsAll() + ' total words in blog');

  };


  module.portfolioView = portfolioView;

})(window);
