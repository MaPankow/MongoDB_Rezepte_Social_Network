
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
      


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb4177c")},
//   { $push: { 
//     rezeptbuch: [{rezept_id: "66fd61c211cb6c61f5136f12", 
//       rezeptname: "Quinoa-Salat mit Avocado"
//     }, {rezept_id: "66ffe18e2a427df4635b38d2", 
//       rezeptname: "Chili Sin Carne"
//     }, {rezept_id: "66fd53880eabdff47cb41779", 
//       rezeptname: "Deftiges Seitan-Geschnetzeltes"
//     }, {rezept_id: "66ffe896218fc63a18c3c745", 
//       rezeptname: "Bruschetta mit Tomaten und Basilikum"
//     },
    
//     ]
//   } 
// }
// );


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41779")},
//   { $push: { 
//     rezeptbuch: [{rezept_id: "66ffe896218fc63a18c3c747", 
//       rezeptname: "Veganer Schokoladenpudding"
//     }, {rezept_id: "66ffe52fbaf7e37e1a6928b1", 
//       rezeptname: "Reisbandnudelsalat mit Mango und Avocado"
//     }, {rezept_id: "66ffec0963ac16343c81e108", 
//       rezeptname: "Veganer Schokoladenkuchen"}
    
//     ]
//   } 
// }
// );

// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb4177a")},
//   { $push: { 
//     rezeptbuch: [{rezept_id: "66ffe896218fc63a18c3c746", 
//       rezeptname: "Gegrillte Zucchini mit Erdnussbutter"
//     }, {rezept_id: "66fd53880eabdff47cb41778", 
//       rezeptname: "Bunter Linsensalat"
//     }, {rezept_id: "66ffec0963ac16343c81e109", 
//       rezeptname: "Vegane Zimtschnecken"}
    
//     ]
//   } 
// }
// );

// db.users.find();




// db.users.updateMany(
//     {},
//     { $set: {
//       "folgt": [] } }
//   );

// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41778")},
//   { $push: { 
//     folgt: {user_id: "66fd53880eabdff47cb4177b", 
//       username: "vegan_victor"
//     } 
//   } 
// }
// );


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb4177b")},
//   { $push: { 
//     folgt: [{user_id: "66fd53880eabdff47cb41778", 
//       username: "vegan_chef_mia"
//     }, {user_id: "66fd53880eabdff47cb41779", 
//       username: "plantbased_peter"
//     }
//     ]
//   } 
// }
// );
      


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb4177c")},
//   { $push: { 
//     folgt: [{user_id: "66fd53880eabdff47cb41778", 
//       username: "vegan_chef_mia"
//     }, {user_id: "66fd53880eabdff47cb4177a", 
//       username: "green_guru_lisa"
//     } ]
//   } 
// }
// );


// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41779")},
//   { $push: { 
//     folgt: [{user_id: "66fd53880eabdff47cb4177a", 
//       username: "green_guru_lisa"
//     }, {user_id: "66fd53880eabdff47cb4177c", 
//       username: "nourish_nina"
//     }, {user_id: "66fd53880eabdff47cb4177b", 
//       username: "vegan_victor"}
    
//     ]
//   } 
// }
// );

// db.users.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb4177a")},
//   { $push: { 
//     folgt: [{user_id: "66fd53880eabdff47cb41778", 
//       username: "vegan_chef_mia"
//     }, {user_id: "66fd53880eabdff47cb4177c", 
//       username: "nourish_nina"
//     }, {user_id: "66fd53880eabdff47cb41779", 
//       username: "plantbased_peter"}
    
//     ]
//   } 
// }
// );



// db.rezepte.updateMany(
//     {},
//     { $set: {
//       "bewertungen": [] } }
//   );

  // db.rezepte.updateMany(
  //   {},
  //   { $unset: {
  //     "bewertungen": [] } }
  // );


// db.kommentare.renameCollection("bewertungen");

// db.bewertungen.updateMany(
//   {"rezept_id": { $exists: true } },
//   { $set: {
//     "sternebewertung": [5]
//   }
// } );


// und jetzt alle kommentierten Rezepte in der Collection updaten:

// db.rezepte.updateOne(
//     {"_id": ObjectId("66fd61c211cb6c61f5136f12")},
//     { $set: {
//       "bewertungen.durchschnitt": 5.0 },
//       $inc: {
//         "bewertungen.anzahlBewertungen": 1
//       }
//     }
//   );
  
// db.rezepte.updateOne(
//     {"_id": ObjectId("66ffe896218fc63a18c3c747")},
//     { $set: {
//       "bewertungen.durchschnitt": 5.0 },
//       $inc: {
//         "bewertungen.anzahlBewertungen": 1
//       }
//     }
//   );

// db.rezepte.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41778")},
//     { $set: {
//       "bewertungen.durchschnitt": 5.0 },
//       $inc: {
//         "bewertungen.anzahlBewertungen": 1
//       }
//     }
//   );

// db.rezepte.updateOne(
//   {"_id": ObjectId("66ffe18e2a427df4635b38d2")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );


// db.rezepte.updateOne(
//   {"_id": ObjectId("66ffe896218fc63a18c3c746")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );


// db.rezepte.updateOne(
//   {"_id": ObjectId("66ffe18e2a427df4635b38d1")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );


// db.rezepte.updateOne(
//   {"_id": ObjectId("66ffe52fbaf7e37e1a6928b1")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );

// db.rezepte.updateOne(
//   {"_id": ObjectId("66ffe896218fc63a18c3c745")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );


// db.rezepte.updateOne(
//   {"_id": ObjectId("66fd53880eabdff47cb41779")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );

// db.rezepte.updateOne(
//   {"_id": ObjectId("66ffec0963ac16343c81e109")},
//   { $set: {
//     "bewertungen.durchschnitt": 5.0 },
//     $inc: {
//       "bewertungen.anzahlBewertungen": 1
//     }
//   }
// );