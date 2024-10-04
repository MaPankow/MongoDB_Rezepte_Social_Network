
use('planet-A');

// db.users.updateMany(
//     {},
//     { $set: {
//       "rezeptbuch": [] } }
//   );


db.users.updateOne(
  {"_id": ObjectId("66fd53880eabdff47cb41778")},
  { $push: { 
    rezeptbuch: {rezept_id: "66fd61c211cb6c61f5136f12", 
                rezeptname: "Quinoa-Salat mit Avocado"
              } 
        } 
      }
);

db.users.find();


