var myComponent = Ext.create("Ext.Component", {
  html: "My First ExtJS Application",
  x: 50,
  y: 50
});

var myComponent1 = Ext.create("Ext.Component", {
  html: "My Second ExtJS Application"
});

var myContainer = Ext.create("Ext.container.Container", {
  items: [myComponent, myComponent1],
  layout: "absolute"
});

Ext.application({
  requires: ["Ext.container.Viewport"],
  // name: "AM",
  // controllers: ["Users"],
  // appFolder: "app",
  launch: function() {
    Ext.create("Ext.container.Viewport", {
      items: [
        myContainer
        // {
        //   xtype: "button",
        //   text: "Disable",
        //   handler: function() {
        //     this.up()
        //       .down("#myComponent")
        //       .disable();
        //   }
        // },
        // {
        //   xtype: "button",
        //   text: "Enable",
        //   handler: function() {
        //     this.up()
        //       .down("#myComponent")
        //       .enable();
        //   }
        // },
        // {
        //   xtype: "button",
        //   text: "Show",
        //   handler: function() {
        //     this.up()
        //       .down("#myComponent")
        //       .show();
        //   }
        // },
        // {
        //   xtype: "button",
        //   text: "Hide",
        //   handler: function() {
        //     this.up()
        //       .down("#myComponent")
        //       .hide();
        //   }
        // },
        // {
        //   // xtype: "component",
        //   // html: "my First ExtJs Application",
        //   itemId: "myComponent",
        //   tpl: "name: {firstName} {lastName}",
        //   data: {
        //     firstName: "Yagnesh",
        //     lastName: "Modh"
        //   },
        //   padding: 20,
        //   width: 200,
        //   height: 200,
        //   style: {
        //     border: "2px solid red"
        //   },
        //   resizable: true,
        //   listeners: {
        //     resize: {
        //       fn: function(component, width, height) {
        //         console.log("w/h", width, height);
        //       }
        //     }
        //   }
        // }
      ]
    });
  }
});
