// Ext.define("AM.controller.Users", {
//   extend: "Ext.app.Controller",
//   init: function() {
//     console.log("hello from controller");
//   }
// });

Ext.define("AM.controller.Users", {
  extend: "Ext.app.Controller",
  stores: ["Users"],
  views: ["user.List", "user.Edit"],
  init: function() {
    this.control({
      userlist: {
        itemdblclick: this.editUser
      },
      "useredit buttons[action=save]": {
        click: this.updateUser
      }
    });
  },

  editUser: function(grid, record) {
    var view = Ext.widget("useredit");
    view.down("form").loadRecord(record);
  }

  updateUser: function(button) {
    console.log(clicked save button)
  }
});
