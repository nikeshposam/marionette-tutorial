define(['marionette'], function(Marionette) {

  var UserManagerDef = Marionette.Application.extend({
    region: "#wrapper-main"
  });

  var UserManager = new UserManagerDef();

  UserManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options)
  }

  UserManager.getCurrentRoute = function() {
    return Backbone.history.fragment;
  }

  UserManager.on("start", function() {
    console.log("UserManager app started.....");
    require(["entities/users"], function() {
      var fetchingUsers = UserManager.request("user:entities");
      $.when(fetchingUsers).done(function(users) {
        console.log(users);
      });
    });
    if (Backbone.history) {
      Backbone.history.start();
      if (this.getCurrentRoute() === "") {
        UserManager.trigger("contacts:list");
      }
    }
    //var mainRegion = this.getRegion();
    //mainRegion.show("Hello World")
  });

  return UserManager;
});
