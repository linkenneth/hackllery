/**
 *  The ProjectBoardView manages all the visual rendering of the
 *  ProjectBoard as well as its child Projects. The ProjectBoard should
 *  update itself depending on the filters and searches chosen. Otherwise,
 *  it displays a random subset of the Projects, possibly weighted on
 *  popularity.
 */

App.ProjectBoardView = Backbone.View.Extend({

  initialize: function(projectBoard) {
    this.collection = projectBoard;
  },

  el: $(".project-board"),

  events: {

  }

  render: function() {
    
  }

});

