

// Select the database to use.
use('planet-A');

// db.createCollection("rezepte");

// db.rezepte.insertOne(
//     {
//         "user": {
//           "user_id": { "$oid": "66fd53880eabdff47cb41778" },
//           "username": "vegan_chef_mia"
//         },
//         "rezeptname": "Bunter Linsensalat",
//         "kategorien": ["Salat", "Linsen"],
//         "beschreibung": "Ein proteinreicher Linsensalat mit buntem Gemüse und einem leckeren Dressing.",
//         "zutaten": [
//           { "zutat": "Grüne Linsen", "menge": "150 g" },
//           { "zutat": "Karotten", "menge": "2 Stück" },
//           { "zutat": "Tomaten", "menge": "2 Stück" },
//           { "zutat": "Zwiebel", "menge": "1 Stück" },
//           { "zutat": "Olivenöl", "menge": "40 ml" },
//           { "zutat": "Balsamico-Essig", "menge": "20 ml" },
//           { "zutat": "Salz", "menge": "1 Prise" },
//           { "zutat": "Pfeffer", "menge": "1 Prise" }
//         ],
//         "schwierigkeitsgrad": "mittel",
//         "zubereitungszeit_minuten": 45,
//         "instruktionen": [
//           { "schritt_1": "Koche die Linsen in Salzwasser, bis sie weich sind." },
//           { "schritt_2": "Schneide die Karotten, Tomaten und Zwiebel klein." },
//           { "schritt_3": "Mische die gekochten Linsen mit dem Gemüse." },
//           { "schritt_4": "Füge Olivenöl, Balsamico, Salz und Pfeffer hinzu." },
//           { "schritt_5": "Lass den Salat für 15 Minuten ziehen und serviere ihn kalt." }
//         ],

//         "energie_in_kcal": 350
//       }
      
// );

// db.rezepte.insertOne(
//     {
//         "user": {
//           "user_id": { "$oid": "66fd53880eabdff47cb41778" },
//           "username": "vegan_chef_mia"
//         },
//         "rezeptname": "Quinoa-Salat mit Avocado",
//         "kategorien": ["Salat", "Quinoa"],
//         "beschreibung": "Ein frischer und nahrhafter Quinoa-Salat mit cremiger Avocado und knackigem Gemüse.",
//         "zutaten": [
//           { "zutat": "Quinoa", "menge": "200 g" },
//           { "zutat": "Avocado", "menge": "1 Stück" },
//           { "zutat": "Paprika", "menge": "1 Stück" },
//           { "zutat": "Gurke", "menge": "1 Stück" },
//           { "zutat": "Olivenöl", "menge": "50 ml" },
//           { "zutat": "Zitronensaft", "menge": "30 ml" },
//           { "zutat": "Salz", "menge": "1 Prise" },
//           { "zutat": "Pfeffer", "menge": "1 Prise" }
//         ],
//         "schwierigkeitsgrad": "leicht",
//         "zubereitungszeit_minuten": 30,
//         "instruktionen": [
//           { "schritt_1": "Koche die Quinoa gemäß der Packungsanleitung." },
//           { "schritt_2": "Schneide die Avocado, Paprika und Gurke in kleine Stücke." },
//           { "schritt_3": "Mische alle Zutaten in einer Schüssel." },
//           { "schritt_4": "Füge Olivenöl, Zitronensaft, Salz und Pfeffer hinzu und vermenge alles gut." },
//           { "schritt_5": "Serviere den Salat frisch und genieße ihn!" }
//         ],
//         "alternative Zutaten": [
//           { "zutat": "Quinoa", "ersatz": "Bulgur" },
//           { "zutat": "Avocado", "ersatz": "Hummus" }
//         ],
//         "allergene": ["Avocado"],
//         "energie_in_kcal": 450
//       }
      
// )

// db.rezepte.insertMany(
//     [{
//         "user": {
//             "user_id": { "$oid": "66fd53880eabdff47cb41779" },
//             "username": "plantbased_peter"
//         },
//         "rezeptname": "Deftiges Seitan-Geschnetzeltes",
//         "kategorien": ["Hauptspeise", "deftig", "Seitan"],
//         "beschreibung": "Ein herzhaftes Gericht aus zartem Seitan, perfekt gewürzt und in einer cremigen Sauce serviert.",
//         "zutaten": [
//             { "zutat": "Seitan", "menge": "300 g" },
//             { "zutat": "Zwiebel", "menge": "1 Stück" },
//             { "zutat": "Paprika", "menge": "1 Stück" },
//             { "zutat": "Sojasauce", "menge": "50 ml" },
//             { "zutat": "Kokosmilch", "menge": "200 ml" },
//             { "zutat": "Gewürze", "menge": "nach Geschmack" }
//         ],
//         "schwierigkeitsgrad": "mittel",
//         "zubereitungszeit_minuten": 45,
//         "instruktionen": [
//             { "schritt_1": "Schneide den Seitan in dünne Streifen." },
//             { "schritt_2": "Zwiebel und Paprika klein schneiden." },
//             { "schritt_3": "Erhitze etwas Öl in einer Pfanne und brate die Zwiebel an." },
//             { "schritt_4": "Füge die Paprika hinzu und brate sie kurz mit." },
//             { "schritt_5": "Gib den Seitan und die Sojasauce dazu und brate alles gut an." },
//             { "schritt_6": "Gieße die Kokosmilch dazu und lasse das Gericht kurz köcheln." },
//             { "schritt_7": "Mit Gewürzen abschmecken und servieren." }
//         ],
//         "alternative Zutaten": [
//             { "zutat": "Seitan", "ersatz": "Tofu" }
//         ],
//         "allergene": ["Sojasauce"],
//         "energie_in_kcal": 500
//     },
//     {
//         "user": {
//             "user_id": { "$oid": "66fd53880eabdff47cb41779" },
//             "username": "plantbased_peter"
//         },
//         "rezeptname": "Vegane Bouletten",
//         "kategorien": ["Hauptspeise", "deftig"],
//         "beschreibung": "Saftige Bouletten aus veganem Hack, ideal für ein herzhaftes Abendessen.",
//         "zutaten": [
//             { "zutat": "veganes Hack", "menge": "400 g" },
//             { "zutat": "Zwiebel", "menge": "1 Stück" },
//             { "zutat": "Paniermehl", "menge": "100 g" },
//             { "zutat": "Kräuter", "menge": "nach Geschmack" },
//             { "zutat": "Öl", "menge": "zum Braten" }
//         ],
//         "schwierigkeitsgrad": "leicht",
//         "zubereitungszeit_minuten": 30,
//         "instruktionen": [
//             { "schritt_1": "Zwiebel fein hacken und in einer Pfanne anbraten." },
//             { "schritt_2": "Das vegane Hack in eine Schüssel geben." },
//             { "schritt_3": "Zwiebel und Paniermehl hinzufügen und gut vermischen." },
//             { "schritt_4": "Mit Kräutern abschmecken und kleine Bouletten formen." },
//             { "schritt_5": "Öl in einer Pfanne erhitzen und die Bouletten goldbraun braten." }
//         ],
//         "allergene": ["Paniermehl"],
//         "energie_in_kcal": 400
//     },
//     {
//         "user": {
//             "user_id": { "$oid": "66fd53880eabdff47cb41779" },
//             "username": "plantbased_peter"
//         },
//         "rezeptname": "Chili Sin Carne",
//         "kategorien": ["Hauptspeise", "deftig", "warm"],
//         "beschreibung": "Ein würziges Chili mit Bohnen und Gemüse, das sättigt und wärmt.",
//         "zutaten": [
//             { "zutat": "Kidneybohnen", "menge": "200 g" },
//             { "zutat": "Mais", "menge": "150 g" },
//             { "zutat": "Paprika", "menge": "1 Stück" },
//             { "zutat": "Zwiebel", "menge": "1 Stück" },
//             { "zutat": "Tomaten", "menge": "400 g" },
//             { "zutat": "Chili-Gewürz", "menge": "nach Geschmack" }
//         ],
//         "schwierigkeitsgrad": "mittel",
//         "zubereitungszeit_minuten": 60,
//         "instruktionen": [
//             { "schritt_1": "Zwiebel und Paprika klein schneiden." },
//             { "schritt_2": "In einem Topf die Zwiebel anbraten." },
//             { "schritt_3": "Paprika hinzufügen und kurz mitbraten." },
//             { "schritt_4": "Die Tomaten und die Bohnen dazugeben und alles gut umrühren." },
//             { "schritt_5": "Mit Chili-Gewürz abschmecken und 30 Minuten köcheln lassen." },
//             { "schritt_6": "Den Mais hinzufügen und weitere 10 Minuten kochen." }
//         ],
//         "allergene": [],
//         "energie_in_kcal": 350
//     }]

// );

// db.rezepte.insertMany(
//     [
//         {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177a" },
//               "username": "green_guru_lisa"
//             },
//             "rezeptname": "Vegane Pho-Suppe",
//             "kategorien": ["Hauptspeise", "vietnamesisch"],
//             "beschreibung": "Eine aromatische und gesunde vietnamesische Suppe, die mit frischen Kräutern und Gewürzen zubereitet wird.",
//             "zutaten": [
//               { "zutat": "Reisnudeln", "menge": "200 g" },
//               { "zutat": "Gemüsebrühe", "menge": "1 l" },
//               { "zutat": "Sojasprossen", "menge": "100 g" },
//               { "zutat": "Koriander", "menge": "50 g" },
//               { "zutat": "Thai-Basilikum", "menge": "50 g" },
//               { "zutat": "Ingwer", "menge": "30 g" },
//               { "zutat": "Limette", "menge": "1 Stück" },
//               { "zutat": "Chili", "menge": "1 Stück" }
//             ],
//             "schwierigkeitsgrad": "leicht",
//             "zubereitungszeit_minuten": 30,
//             "instruktionen": [
//               { "schritt_1": "Koche die Reisnudeln nach Packungsanweisung." },
//               { "schritt_2": "Erhitze die Gemüsebrühe in einem Topf und füge den Ingwer hinzu." },
//               { "schritt_3": "Lass die Brühe für 10 Minuten köcheln." },
//               { "schritt_4": "Füge die gekochten Reisnudeln, Sojasprossen und frische Kräuter hinzu." },
//               { "schritt_5": "Serviere die Suppe mit Limettensaft und Chili." }
//             ],
            
//             "allergene": ["Sojasprossen"],
//             "energie_in_kcal": 350
//           },
//           {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177a" },
//               "username": "green_guru_lisa"
//             },
//             "rezeptname": "Indisches Curry mit Tofu",
//             "kategorien": ["Hauptspeise", "indisch", "Tofu"],
//             "beschreibung": "Ein cremiges und würziges Curry, das Tofu und Gemüse kombiniert und mit Reis serviert wird.",
//             "zutaten": [
//               { "zutat": "Tofu", "menge": "250 g" },
//               { "zutat": "Kokosmilch", "menge": "400 ml" },
//               { "zutat": "Currypaste", "menge": "2 EL" },
//               { "zutat": "Brokkoli", "menge": "200 g" },
//               { "zutat": "Karotten", "menge": "150 g" },
//               { "zutat": "Reis", "menge": "200 g" },
//               { "zutat": "Zwiebel", "menge": "1 Stück" },
//               { "zutat": "Knoblauch", "menge": "2 Zehen" }
//             ],
//             "schwierigkeitsgrad": "mittel",
//             "zubereitungszeit_minuten": 45,
//             "instruktionen": [
//               { "schritt_1": "Schneide den Tofu in Würfel und brate ihn in einer Pfanne goldbraun." },
//               { "schritt_2": "Zwiebel und Knoblauch fein hacken und in der Pfanne anbraten." },
//               { "schritt_3": "Füge die Currypaste hinzu und brate sie kurz mit." },
//               { "schritt_4": "Gib das Gemüse und die Kokosmilch dazu und lass alles köcheln." },
//               { "schritt_5": "Serviere das Curry mit gekochtem Reis." }
//             ],
//             "alternative Zutaten": [
//               { "zutat": "Tofu", "ersatz": "Tempeh" }
//             ],
//             "allergene": ["Sojasprossen"],
//             "energie_in_kcal": 600
//           },
//           {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177a" },
//               "username": "green_guru_lisa"
//             },
//             "rezeptname": "Reisbandnudelsalat mit Mango und Avocado",
//             "kategorien": ["Salat", "kalte Küche"],
//             "beschreibung": "Ein erfrischender Salat mit Reisbandnudeln, fruchtiger Mango und cremiger Avocado.",
//             "zutaten": [
//               { "zutat": "Reisbandnudeln", "menge": "150 g" },
//               { "zutat": "Mango", "menge": "1 Stück" },
//               { "zutat": "Avocado", "menge": "1 Stück" },
//               { "zutat": "Koriander", "menge": "50 g" },
//               { "zutat": "Limette", "menge": "1 Stück" },
//               { "zutat": "Chili", "menge": "1 Stück" },
//               { "zutat": "Sesamöl", "menge": "2 EL" }
//             ],
//             "schwierigkeitsgrad": "leicht",
//             "zubereitungszeit_minuten": 20,
//             "instruktionen": [
//               { "schritt_1": "Koche die Reisbandnudeln nach Packungsanweisung." },
//               { "schritt_2": "Schneide die Mango und Avocado in Würfel." },
//               { "schritt_3": "Mische die Nudeln mit Mango, Avocado und Koriander." },
//               { "schritt_4": "Gib Sesamöl und Limettensaft dazu und vermische alles gut." },
//               { "schritt_5": "Serviere den Salat kalt." }
//             ],
//             "alternative Zutaten": [],
//             "allergene": [],
//             "energie_in_kcal": 400
//           }
          
          
           
//         ]

// );

// db.rezepte.insertMany(
//     [
//         {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177b" },
//               "username": "vegan_victor"
//             },
//             "rezeptname": "Bruschetta mit Tomaten und Basilikum",
//             "kategorien": ["Vorspeise", "italienisch", "kalte Küche"],
//             "beschreibung": "Eine klassische italienische Vorspeise, die frisch und aromatisch ist. Perfekt für einen Sommerabend.",
//             "zutaten": [
//               { "zutat": "Baguette", "menge": "1 Stück" },
//               { "zutat": "Tomaten", "menge": "4 Stück" },
//               { "zutat": "Frisches Basilikum", "menge": "1 Bund" },
//               { "zutat": "Olivenöl", "menge": "50 ml" },
//               { "zutat": "Salz", "menge": "1 Prise" },
//               { "zutat": "Pfeffer", "menge": "1 Prise" }
//             ],
//             "schwierigkeitsgrad": "leicht",
//             "zubereitungszeit_minuten": 20,
//             "instruktionen": [
//               { "schritt_1": "Schneide das Baguette in Scheiben und röste es kurz im Ofen." },
//               { "schritt_2": "Schneide die Tomaten in kleine Würfel und mische sie mit Olivenöl, Salz, Pfeffer und gehacktem Basilikum." },
//               { "schritt_3": "Verteile die Tomatenmischung auf den gerösteten Baguettescheiben und serviere sie sofort." }
//             ],
            
//             "allergene": ["Gluten"],
//             "energie_in_kcal": 250
//           },
//           {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177b" },
//               "username": "vegan_victor"
//             },
//             "rezeptname": "Gegrillte Zucchini mit Erdnussbutter",
//             "kategorien": ["Vorspeise", "kalte Küche", "vegan"],
//             "beschreibung": "Ein kreatives und unerwartetes Gericht, das die Süße von Zucchini mit der herzhaften Erdnussbutter kombiniert.",
//             "zutaten": [
//               { "zutat": "Zucchini", "menge": "2 Stück" },
//               { "zutat": "Erdnussbutter", "menge": "100 g" },
//               { "zutat": "Olivenöl", "menge": "30 ml" },
//               { "zutat": "Salz", "menge": "1 Prise" },
//               { "zutat": "Pfeffer", "menge": "1 Prise" }
//             ],
//             "schwierigkeitsgrad": "mittel",
//             "zubereitungszeit_minuten": 30,
//             "instruktionen": [
//               { "schritt_1": "Schneide die Zucchini längs in Scheiben und mariniere sie mit Olivenöl, Salz und Pfeffer." },
//               { "schritt_2": "Grille die Zucchinischeiben für etwa 5-7 Minuten auf jeder Seite." },
//               { "schritt_3": "Serviere die gegrillten Zucchini mit einem Klecks Erdnussbutter oben drauf." }
//             ],
          
//             "allergene": ["Erdnüsse"],
//             "energie_in_kcal": 300
//           },
//           {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177b" },
//               "username": "vegan_victor"
//             },
//             "rezeptname": "Veganer Schokoladenpudding",
//             "kategorien": ["Dessert", "vegan", "süß"],
//             "beschreibung": "Ein cremiger und köstlicher Schokoladenpudding, der einfach zuzubereiten ist und ganz ohne tierische Produkte auskommt.",
//             "zutaten": [
//               { "zutat": "Kakaopulver", "menge": "50 g" },
//               { "zutat": "Kokosmilch", "menge": "400 ml" },
//               { "zutat": "Agavendicksaft", "menge": "100 ml" },
//               { "zutat": "Speisestärke", "menge": "40 g" },
//               { "zutat": "Vanilleextrakt", "menge": "1 TL" }
//             ],
//             "schwierigkeitsgrad": "leicht",
//             "zubereitungszeit_minuten": 15,
//             "instruktionen": [
//               { "schritt_1": "Mische in einem Topf Kakaopulver, Speisestärke und Agavendicksaft." },
//               { "schritt_2": "Füge die Kokosmilch und den Vanilleextrakt hinzu und rühre alles gut um." },
//               { "schritt_3": "Erhitze die Mischung unter ständigem Rühren, bis sie dickflüssig wird. Gieße den Pudding in Schalen und lasse ihn abkühlen." }
//             ],
        
//             "allergene": ["Kokosnüsse"],
//             "energie_in_kcal": 350
//           }
          
          
           
//         ]

// );

// db.rezepte.insertMany(
//     [
//         {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177c" },
//               "username": "nourish_nina"
//             },
//             "rezeptname": "Veganer Schokoladenkuchen",
//             "kategorien": ["Gebäck", "Nachspeise"],
//             "zutaten": [
//               { "zutat": "Mehl", "menge": "250 g" },
//               { "zutat": "Zucker", "menge": "200 g" },
//               { "zutat": "Kakaopulver", "menge": "50 g" },
//               { "zutat": "Backpulver", "menge": "1 Päckchen" },
//               { "zutat": "pflanzliche Milch", "menge": "200 ml" },
//               { "zutat": "Öl", "menge": "100 ml" },
//               { "zutat": "Apfelmus", "menge": "100 g" }
//             ],
//             "schwierigkeitsgrad": "mittel",
//             "zubereitungszeit_minuten": 45,
//             "backzeit_min": 30,
//             "instruktionen": [
//               { "schritt_1": "Heize den Ofen auf 180 Grad vor." },
//               { "schritt_2": "Vermische alle trockenen Zutaten in einer Schüssel." },
//               { "schritt_3": "Füge die feuchten Zutaten hinzu und verrühre alles gut." },
//               { "schritt_4": "Gieße den Teig in eine gefettete Kuchenform." },
//               { "schritt_5": "Backe den Kuchen für 30 Minuten." },
//               { "schritt_6": "Lass den Kuchen abkühlen und serviere ihn." }
//             ],
//             "alternative Zutaten": [
//               { "zutat": "Zucker", "ersatz": "Agavendicksaft" }
//             ],
//             "allergene": ["Mehl", "Öl"],
//             "energie_in_kcal": 350
//           },
//           {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177c" },
//               "username": "nourish_nina"
//             },
//             "rezeptname": "Vegane Zimtschnecken",
//             "kategorien": ["Gebäck", "Nachspeise", "Hefe"],
//             "zutaten": [
//               { "zutat": "Mehl", "menge": "500 g" },
//               { "zutat": "Hefe", "menge": "1 Päckchen" },
//               { "zutat": "Zucker", "menge": "100 g" },
//               { "zutat": "pflanzliche Milch", "menge": "250 ml" },
//               { "zutat": "Öl", "menge": "75 ml" },
//               { "zutat": "Zimt", "menge": "2 TL" },
//               { "zutat": "Salz", "menge": "1 Prise" }
//             ],
//             "schwierigkeitsgrad": "mittel",
//             "zubereitungszeit_minuten": 60,
//             "backzeit_min": 25,
//             "instruktionen": [
//               { "schritt_1": "Erwärme die pflanzliche Milch und löse die Hefe darin auf." },
//               { "schritt_2": "Vermische das Mehl, Zucker, Salz und Zimt in einer Schüssel." },
//               { "schritt_3": "Füge die Hefe-Milch-Mischung und das Öl hinzu und knete den Teig." },
//               { "schritt_4": "Lass den Teig an einem warmen Ort für 30 Minuten ruhen." },
//               { "schritt_5": "Rolle den Teig aus, bestreue ihn mit Zimt und Zucker, und forme die Schnecken." },
//               { "schritt_6": "Backe die Zimtschnecken bei 180 Grad für 25 Minuten." }
//             ],
//             "allergene": ["Mehl", "Öl"],
//             "energie_in_kcal": 250
//           },

//           {
//             "user": {
//               "user_id": { "$oid": "66fd53880eabdff47cb4177c" },
//               "username": "nourish_nina"
//             },
//             "rezeptname": "Veganes Bananenbrot",
//             "kategorien": ["Gebäck", "Nachspeise"],
//             "zutaten": [
//               { "zutat": "Bananen", "menge": "3 Stück" },
//               { "zutat": "Mehl", "menge": "200 g" },
//               { "zutat": "Zucker", "menge": "100 g" },
//               { "zutat": "Backpulver", "menge": "1 TL" },
//               { "zutat": "Zimt", "menge": "1 TL" },
//               { "zutat": "Pflanzenöl", "menge": "50 ml" },
//               { "zutat": "Nüsse", "menge": "100 g" }
//             ],
//             "schwierigkeitsgrad": "leicht",
//             "zubereitungszeit_minuten": 30,
//             "backzeit_min": 45,
//             "instruktionen": [
//               { "schritt_1": "Heize den Ofen auf 175 Grad vor." },
//               { "schritt_2": "Zerdrücke die Bananen in einer Schüssel." },
//               { "schritt_3": "Füge die restlichen Zutaten hinzu und vermische alles gut." },
//               { "schritt_4": "Gieße den Teig in eine Kastenform." },
//               { "schritt_5": "Backe das Bananenbrot für 45 Minuten." },
//               { "schritt_6": "Lass das Brot abkühlen, bevor du es anschneidest." }
//             ],
//             "alternative Zutaten": [
//               { "zutat": "Zucker", "ersatz": "Ahornsirup" }
//             ],
//             "allergene": ["Mehl", "Nüsse"],
//             "energie_in_kcal": 300
//           }
          
          
          
           
//         ]

// );

// db.createCollection("kommentare");
// db.kommentare.insertMany(
//   [
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb41778",
//         "username": "vegan_chef_mia"
//       },
//       "rezept_id": "66fd61c211cb6c61f5136f12",
//       "kommentar": "Ich habe den Quinoa-Salat mit Avocado zubereitet und er war einfach köstlich! Die Kombination der Aromen hat meine Gäste begeistert. Definitiv ein Rezept, das ich wieder machen werde!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb41779",
//         "username": "plantbased_peter"
//       },
//       "rezept_id": "66ffe896218fc63a18c3c747",
//       "kommentar": "Der vegane Schokoladenpudding war ein Hit auf der letzten Dinner-Party! Alle waren überrascht, dass er ganz ohne tierische Produkte auskommt. Ich werde das Rezept unbedingt weiterempfehlen!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb4177b",
//         "username": "vegan_victor"
//       },
//       "rezept_id": "66fd53880eabdff47cb41778",
//       "kommentar": "Ich habe den bunten Linsensalat ausprobiert und er war sehr einfach zuzubereiten. Die Gäste waren begeistert von den Farben und dem Geschmack. Ein tolles veganes Gericht!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb4177c",
//         "username": "nourish_nina"
//       },
//       "rezept_id": "66ffe18e2a427df4635b38d2",
//       "kommentar": "Das Chili Sin Carne war einfach fantastisch! Ich habe es für meine Familie gekocht und sie konnten nicht glauben, dass es vegan ist. Es hat allen sehr gut geschmeckt!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb4177a",
//         "username": "green_guru_lisa"
//       },
//       "rezept_id": "66ffe896218fc63a18c3c746",
//       "kommentar": "Die gegrillten Zucchini mit Erdnussbutter waren eine wunderbare Überraschung. Ich habe sie als Beilage serviert und alle waren begeistert von der Kombination. Vegan und lecker!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb41778",
//         "username": "vegan_chef_mia"
//       },
//       "rezept_id": "66ffe18e2a427df4635b38d1",
//       "kommentar": "Die veganen Bouletten waren ein voller Erfolg! Ich habe sie für ein BBQ zubereitet und alle Gäste waren begeistert. Sie haben gar nicht gemerkt, dass es keine Fleischbouletten sind!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb41779",
//         "username": "plantbased_peter"
//       },
//       "rezept_id": "66ffe52fbaf7e37e1a6928b1",
//       "kommentar": "Der Reisbandnudelsalat mit Mango und Avocado war eine erfrischende Ergänzung zu meinem Sommeressen. Die Gäste waren begeistert von den frischen Aromen. Vegan und super lecker!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb4177c",
//         "username": "nourish_nina"
//       },
//       "rezept_id": "66ffe896218fc63a18c3c745",
//       "kommentar": "Die Bruschetta mit Tomaten und Basilikum war ein einfaches, aber köstliches Rezept. Ich habe es als Vorspeise serviert und die Gäste waren begeistert von der Frische und dem Geschmack!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb4177b",
//         "username": "vegan_victor"
//       },
//       "rezept_id": "66fd53880eabdff47cb41779",
//       "kommentar": "Das deftige Seitan-Geschnetzelte habe ich für ein Familienessen gekocht. Es war einfach zuzubereiten und hat allen sehr gut geschmeckt. Vegan und sehr sättigend!"
//     },
//     {
//       "user": {
//         "user_id": "66fd53880eabdff47cb4177a",
//         "username": "green_guru_lisa"
//       },
//       "rezept_id": "66ffec0963ac16343c81e109",
//       "kommentar": "Die veganen Zimtschnecken waren ein süßer Traum! Ich habe sie zum Frühstück gemacht und alle waren begeistert. Es ist erstaunlich, wie gut vegane Backwaren schmecken können!"
//     }
  
//   ]
// )

// db.kommentare.insertMany([
//   {
//     "user": {
//       "user_id": "66fd53880eabdff47cb4177b",
//       "username": "vegan_victor"
//     },
//     "antwort_auf": "6704f81479a5f79189e231fe",
//     "kommentar": "Vielen Dank für dein tolles Feedback! Es freut mich, dass der vegane Schokoladenpudding so gut angekommen ist. Viel Spaß beim nächsten Ausprobieren!"
//   },
//   {
//     "user": {
//       "user_id": "66fd53880eabdff47cb4177c",
//       "username": "nourish_nina"
//     },
//     "antwort_auf": "6704f81479a5f79189e23206",
//     "kommentar": "Danke für dein nettes Kommentar! Ich freue mich, dass dir die Zimtschnecken so gut geschmeckt haben. Sie sind wirklich ein Hit zum Frühstück!"
//   },
//   {
//     "user": {
//       "user_id": "66fd53880eabdff47cb4177a",
//       "username": "green_guru_lisa"
//     },
//     "antwort_auf": "6704f81479a5f79189e23203",
//     "kommentar": "Ich freue mich, dass dir der Reisbandnudelsalat gefallen hat! Die Kombination aus Mango und Avocado ist wirklich erfrischend."
//   },
//   {
//     "user": {
//       "user_id": "66fd53880eabdff47cb41778",
//       "username": "vegan_chef_mia"
//     },
//     "antwort_auf": "6704f81479a5f79189e231fd",
//     "kommentar": "Es freut mich sehr zu hören, dass dir der Quinoa-Salat so gut geschmeckt hat! Ich liebe die Aromen, die zusammenkommen."
//   },
//   {
//     "user": {
//       "user_id": "66fd53880eabdff47cb41779",
//       "username": "plantbased_peter"
//     },
//     "antwort_auf": "6704f81479a5f79189e23205",
//     "kommentar": "Ich bin froh, dass dir das Seitan-Geschnetzelte geschmeckt hat! Es ist wirklich ein einfaches und leckeres Rezept."
//   }
// ]);

// db.createCollection("followers");

// db.followers.insertMany ([
  
//     {
//       "user": "66fd53880eabdff47cb41778",
//       "followers": [
//         {
//           "user_id": "66fd53880eabdff47cb4177b",
//           "username": "vegan_victor"
//         },
//         {
//           "user_id": "66fd53880eabdff47cb4177c",
//           "username": "nourish_nina"
//         },
//         {
//           "user_id": "66fd53880eabdff47cb41779",
//           "username": "plantbased_peter"
//         },
//         {
//           "user_id": "66fd53880eabdff47cb4177a",
//           "username": "green_guru_lisa"
//         }
//       ]
//     },
//     {
//       "user": "66fd53880eabdff47cb4177b",
//       "followers": [
//         {
//           "user_id": "66fd53880eabdff47cb41778",
//           "username": "vegan_chef_mia"
//         }
//       ]
//     },
//     {
//       "user": "66fd53880eabdff47cb4177c",
//       "followers": [
//         {
//           "user_id": "66fd53880eabdff47cb41778",
//           "username": "vegan_chef_mia"
//         }
//       ]
//     },
//     {
//       "user": "66fd53880eabdff47cb41779",
//       "followers": [
//         {
//           "user_id": "66fd53880eabdff47cb4177a",
//           "username": "green_guru_lisa"
//         },
//         {
//           "user_id": "66fd53880eabdff47cb4177c",
//           "username": "nourish_nina"
//         }
//       ]
//     },
//     {
//       "user": "66fd53880eabdff47cb4177a",
//       "followers": [
//         {
//           "user_id": "66fd53880eabdff47cb41778",
//           "username": "vegan_chef_mia"
//         }
//       ]
//     }
  
  
// ]);


