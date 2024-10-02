

// Select the database to use.
use('planet-A');

// db.createCollection("users");
// db.users.insertMany(
//     [
//         {
//             "name": "Max Mustermann",
//             "email": "max.mustermann@example.com",
//             "passwort": "P@ssw0rd123!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Anna Müller",
//             "email": "anna.mueller@example.com",
//             "passwort": "S3cur3P@ssw0rd!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Peter Schmidt",
//             "email": "peter.schmidt@example.com",
//             "passwort": "P@ssw0rd!2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Laura Becker",
//             "email": "laura.becker@example.com",
//             "passwort": "L@uraBecker#1234",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": false,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Thomas Wagner",
//             "email": "thomas.wagner@example.com",
//             "passwort": "T@h0m@5W@gner!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": true,
//                 "neue_follower": true
//             }
//         },
//         {
//             "name": "Julia Fischer",
//             "email": "julia.fischer@example.com",
//             "passwort": "Juli@F1scher2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Markus Hoffmann",
//             "email": "markus.hoffmann@example.com",
//             "passwort": "M@rku5H0ffm@n!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": true
//             }
//         },
//         {
//             "name": "Sophie Schneider",
//             "email": "sophie.schneider@example.com",
//             "passwort": "S0ph!eSchne!der2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": true,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "David Klein",
//             "email": "david.klein@example.com",
//             "passwort": "D@v!dKlein#2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": false,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Lisa Braun",
//             "email": "lisa.braun@example.com",
//             "passwort": "L1s@Br@un2023!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Jan Richter",
//             "email": "jan.richter@example.com",
//             "passwort": "J@nr!chter1234",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": false,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Nina Schwarz",
//             "email": "nina.schwarz@example.com",
//             "passwort": "N!n@Schw@rz2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": true,
//                 "neue_follower": true
//             }
//         },
//         {
//             "name": "Felix Zimmermann",
//             "email": "felix.zimmermann@example.com",
//             "passwort": "F3l!xZ!mm3rm@n",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Klara Wolf",
//             "email": "klara.wolf@example.com",
//             "passwort": "Klar@W0lf2023!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Leon Weber",
//             "email": "leon.weber@example.com",
//             "passwort": "L3onW3ber@2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": false,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Emma Wagner",
//             "email": "emma.wagner@example.com",
//             "passwort": "Emm@W@gner123!",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Simon Hartmann",
//             "email": "simon.hartmann@example.com",
//             "passwort": "S!m0nH@rtm@n2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Marie König",
//             "email": "marie.koenig@example.com",
//             "passwort": "M@rieK0n!g2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Paul Schulte",
//             "email": "paul.schulte@example.com",
//             "passwort": "P@ulSchult3#2023",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": false,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "name": "Tina Peters",
//             "email": "tina.peters@example.com",
//             "passwort": "T!n@Peters1234",
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": true
//             }
//         }
//     ]
// );

// db.createCollection("user_profile");
// db.user_profile.insertMany(
    
//         [
//             {
//                 "user_id": "66fab69a32a76bc5dd059e2c",
//                 "username": "Max Mustermann",
//                 "profiltext": "Ich liebe es, vegane Rezepte zu kreieren, besonders meine berühmten Linsensuppe.",
//                 "geburtstag": "1985-03-12",
//                 "social_links": {
//                     "facebook": "https://facebook.com/max.mustermann",
//                     "instagram": "https://instagram.com/max.mustermann"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e2d",
//                 "username": "Anna Müller",
//                 "profiltext": "Mein Lieblingsgericht ist veganes Chili. Es ist einfach und köstlich!",
//                 "geburtstag": "1990-07-25",
//                 "social_links": {
//                     "facebook": "https://facebook.com/anna.mueller"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e2e",
//                 "username": "Peter Schmidt",
//                 "profiltext": "Ich bin ein Fan von Smoothies und experimentiere gerne mit neuen Zutaten.",
//                 "geburtstag": "1978-11-14",
//                 "social_links": {
//                     "instagram": "https://instagram.com/peter.schmidt"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e2f",
//                 "username": "Laura Becker",
//                 "profiltext": "",
//                 "geburtstag": "1995-01-30",
//                 "social_links": {
//                     "facebook": "https://facebook.com/laura.becker",
//                     "pinterest": "https://pinterest.com/laura.becker"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e30",
//                 "username": "Thomas Wagner",
//                 "profiltext": "Ich genieße es, vegane Desserts zu backen, besonders Schokoladenkekse.",
//                 "geburtstag": "1982-09-05",
//                 "social_links": {
//                     "instagram": "https://instagram.com/thomas.wagner"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e31",
//                 "username": "Julia Fischer",
//                 "profiltext": "Ich liebe es, neue vegane Rezepte auszuprobieren und zu teilen.",
//                 "geburtstag": "1989-04-20",
//                 "social_links": {
//                     "facebook": "https://facebook.com/julia.fischer"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e32",
//                 "username": "Markus Hoffmann",
//                 "profiltext": "",
//                 "geburtstag": "1965-12-15",
//                 "social_links": {
//                     "pinterest": "https://pinterest.com/markus.hoffmann"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e33",
//                 "username": "Sophie Schneider",
//                 "profiltext": "Ich koche leidenschaftlich gerne vegane Pasta mit frischem Gemüse.",
//                 "geburtstag": "1980-06-22",
//                 "social_links": {
//                     "instagram": "https://instagram.com/sophie.schneider"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e34",
//                 "username": "David Klein",
//                 "profiltext": "",
//                 "geburtstag": "1975-08-10",
//                 "social_links": {
//                     "facebook": "https://facebook.com/david.klein"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e35",
//                 "username": "Lisa Braun",
//                 "profiltext": "Vegane Burger sind meine Leidenschaft! Ich liebe es, neue Variationen zu kreieren.",
//                 "geburtstag": "1992-05-18",
//                 "social_links": {
//                     "pinterest": "https://pinterest.com/lisa.braun"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e36",
//                 "username": "Jan Richter",
//                 "profiltext": "",
//                 "geburtstag": "1988-02-28",
//                 "social_links": {}
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e37",
//                 "username": "Nina Schwarz",
//                 "profiltext": "Ich liebe es, vegane Snacks zu machen, besonders Energiebällchen.",
//                 "geburtstag": "1994-10-09",
//                 "social_links": {
//                     "facebook": "https://facebook.com/nina.schwarz",
//                     "instagram": "https://instagram.com/nina.schwarz"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e38",
//                 "username": "Felix Zimmermann",
//                 "profiltext": "Ich experimentiere gerne mit verschiedenen veganen Käsesorten.",
//                 "geburtstag": "1972-03-03",
//                 "social_links": {
//                     "instagram": "https://instagram.com/felix.zimmermann"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e39",
//                 "username": "Klara Wolf",
//                 "profiltext": "",
//                 "geburtstag": "1981-07-21",
//                 "social_links": {
//                     "facebook": "https://facebook.com/klara.wolf"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e3a",
//                 "username": "Leon Weber",
//                 "profiltext": "Ich liebe es, veganes Sushi zu machen und mit Freunden zu teilen.",
//                 "geburtstag": "1996-11-11",
//                 "social_links": {}
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e3b",
//                 "username": "Emma Wagner",
//                 "profiltext": "Meine Spezialität sind vegane Muffins, die einfach unwiderstehlich sind!",
//                 "geburtstag": "1993-04-27",
//                 "social_links": {
//                     "pinterest": "https://pinterest.com/emma.wagner"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e3c",
//                 "username": "Simon Hartmann",
//                 "profiltext": "Ich genieße es, neue vegane Rezepte zu entwickeln und zu testen.",
//                 "geburtstag": "1987-09-16",
//                 "social_links": {
//                     "instagram": "https://instagram.com/simon.hartmann"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e3d",
//                 "username": "Marie König",
//                 "profiltext": "",
//                 "geburtstag": "1991-01-01",
//                 "social_links": {}
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e3e",
//                 "username": "Paul Schulte",
//                 "profiltext": "Ich liebe es, vegane Gerichte zu kochen und neue Rezepte zu entdecken.",
//                 "geburtstag": "1984-08-08",
//                 "social_links": {
//                     "facebook": "https://facebook.com/paul.schulte"
//                 }
//             },
//             {
//                 "user_id": "66fab69a32a76bc5dd059e3f",
//                 "username": "Tina Peters",
//                 "profiltext": "Veganes Essen ist meine Leidenschaft, besonders frische Salate!",
//                 "geburtstag": "1999-12-12",
//                 "social_links": {
//                     "instagram": "https://instagram.com/tina.peters"
//                 }
//             }
//         ]
    
// );

// db.user_profile.drop();

// db.users.deleteMany({});

// db.users.insertMany(
//     [
//         {
//             "username": "vegan_chef_mia",
//             "email": "mia.vegan@example.com",
//             "passwort": "$2a$10$KIXm3R8GZ8K8s5QY8g5h8.0N7K5Wg1qTtL2uR8pXH1RzF0B8cN5fO", 
//             "profiltext": "Hallo! Ich bin Mia und leidenschaftliche Veganerin. Ich liebe es, neue Rezepte auszuprobieren und gesunde, pflanzliche Mahlzeiten zu kreieren. Mein Ziel ist es, die vegane Küche für alle zugänglich zu machen. Lass uns gemeinsam kochen!",
//             "geburtsdatum": "1985-03-15",
//             "social_links": {
//                 "facebook": "facebook.com/vegan_chef_mia",
//                 "instagram": "instagram.com/vegan_chef_mia"
//             },
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": true,
//                 "neue_follower": true
//             }
//         },
//         {
//             "username": "plantbased_peter",
//             "email": "peter.plantbased@example.com",
//             "passwort": "$2a$10$JdV4FQW9Tz5qY5e2k3r0oO8M6yGkGZt9R8H1uO1l5y2c6Y7mRzO1i",
//             "profiltext": "Ich bin Peter, ein begeisterter Koch, der sich auf pflanzliche Küche spezialisiert hat. Ich teile gerne meine Tipps und Tricks für die Zubereitung köstlicher veganer Gerichte. Lass uns zusammen die Vielfalt der veganen Küche entdecken!",
//             "social_links": {
//                 "instagram": "instagram.com/plantbased_peter",
//                 "pinterest": "pinterest.com/plantbased_peter"
//             },
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": true
//             }
//         },
//         {
//             "username": "green_guru_lisa",
//             "email": "lisa.green@example.com",
//             "passwort": "$2a$10$7A0l2N2eH6l9Q5r1t8Q5eOe6K1RzF1W8S0N1Z2h8N8Rz4L5B9C5rC",
//             "profiltext": "Ich bin Lisa, die grüne Guru! Ich liebe es, mit frischen Zutaten zu experimentieren und gesunde, vegane Rezepte zu kreieren. Ich teile auch meine Erfahrungen über nachhaltige Lebensstile und Ernährung.",
//             "geburtsdatum": "1990-07-22",
//             "social_links": {
//                 "facebook": "facebook.com/green_guru_lisa",
//                 "instagram": "instagram.com/green_guru_lisa",
//                 "pinterest": "pinterest.com/green_guru_lisa"
//             },
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": false,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         },
//         {
//             "username": "vegan_victor",
//             "email": "victor.vegan@example.com",
//             "passwort": "$2a$10$4hW8t3G8t9F8O2e3Z1t7eO1N5K2lG2s6H5T0H1R8H5G2D5F7J5l1C",
//             "profiltext": "Ich bin Victor und ein Fan von veganer Küche! Ich genieße es, neue Rezepte zu kreieren und meine Leidenschaft für gesunde Ernährung mit anderen zu teilen. Kommt mit mir auf eine kulinarische Reise!",
//             "geburtsdatum": "1975-11-30",
//             "social_links": {
//                 "facebook": "facebook.com/vegan_victor"
//             },
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": true,
//                 "neue_follower": false
//             }
//         },
//         {
//             "username": "nourish_nina",
//             "email": "nina.nourish@example.com",
//             "passwort": "$2a$10$8F2t3R8H6J5T1y2Y3o7k6eO5L1RzG3F4H5S7B1N0Y4F2D6G4H5x1O",
//             "profiltext": "Hallo, ich bin Nina! Ich interessiere mich für vegane Ernährung und gesunde Lebensweise. Ich teile meine Lieblingsrezepte und Tipps für ein gesundes Leben. Lass uns zusammen die Welt der pflanzlichen Ernährung erkunden!",
//             "social_links": {
//                 "instagram": "instagram.com/nourish_nina",
//                 "pinterest": "pinterest.com/nourish_nina"
//             },
//             "benachrichtigungen_mail": {
//                 "kommentare_antworten": true,
//                 "bewertungen": false,
//                 "neue_follower": false
//             }
//         }
//     ]
    
// );

// db.createCollection("rezepte");

// db.rezepte.insertOne(
//     {
//         "user": {
//           "user_id": { "$oid": "66fd53880eabdff47cb41778" },
//           "username": "vegan_chef_mia"
//         },
//         "rezeptname": "Spinatsalat mit Nüssen",
//         "kategorien": ["Salat", "Spinat"],
//         "beschreibung": "Ein gesunder Spinatsalat, der mit Nüssen und einem leckeren Dressing verfeinert wird.",
//         "zutaten": [
//           { "zutat": "Frischer Spinat", "menge": "150 g" },
//           { "zutat": "Walnüsse", "menge": "50 g" },
//           { "zutat": "Äpfel", "menge": "1 Stück" },
//           { "zutat": "Olivenöl", "menge": "30 ml" },
//           { "zutat": "Apfelessig", "menge": "20 ml" },
//           { "zutat": "Veganer Honig", "menge": "1 TL" },
//           { "zutat": "Salz", "menge": "1 Prise" },
//           { "zutat": "Pfeffer", "menge": "1 Prise" }
//         ],
//         "schwierigkeitsgrad": "leicht",
//         "zubereitungszeit_minuten": 20,
//         "instruktionen": [
//           { "schritt_1": "Wasche den frischen Spinat gründlich." },
//           { "schritt_2": "Schneide den Apfel in dünne Scheiben." },
//           { "schritt_3": "Mische den Spinat mit den Apfelscheiben und Walnüssen." },
//           { "schritt_4": "Vermenge Olivenöl, Apfelessig, Honig, Salz und Pfeffer zu einem Dressing." },
//           { "schritt_5": "Gieße das Dressing über den Salat und serviere ihn sofort." }
//         ],
//         "alternative Zutaten": [
//           { "zutat": "Walnüsse", "ersatz": "Mandeln" },
//           { "zutat": "Veganer Honig", "ersatz": "Akaziensirup"}
//         ],
//         "allergene": ["Walnüsse"],
//         "energie_in_kcal": 300
//       }
      
// );

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

