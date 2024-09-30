

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

