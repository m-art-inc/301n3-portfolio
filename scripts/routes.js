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

  page("/about2", function() {
    reposController.index();
  }),

  page();
