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
      "useredit button[action=save]": {
        click: this.updateUser
      }
    });
  },

  editUser: function(grid, record) {
    var view = Ext.widget("useredit");
    view.down("form").loadRecord(record);
  },

  updateUser: function(button) {
    var win = button.up("window");
    var form = win.down("form");
    var record = form.getRecord();
    var values = form.getValues();
    console.log("record", record);
    console.log("values", values);

    record.set(values);
    win.close();

    this.getUsersStore().sync();

    // var view = Ext.widget("useredit");
    // var record2 = view.down("form").getRecord();
    // console.log("record2", record2);
  }
});
