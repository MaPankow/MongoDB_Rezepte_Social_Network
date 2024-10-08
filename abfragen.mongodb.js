use("planet-A");

db.users.find({}, {"_id": 1}); // findet die ids aller Datensätze aus der Collection


db.rezepte.find();
db.users.find(); // findet die gesamten Datensätze aus der Collection