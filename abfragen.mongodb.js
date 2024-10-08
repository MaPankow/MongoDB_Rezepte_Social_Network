use("planet-A");

db.users.find({}, {"_id": 1}); // findet die ids aller Datensätze aus der Collection



// db.kommentare.find();
db.users.find(); // findet die gesamten Datensätze aus der Collection

db.kommentare.find({"antwort_auf": { $exists: true }}, {"_id": 0, "kommentar": 1}); //findet nur die Kommentare, die Antworten auf Kommentare sind
db.kommentare.find({"rezept_id": { $exists: true }}, {"_id": 0, "kommentar": 1}); //findet nur die Kommentare, die direkt zu einem Rezept abgegeben wurden


db.users.find();

db.bewertungen.find();

db.rezepte.find({bewertungen: {$exists: true}}, {"bewertungen": 1});
db.bewertungen.find({"rezept_id": { $exists: true}}, {_id: 0, rezept_id: 1, sternebewertung: 1});