// Ext.define("AM.controller.Users", {
//   extend: "Ext.app.Controller",
//   init: function() {
//     console.log("hello from controller");
//   }
// });

Ext.define("AM.controller.Users", {
  extend: "Ext.app.Controller",
  views: ["user.List"],
  init: function() {
    this.control({
      userlist: {
        itemdblclick: this.editUser
      }
    });
  },

  editUser: function(grid, record) {
    console.log(grid);
    console.log(record);
    console.log("doble clicked on " + record.get("name"));
  }
});
