/**
 *  A ProjectBoard holds a list of Projects to be displayed on the
 *  screen. The ProjectBoard can be filtered, searched in, and more to
 *  display only a select subset of Projects in the database. If no such
 *  filter/search is active, the ProjectBoard should display a random
 *  subset of the Projects, possibly weighted by popularity.
 */

App.ProjectBoard = Backbone.Collection.extend({

  initialize: function() {

  },

  model: App.Project

});

