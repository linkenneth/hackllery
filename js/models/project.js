/**
 *  A Project constitutes the basic model of a site and the link to it. It
 *  contains basic information like the date it was added to the database,
 *  it's name, and a basic thumbnail.
 */

App.Project = Backbone.Model.extend({

  initialize: function() {

  },

  defaults: {
    title: "",
    authors: [],  // would this be difficult for single authors?
    link: "",
    thumbnail: "",  // may want empty box
    quote: "",
    description: "",
    dateAdded: "",  // want number form?
    dateModified: "",

    /* User statistics */
    // Number of times displayed by ProjectBoard
    displayCount: 0,
    // Number of times opened to the description page
    viewCount: 0,
    // Number of times the link is clicked from the description page
    linkCount: 0,
    likes: 0,
    dislikes: 0,
  }

});
