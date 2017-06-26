define(["app", "apps/config/storage/localstorage"], function(UserManager) {
  UserManager.module("Entities", function(Entities, UserManager, Backbone, Marionette, $, _) {

    var users;

    Entities.User = Backbone.Model.extend({});

    Entities.UserCollection = Backbone.Collection.extend({
      model: Entities.User
    });

    var initializeUsers = function() {
      users = new Entities.UserCollection([{
        id: 1, name: "Nikesh", contact: 156545
      },
      {
        id: 2, name: "Tony", contact: 256545
      }]);
    };

    var API = {
      getUserEntities: function() {
        if (users === undefined) {
          initializeUsers();
        }
        return users;
      }
    };

    UserManager.reqres.setHandler("user:entities", function() {
      return API.getUserEntities();
    });
  });

  return ;
});
