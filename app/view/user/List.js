Ext.define("AM.view.user.List", {
  extend: "Ext.grid.Panel",
  alias: "widget.userlist",
  title: "All Users",

  initComponent: function() {
    this.store = {
      fields: ["name", "email"],
      data: [
        {
          name: "Yagnesh",
          email: "yagnesh.modh@gmail.com"
        },
        {
          name: "Namrata",
          email: "Namrata.modh@gmail.com"
        }
      ]
    };

    this.columns = [
      { header: "Name", dataIndex: "name", flex: 1 },
      { header: "Email", dataIndex: "email", flex: 1 }
    ];

    this.callParent(arguments);
  }
});
