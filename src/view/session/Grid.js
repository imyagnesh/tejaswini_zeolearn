Ext.define("SessionGridPanel", {
  extend: "Ext.grid.Panel",
  alias: "widget.sessionGridPanel",
  listeners: {
    itemdblclick: function(v, record) {
      var formWindow = Ext.create("SessionForm");
      var form = formWindow.down("form");
      form.loadRecord(record);
      formWindow.show();
    }
  },

  store: {
    fields: [
      { name: "title", sortType: "asUCText" },
      { name: "id", sortType: "asInt" },
      "approved",
      {
        name: "sessionTimeDateTime",
        sortType: "asDate",
        type: "date",
        dateFormat: "c"
      },
      {
        name: "sessionTimePretty",
        type: "string",
        convert: function(v, rec) {
          var convertIt = Ext.util.Format.dateRenderer("m/d/Y g:i a");
          var pretty = convertIt(rec.get("sessionTimeDateTime"));
          return pretty;
        }
      }
    ],
    autoLoad: true,
    autoSync: true,
    proxy: {
      type: "rest",
      url: "http://localhost:3004/session",
      reader: {
        type: "json"
      }
    },
    sorters: [{ property: "title" }],
    groupField: "sessionTimeDateTime"
  },
  columns: [
    { text: "Id", dataIndex: "id" },
    { text: "Title", dataIndex: "title", flex: 1 },
    { text: "Approved", dataIndex: "approved" },
    {
      text: "Session Start Date",
      dataIndex: "sessionTimeDateTime"
    }
  ],
  features: [
    {
      ftype: "grouping",
      groupHeaderTpl: "Total records: {rows.length}"
    }
  ]
});
