

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
db.user_profile.insertMany(
    
        [
            {
                "user_id": "66fab69a32a76bc5dd059e2c",
                "username": "Max Mustermann",
                "profiltext": "Ich liebe es, vegane Rezepte zu kreieren, besonders meine berühmten Linsensuppe.",
                "geburtstag": "1985-03-12",
                "social_links": {
                    "facebook": "https://facebook.com/max.mustermann",
                    "instagram": "https://instagram.com/max.mustermann"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e2d",
                "username": "Anna Müller",
                "profiltext": "Mein Lieblingsgericht ist veganes Chili. Es ist einfach und köstlich!",
                "geburtstag": "1990-07-25",
                "social_links": {
                    "facebook": "https://facebook.com/anna.mueller"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e2e",
                "username": "Peter Schmidt",
                "profiltext": "Ich bin ein Fan von Smoothies und experimentiere gerne mit neuen Zutaten.",
                "geburtstag": "1978-11-14",
                "social_links": {
                    "instagram": "https://instagram.com/peter.schmidt"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e2f",
                "username": "Laura Becker",
                "profiltext": "",
                "geburtstag": "1995-01-30",
                "social_links": {
                    "facebook": "https://facebook.com/laura.becker",
                    "pinterest": "https://pinterest.com/laura.becker"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e30",
                "username": "Thomas Wagner",
                "profiltext": "Ich genieße es, vegane Desserts zu backen, besonders Schokoladenkekse.",
                "geburtstag": "1982-09-05",
                "social_links": {
                    "instagram": "https://instagram.com/thomas.wagner"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e31",
                "username": "Julia Fischer",
                "profiltext": "Ich liebe es, neue vegane Rezepte auszuprobieren und zu teilen.",
                "geburtstag": "1989-04-20",
                "social_links": {
                    "facebook": "https://facebook.com/julia.fischer"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e32",
                "username": "Markus Hoffmann",
                "profiltext": "",
                "geburtstag": "1965-12-15",
                "social_links": {
                    "pinterest": "https://pinterest.com/markus.hoffmann"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e33",
                "username": "Sophie Schneider",
                "profiltext": "Ich koche leidenschaftlich gerne vegane Pasta mit frischem Gemüse.",
                "geburtstag": "1980-06-22",
                "social_links": {
                    "instagram": "https://instagram.com/sophie.schneider"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e34",
                "username": "David Klein",
                "profiltext": "",
                "geburtstag": "1975-08-10",
                "social_links": {
                    "facebook": "https://facebook.com/david.klein"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e35",
                "username": "Lisa Braun",
                "profiltext": "Vegane Burger sind meine Leidenschaft! Ich liebe es, neue Variationen zu kreieren.",
                "geburtstag": "1992-05-18",
                "social_links": {
                    "pinterest": "https://pinterest.com/lisa.braun"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e36",
                "username": "Jan Richter",
                "profiltext": "",
                "geburtstag": "1988-02-28",
                "social_links": {}
            },
            {
                "user_id": "66fab69a32a76bc5dd059e37",
                "username": "Nina Schwarz",
                "profiltext": "Ich liebe es, vegane Snacks zu machen, besonders Energiebällchen.",
                "geburtstag": "1994-10-09",
                "social_links": {
                    "facebook": "https://facebook.com/nina.schwarz",
                    "instagram": "https://instagram.com/nina.schwarz"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e38",
                "username": "Felix Zimmermann",
                "profiltext": "Ich experimentiere gerne mit verschiedenen veganen Käsesorten.",
                "geburtstag": "1972-03-03",
                "social_links": {
                    "instagram": "https://instagram.com/felix.zimmermann"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e39",
                "username": "Klara Wolf",
                "profiltext": "",
                "geburtstag": "1981-07-21",
                "social_links": {
                    "facebook": "https://facebook.com/klara.wolf"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e3a",
                "username": "Leon Weber",
                "profiltext": "Ich liebe es, veganes Sushi zu machen und mit Freunden zu teilen.",
                "geburtstag": "1996-11-11",
                "social_links": {}
            },
            {
                "user_id": "66fab69a32a76bc5dd059e3b",
                "username": "Emma Wagner",
                "profiltext": "Meine Spezialität sind vegane Muffins, die einfach unwiderstehlich sind!",
                "geburtstag": "1993-04-27",
                "social_links": {
                    "pinterest": "https://pinterest.com/emma.wagner"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e3c",
                "username": "Simon Hartmann",
                "profiltext": "Ich genieße es, neue vegane Rezepte zu entwickeln und zu testen.",
                "geburtstag": "1987-09-16",
                "social_links": {
                    "instagram": "https://instagram.com/simon.hartmann"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e3d",
                "username": "Marie König",
                "profiltext": "",
                "geburtstag": "1991-01-01",
                "social_links": {}
            },
            {
                "user_id": "66fab69a32a76bc5dd059e3e",
                "username": "Paul Schulte",
                "profiltext": "Ich liebe es, vegane Gerichte zu kochen und neue Rezepte zu entdecken.",
                "geburtstag": "1984-08-08",
                "social_links": {
                    "facebook": "https://facebook.com/paul.schulte"
                }
            },
            {
                "user_id": "66fab69a32a76bc5dd059e3f",
                "username": "Tina Peters",
                "profiltext": "Veganes Essen ist meine Leidenschaft, besonders frische Salate!",
                "geburtstag": "1999-12-12",
                "social_links": {
                    "instagram": "https://instagram.com/tina.peters"
                }
            }
        ]
    
);

db.user_profile.find({});
