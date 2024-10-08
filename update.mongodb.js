
use('planet-A');

// db.users.updateMany(
//     {},
//     { $set: {
//       "rezeptbuch": [] } }
//   );


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41778")},
//   { $push: { 
//     rezeptbuch: {rezept_id: "66fd61c211cb6c61f5136f12", 
//                 rezeptname: "Quinoa-Salat mit Avocado"
//               } 
//         } 
//       }
// );



// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41778")},
//   { $push: { 
//     rezeptbuch: {rezept_id: "66ffe18e2a427df4635b38d1", 
//       rezeptname: "Vegane Bouletten"
//     }, 
//   } 
// }
// );


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb4177b")},
//   { $push: { 
//     rezeptbuch: [{rezept_id: "66ffe18e2a427df4635b38d1", 
//       rezeptname: "Vegane Bouletten"
//     }, {rezept_id: "66fd53880eabdff47cb41778", 
//       rezeptname: "Bunter Linsensalat"
//     }, {rezept_id: "66fd53880eabdff47cb41779", 
//       rezeptname: "Deftiges Seitan-Geschnetzeltes"}
    
//     ]
//   } 
// }
// );
      


db.users.updateOne(
  {"_id": ObjectId("66fd53880eabdff47cb4177c")},
  { $push: { 
    rezeptbuch: [{rezept_id: "66fd61c211cb6c61f5136f12", 
      rezeptname: "Quinoa-Salat mit Avocado"
    }, {rezept_id: "66ffe18e2a427df4635b38d2", 
      rezeptname: "Chili Sin Carne"
    }, {rezept_id: "66fd53880eabdff47cb41779", 
      rezeptname: "Deftiges Seitan-Geschnetzeltes"
    }, {rezept_id: "66ffe896218fc63a18c3c745", 
      rezeptname: "Bruschetta mit Tomaten und Basilikum"
    },
    
    ]
  } 
}
);


db.users.updateOne(
  {"_id": ObjectId("66fd53880eabdff47cb41779")},
  { $push: { 
    rezeptbuch: [{rezept_id: "66ffe896218fc63a18c3c747", 
      rezeptname: "Veganer Schokoladenpudding"
    }, {rezept_id: "66ffe52fbaf7e37e1a6928b1", 
      rezeptname: "Reisbandnudelsalat mit Mango und Avocado"
    }, {rezept_id: "66ffec0963ac16343c81e108", 
      rezeptname: "Veganer Schokoladenkuchen"}
    
    ]
  } 
}
);

db.users.updateOne(
  {"_id": ObjectId("66fd53880eabdff47cb4177a")},
  { $push: { 
    rezeptbuch: [{rezept_id: "66ffe896218fc63a18c3c746", 
      rezeptname: "Gegrillte Zucchini mit Erdnussbutter"
    }, {rezept_id: "66fd53880eabdff47cb41778", 
      rezeptname: "Bunter Linsensalat"
    }, {rezept_id: "66ffec0963ac16343c81e109", 
      rezeptname: "Vegane Zimtschnecken"}
    
    ]
  } 
}
);

db.users.find();