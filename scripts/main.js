(function (module) {

  function Piece(keys) {
    // Title, Date, Url, Github url, Description, imgUrl
    this.title = keys.title;
    this.date = keys.date;
    this.url = keys.url;
    this.gitUrl = keys.gitUrl;
    this.imgUrl = keys.imgUrl;
    this.description = keys.description;
  }
  Piece.all = [];

  Piece.prototype.postIt = function(){
    var newPiece = $('#template').html();
    var compiledPost = Handlebars.compile(newPiece);
    console.log('Handlebars compiler has been ran');
    return compiledPost(this);

  };


  Piece.loadAll = function (rawData) {
    Piece.all = rawData.map(function(el){
      return new Piece(el);
    });
  };

  Piece.fetchData = function(callback) {
    if(localStorage.portItems) {
      Piece.loadAll(JSON.parse(localStorage.portItems));
      console.log('loaded all from local storage');
      callback();
      // portfolioView.initIndexPage();
    } else {
      $.getJSON('data/portfolioData.json', function(rawData) {
        console.log('Getting json rawdata from file', rawData);
        Piece.loadAll(rawData);
        localStorage.portPieces = JSON.stringify(rawData);
        console.log('stringifying things:', rawData);
        callback();
      });

    }
  };


//   Piece.loadAll = function(rawData) {
//     Piece.all = rawData.map(function(el){
//       return new Piece(el);
//     });
//
//   rawData.forEach(function(ele) {
//     Piece.all.push(new Piece(ele));
//   })
// }
//
// // This function will retrieve the data from either a local or remote source,
// // and process it, then hand off control to the View.
// Piece.fetchData = function() {
//   if (localStorage.rawData) {
//     var storedData = JSON.parse(localStorage.setItem('rawData'));
//     // When rawData is already in localStorage,
//     // we can load it by calling the .loadAll function,
//     // and then render the index page (using the proper method on the articleView object).
//     Piece.loadAll(storedData);//DONE: What do we pass in here to the .loadAll function?
//
//     portfolioView.initIndexPage(); //DONE: Change this fake method call to the correct one that will render the index page.
//   } else {
//     // DONE: When we don't already have the rawData, we need to:
//     // 1. Retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
//     $.ajax({
//       url:'data/portfolioData.json',
//       type: 'GET',
//       success: function(data){
//     // 2. Store the resulting JSON data with the .loadAll method,
//       Piece.loadAll(data);
//     // 3. Cache it in localStorage so we can skip the server call next time,
//       localStorage.setItem('rawData', JSON.stringify(data));
//     // 4. And then render the index page (perhaps with an articleView method?).
//       portfolioView.initIndexPage();
//   }
// })
//
// }
// }




  module.Piece = Piece;

})(window);
