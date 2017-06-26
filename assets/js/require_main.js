requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    bootstrap: "vendor/bootstrap.min",
    jquery: "vendor/jquery.min",
    json2: "vendor/json2",
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
