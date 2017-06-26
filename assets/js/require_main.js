requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    "backbone.radio": "vendor/backbone.radio",
    bootstrap: "vendor/bootstrap.min",
    jquery: "vendor/jquery.min",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage.min",
    marionette: "vendor/backbone.marionette.min",
    tether: "vendor/tether.min",
    underscore: "vendor/underscore"
  },
  shim: {
    backbone: {
      deps: ["jquery", "json2", "underscore"],
      exports: "Backbone"
    },
    bootstrap: {
      deps: ["jquery", "tether"]
    },
    localstorage: {
      deps: ["backbone"]
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    underscore: {
      exports: "_"
    }
  }
});

require(['tether'], function(Tether) {
  window.Tether = Tether;
  return Tether;
});

require(['bootstrap'], function() {
  $('[data-toggle="tooltip"]').tooltip();
});

require(['app'], function(UserManager) {
  UserManager.start();
});
