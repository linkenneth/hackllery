$(function() {

  // temporary data for testing
  App.projects = [
    { title: "Hackllery", authors: [ "Kenneth Lin" ],
      thumbnail: "img/placeholder.png", description: [
	"Showcases a number of cool projects that students have created over",
	"the years. At Berkeley. Need a better description. This is just a",
	"filler description to test stuff."
      ].join(" ") },
    { title: "H@B", authors: [ "Michelle Bu", "Gerald Fong" ] },
    { title: "Berkeley Time", link: "http://www.berkeleytime.com/",
      thumbnail: "img/sf.jpg" },
    { title: "Telebears Oracle", thumbnail: "img/placeholder.png",
      link: "http://www.telebearsoracle.com/" },
    { title: "Project Eigen", authors: [ "Nikita" ] },
    { title: "NotesIm", authors: [ "Kennneth Lin", "Michael Lin" ],
      thumbnail: "img/sf.jpg" }
  ];

  App.projectBoard = new App.ProjectBoard(App.projects);

  App.projectBoardView = new App.ProjectBoardView(App.projectBoard);

});
