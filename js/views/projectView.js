/**
 *  The corresponding view for a Project. The view should display only a
 *  thumbnail and a small description of the Project. When clicked, a modal
 *  should pop up with more detailed information on the Project. This is a
 *  ProjectModalView, also based off the Project model.
 */

App.ProjectView = Backbone.View.extend({

  initialize: function() {

  },

  tagName: "div",

  className: "project span3 well",

  template: _.template($("#project-template").html()),

  events: {
    // "click div.project-container": "openModal"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

