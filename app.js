// Ext.define("User", {
//   extend: "Ext.data.Model",
//   fields: [
//     { name: "id", type: "int" },
//     { name: "name", type: "string" },
//     { name: "age", type: "int" },
//     { name: "phone", type: "string" },
//     { name: "gender", type: "string" },
//     { name: "username", type: "string" },
//     { name: "alive", type: "bool", defaultValue: true }
//   ],

//   validations: [
//     { type: "presence", field: "age" },
//     { type: "length", field: "name", min: 2 },
//     { type: "inclusion", field: "gender", list: ["Male", "Female"] },
//     { type: "exclusion", field: "username", list: ["Admin", "Operator"] },
//     { type: "format", field: "username", matcher: /([a-z]+)[0-9]{2,3}/ }
//   ],

//   proxy: {
//     type: "rest",
//     url: "http://localhost:3004/users",
//     reader: {
//       type: "json"
//     }
//   }
// });

// // var Instance = Ext.ModelManager.getModel("User");

// // // var Instance = Ext.create("User");

// // Instance.load(1, {
// //   scope: this,
// //   success: function(record, operation) {
// //     console.log(record);
// //     console.log(operation);
// //   },
// //   failure: function(record, operation) {
// //     console.log(record);
// //     console.log(operation);
// //   },
// //   callback: function(record, operation, success) {
// //     console.log(record);
// //     console.log(operation);
// //     console.log(success);
// //   }
// // });

// var Instance1 = Ext.create("User", {
//   name: "Namrata",
//   age: 32,
//   phone: "8690090417",
//   gender: "Female",
//   username: "Namrata123"
// });

// Instance1.save();

// setTimeout(() => {
//   Instance1.set("name", "Tejaswini");

//   Instance1.save();
// }, 2000);

// // var user = Ext.create("User", { name: "Ed Spencer", email: "ed@sencha.com" });
// // user.save();

// // var instance = Ext.create("User", {
// //   name: "Ed",
// //   gender: "Male",
// //   username: "edspencer12"
// // });

// // console.log("isValid", instance.isValid());

// // var errors = instance.validate();
// // console.log(errors);

// // if (!mySession1.isValid()) {
// //   var errors = mySession1.validate();
// //   console.log(errors);
// //   errors.items.forEach(function(error) {
// //     console.log(error.message);
// //   });
// // }

// // var mySession2 = Ext.create("SessionModel", {
// //   title: "C#",
// //   sessionLevel: 1
// // });

// // var myComponent = Ext.create("Ext.Component", {
// //   html: "My First ExtJS Application",
// //   x: 50,
// //   y: 50
// // });

// // var myComponent1 = Ext.create("Ext.Component", {
// //   html: "My Second ExtJS Application"
// // });

// // var myContainer = Ext.create("Ext.container.Container", {
// //   items: [myComponent, myComponent1],
// //   layout: "absolute"
// // });

// // Ext.application({
// //   requires: ["Ext.container.Viewport"],
// //   // name: "AM",
// //   // controllers: ["Users"],
// //   // appFolder: "app",
// //   launch: function() {
// //     Ext.create("Ext.container.Viewport", {
// //       items: [
// //         myContainer
// //         // {
// //         //   xtype: "button",
// //         //   text: "Disable",
// //         //   handler: function() {
// //         //     this.up()
// //         //       .down("#myComponent")
// //         //       .disable();
// //         //   }
// //         // },
// //         // {
// //         //   xtype: "button",
// //         //   text: "Enable",
// //         //   handler: function() {
// //         //     this.up()
// //         //       .down("#myComponent")
// //         //       .enable();
// //         //   }
// //         // },
// //         // {
// //         //   xtype: "button",
// //         //   text: "Show",
// //         //   handler: function() {
// //         //     this.up()
// //         //       .down("#myComponent")
// //         //       .show();
// //         //   }
// //         // },
// //         // {
// //         //   xtype: "button",
// //         //   text: "Hide",
// //         //   handler: function() {
// //         //     this.up()
// //         //       .down("#myComponent")
// //         //       .hide();
// //         //   }
// //         // },
// //         // {
// //         //   // xtype: "component",
// //         //   // html: "my First ExtJs Application",
// //         //   itemId: "myComponent",
// //         //   tpl: "name: {firstName} {lastName}",
// //         //   data: {
// //         //     firstName: "Yagnesh",
// //         //     lastName: "Modh"
// //         //   },
// //         //   padding: 20,
// //         //   width: 200,
// //         //   height: 200,
// //         //   style: {
// //         //     border: "2px solid red"
// //         //   },
// //         //   resizable: true,
// //         //   listeners: {
// //         //     resize: {
// //         //       fn: function(component, width, height) {
// //         //         console.log("w/h", width, height);
// //         //       }
// //         //     }
// //         //   }
// //         // }
// //       ]
// //     });
// //   }
// // });
