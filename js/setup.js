$(function() {

  // temporary data for testing
  App.projects = [
    { title: "Hackllery", authors: [ "Kenneth Lin" ], thumbnail: "lol" },
    { title: "H@B", authors: [ "Michelle Bu", "Gerald Fong" ] }
  ];

  App.projectBoard = new App.ProjectBoard(App.projects);

  App.projectBoardView = new App.ProjectBoardView(App.projectBoard);

});
