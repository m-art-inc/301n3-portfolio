page("/", function() {
  Piece.fetchData(portfolioView.initIndexPage),
  aboutController.index();
}),

  page("/work", function() {
    workController.index();
  }),

  page("/about", function() {
    aboutController.index();
  }),

  page("/contact", function() {
    contactController.index();
  }),

  page("/repos", function() {
    reposController.index();
  }),

  page();
