/**
 *  The ProjectBoardView manages all the visual rendering of the
 *  ProjectBoard as well as its child Projects. The ProjectBoard should
 *  update itself depending on the filters and searches chosen. Otherwise,
 *  it displays a random subset of the Projects, possibly weighted on
 *  popularity.
 */

App.ProjectBoardView = Backbone.View.extend({

  initialize: function(projectBoard) {
    this.collection = projectBoard;
    this.render();

    // Pinterest/Masonry style brick layout
    var that = this;
    this.$el.imagesLoaded( function() {
      this.masonry({
	itemSelector: ".project"
      });
    });
  },

  el: $(".project-board"),

  events: {

  },

  render: function() {
    _.each(this.collection.models, function(project) {
      this.$el.append(new App.ProjectView({ model: project }).render().el);
    }, this);
  }

});

