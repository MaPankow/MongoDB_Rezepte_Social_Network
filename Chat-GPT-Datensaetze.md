# Abfragen, um an Dummy-Daten zu kommen
## Collection users


Bitte generiere 5 Dummy-Nutzerdatensätze für eine MongoDB-Collection namens "users" in einer Datenbank für vegane Rezepte.
Das erste Key-Value-Pärchen enthält den "username". Die Namen können auf Klarnamen beruhen oder frei erfunden sein. 
Das zweite Key-Value-Pärchen heißt "email" und beinhaltet die E-Mail-Adresse. 
Das nächste Key-Value-Pärchen heißt "passwort" und hier generiere bitte Einträge, die aussehen, als wäre das Passwort hashed.
Das nächste Key-Value-Pärchen heißt "profiltext" und es kommt ein kurzer Text über die jeweiligen User rein. Bitte lass sie sich in Kurztexten von maximal 150 Wörten vorstellen. Die Profiltexte sind für eine Plattform, in der es um veganes Kochen und Essen geht und können diese Themen beinhalten. 
Für das nächste Feld "geburtsdatum" generiere bitte ein Geburtsdatum zwischen 1950 und 2009. Die Angabe des Geburtsdatums ist freiwillig, also muss nicht jeder Datensatz dieses Key-Value-Pärchen beinhalten. Bitte lass diese Angabe bei 5 Datensätzen aus.
Das nächste Feld heißt "social_links" und enthalt Links zu Profilen, die wahlweise auf Facebook, Instagram oder Pinterest sind. Sie können angelehnt an die usernames der users sein. Die users sind entweder auf einer der drei Plattformen, auf zweien oder auf dreien unterwegs.
das letzte Feld in der Collection "users" hat den Key "benachrichtigungen_mail". Darin befinden sich drei Keys, deren Werte alle Booleans sind, "kommentare_antworten", "bewertungen" und "neue_follower". Sie können in folgenden Konstellationen ausgewählt worden sein: True-True-True, True-False-True, True-True-False, rue-false-false oder false-false-false.

## Collection Rezepte:
### Für den ersten Dummy-Datensatz aus "users"

Bitte generiere 3 Dummy-Datensätze für eine MongoDB-Collection namens "rezepte" in einer Datenbank für vegane Rezepte.
Es gibt bereits eine Collection "users" in der Datenbank, die den folgenden Datensatz enthält:

{
    "_id": {
      "$oid": "66fd53880eabdff47cb41778"
    },
    "username": "vegan_chef_mia",
    "email": "mia.vegan@example.com",
    "passwort": "$2a$10$KIXm3R8GZ8K8s5QY8g5h8.0N7K5Wg1qTtL2uR8pXH1RzF0B8cN5fO",
    "profiltext": "Hallo! Ich bin Mia und leidenschaftliche Veganerin. Ich liebe es, neue Rezepte auszuprobieren und gesunde, pflanzliche Mahlzeiten zu kreieren. Mein Ziel ist es, die vegane Küche für alle zugänglich zu machen. Lass uns gemeinsam kochen!",
    "geburtsdatum": "1985-03-15",
    "social_links": {
      "facebook": "facebook.com/vegan_chef_mia",
      "instagram": "instagram.com/vegan_chef_mia"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": true,
      "neue_follower": true
    }
  }


Die 3 Datensätze für die Collection "rezepte" sind Rezepte, die "vegan_chef_mia" gepostet hat. Sie möchte vorwiegend gesunde Küche kreieren, also postet sie Salate.
Das erste Feld heißt "user" und beinhaltet zwei Key-Value-Pärchen. Das erste Pärchen hat den Key "user_id" und enthält die $oid aus dem Datensatz aus der Collection "users". das zweite Pärchen hat den Key "username" und zeigt den "username" aus dem Datensatz aus der Collection "users".

Das zweite Feld in der Collection "rezepte" hat den Key "rezeptname" und der Wert ist der Name eines veganen Salates.
Die weiteren Key-Value-Pärchen beziehen sich auf den Wert des Keys "rezeptname". 
Im nächsten Feld mit dem Key "kategorien" ist der Wert ein Array mit je zwei Schlagwörtern, von denen eines "Salat" ist und ein weiteres sich auf den Wert des Keys "rezeptname" bezieht.
Im nächsten Feld "beschreibung" wird der Salat, für den das Rezept ist, näher beschrieben.
Das Feld mit dem Key "zutaten" beinhaltet ein Array mit Objekten. Es sollen so viele Objekte sein, wie Zutaten für das Rezept nötig sind. In den Objekten gibt es immer den Key "zutat", dessen Wert eine Zutat ist, und den Key "menge", dessen Wert entsprechend der Zutat in Stück, Milliliter (abgekürzt ml) oder Gramm (g) angegeben wird.
Das nächste Feld hat den Key "schwierigkeitsgrad". Hier wähle zwischen "leicht", "mittel" und "schwer" aus.
Das nächste Feld hat den Key "zubereitungszeit_minuten" und eine Integer-Zahl als Wert. Diese sollte entweder eine 5 oder eine 0 hinten haben und sich zwischen 15 und 90 bewegen. Schätze dafür ein, wie lange man ungefähr braucht, um das Rezept zuzubereiten.
Das nächste Feld mit dem Key "instruktionen" enthält ein Array von Objekten, das eine schrittweise Anleitung zur Zubereitung des Rezeptes sein soll. In den Objekten sind die Keys "schritt_1", "schritt_2", "schritt_3" und so weiter. Die Werte sind Texte mit Anleitungen, was zu tun ist. Formuliere hier ganze Sätze und sprich die User mit du an.
Das nächste Feld hat den Key "alternative Zutaten". Das muss nicht in jedem Rezept vorkommen. Hier können in einem Array für bestimmte Zutaten Alternativen genannt werden. Die Keys in den Objekten des Arrays heißen "zutat" und sind aus dem Array für das Feld "zutaten" die "zutat", die Werte heißen "ersatz" und sind eine Zutat, mit der man die Zutat im Key ersetzen könnte.
Das nächste Feld enthält den Key "allergene" und als Wert ein Array mit Zutaten, die Allergien auslösen können. Wähle diese aus dem Feld "zutaten" aus und nimm die Werte der Keys "zutat" aus dem Array.
Das nächste Feld heißt "energie_in_kcal". Als Wert enthält es eine Zahl, Integer, einen Schätzwert der Kilokalorien, die das Rezept enthalten könnte.


### Für den zweiten Dummy-Datensatz aus "users"
*hierfür kopiere ich die vorherige Query und passe den Text an*

Bitte generiere 3 Dummy-Datensätze für eine MongoDB-Collection namens "rezepte" in einer Datenbank für vegane Rezepte.
Es gibt bereits eine Collection "users" in der Datenbank, die den folgenden Datensatz enthält:

{
    "_id": {
      "$oid": "66fd53880eabdff47cb41779"
    },
    "username": "plantbased_peter",
    "email": "peter.plantbased@example.com",
    "passwort": "$2a$10$JdV4FQW9Tz5qY5e2k3r0oO8M6yGkGZt9R8H1uO1l5y2c6Y7mRzO1i",
    "profiltext": "Ich bin Peter, ein begeisterter Koch, der sich auf pflanzliche Küche spezialisiert hat. Ich teile gerne meine Tipps und Tricks für die Zubereitung köstlicher veganer Gerichte. Lass uns zusammen die Vielfalt der veganen Küche entdecken!",
    "social_links": {
      "instagram": "instagram.com/plantbased_peter",
      "pinterest": "pinterest.com/plantbased_peter"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": false,
      "neue_follower": true
    }
  }

Die 3 Datensätze für die Collection "rezepte" sind Rezepte, die "plantbased_peter" gepostet hat. Er kocht deftige vegane Hauptgerichte und postet Rezepte für Seitangeschnetzeltes, für Bouletten mit veganem Hack und für ein Chili Sin Carne.
Das erste Feld heißt "user" und beinhaltet zwei Key-Value-Pärchen. Das erste Pärchen hat den Key "user_id" und enthält die $oid aus dem Datensatz aus der Collection "users". das zweite Pärchen hat den Key "username" und zeigt den "username" aus dem Datensatz aus der Collection "users".

Das zweite Feld in der Collection "rezepte" hat den Key "rezeptname" und der Wert ist der Name des Rezeptes.
Die weiteren Key-Value-Pärchen beziehen sich auf den Wert des Keys "rezeptname". 
Im nächsten Feld mit dem Key "kategorien" ist der Wert ein Array mit je zwei Schlagwörtern, die sich auf den Wert des Keys "rezeptname" bezieht.Sie sollten sich auf die Art des Gerichts beziehen, wie "Hauptspeise", "warm", "deftig" und das Rezept mit Seitan sollte "Seitan" als Schlagwort haben.
Im nächsten Feld "beschreibung" wird das Gericht, für das das Rezept ist, näher beschrieben.
Das Feld mit dem Key "zutaten" beinhaltet ein Array mit Objekten. Es sollen so viele Objekte sein, wie Zutaten für das Rezept nötig sind. In den Objekten gibt es immer den Key "zutat", dessen Wert eine Zutat ist, und den Key "menge", dessen Wert entsprechend der Zutat in Stück, Milliliter (abgekürzt ml) oder Gramm (g) angegeben wird.
Das nächste Feld hat den Key "schwierigkeitsgrad". Hier wähle zwischen "leicht", "mittel" und "schwer" aus.
Das nächste Feld hat den Key "zubereitungszeit_minuten" und eine Integer-Zahl als Wert. Diese sollte entweder eine 5 oder eine 0 hinten haben und sich zwischen 15 und 90 bewegen. Schätze dafür ein, wie lange man ungefähr braucht, um das Rezept zuzubereiten.
Das nächste Feld mit dem Key "instruktionen" enthält ein Array von Objekten, das eine schrittweise Anleitung zur Zubereitung des Rezeptes sein soll. In den Objekten sind die Keys "schritt_1", "schritt_2", "schritt_3" und so weiter. Die Werte sind Texte mit Anleitungen, was zu tun ist. Formuliere hier ganze Sätze und sprich die User mit du an.
Das nächste Feld hat den Key "alternative Zutaten". Das muss nicht in jedem Rezept vorkommen. Hier können in einem Array für bestimmte Zutaten Alternativen genannt werden. Die Keys in den Objekten des Arrays heißen "zutat" und sind aus dem Array für das Feld "zutaten" die "zutat", die Werte heißen "ersatz" und sind eine Zutat, mit der man die Zutat im Key ersetzen könnte.
Das nächste Feld enthält den Key "allergene" und als Wert ein Array mit Zutaten, die Allergien auslösen können. Wähle diese aus dem Feld "zutaten" aus und nimm die Werte der Keys "zutat" aus dem Array.
Das nächste Feld heißt "energie_in_kcal". Als Wert enthält es eine Zahl, Integer, einen Schätzwert der Kilokalorien, die das Rezept enthalten könnte.

### Für den dritten Dummy-Datensatz aus "users"
*hierfür kopiere ich die vorherige Query und passe den Text an*

Bitte generiere 3 Dummy-Datensätze für eine MongoDB-Collection namens "rezepte" in einer Datenbank für vegane Rezepte.
Es gibt bereits eine Collection "users" in der Datenbank, die den folgenden Datensatz enthält:

{
    "_id": {
      "$oid": "66fd53880eabdff47cb4177a"
    },
    "username": "green_guru_lisa",
    "email": "lisa.green@example.com",
    "passwort": "$2a$10$7A0l2N2eH6l9Q5r1t8Q5eOe6K1RzF1W8S0N1Z2h8N8Rz4L5B9C5rC",
    "profiltext": "Ich bin Lisa, die grüne Guru! Ich liebe es, mit frischen Zutaten zu experimentieren und gesunde, vegane Rezepte zu kreieren. Ich teile auch meine Erfahrungen über nachhaltige Lebensstile und Ernährung.",
    "geburtsdatum": "1990-07-22",
    "social_links": {
      "facebook": "facebook.com/green_guru_lisa",
      "instagram": "instagram.com/green_guru_lisa",
      "pinterest": "pinterest.com/green_guru_lisa"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": false,
      "bewertungen": false,
      "neue_follower": false
    }
  }

Die 3 Datensätze für die Collection "rezepte" sind Rezepte, die "green_guru_Lisa" gepostet hat. Sie kocht gesunde Gerichte aus aller Welt und postet Rezepte für eine vegane Pho-Suppe, für ein indisches Curry mit Tofu und für einen Reisbandnudelsalat mit Mango, Avocado, Tofu, Koriander und Thai-Basilikum.
Das erste Feld heißt "user" und beinhaltet zwei Key-Value-Pärchen. Das erste Pärchen hat den Key "user_id" und enthält die $oid aus dem Datensatz aus der Collection "users". das zweite Pärchen hat den Key "username" und zeigt den "username" aus dem Datensatz aus der Collection "users".

Das zweite Feld in der Collection "rezepte" hat den Key "rezeptname" und der Wert ist der Name des Rezeptes.
Die weiteren Key-Value-Pärchen beziehen sich auf den Wert des Keys "rezeptname". 
Im nächsten Feld mit dem Key "kategorien" ist der Wert ein Array mit je zwei Schlagwörtern, die sich auf den Wert des Keys "rezeptname" bezieht.Sie sollten sich auf die Art des Gerichts beziehen, wie "Hauptspeise", "warm", "kalte Küche" "Salat" und Rezepte mit Tofu sollten "Tofu" als Schlagwort haben. Das Curry sollte außerdem das Schlagwort "indisch" bekommen und die beiden anderen Rezepte das Schlagwort "vietnamesisch".
Im nächsten Feld "beschreibung" wird das Gericht, für das das Rezept ist, näher beschrieben.
Das Feld mit dem Key "zutaten" beinhaltet ein Array mit Objekten. Es sollen so viele Objekte sein, wie Zutaten für das Rezept nötig sind. In den Objekten gibt es immer den Key "zutat", dessen Wert eine Zutat ist, und den Key "menge", dessen Wert entsprechend der Zutat in Stück, Milliliter (abgekürzt ml) oder Gramm (g) angegeben wird.
Das nächste Feld hat den Key "schwierigkeitsgrad". Hier wähle zwischen "leicht", "mittel" und "schwer" aus.
Das nächste Feld hat den Key "zubereitungszeit_minuten" und eine Integer-Zahl als Wert. Diese sollte entweder eine 5 oder eine 0 hinten haben und sich zwischen 15 und 90 bewegen. Schätze dafür ein, wie lange man ungefähr braucht, um das Rezept zuzubereiten.
Das nächste Feld mit dem Key "instruktionen" enthält ein Array von Objekten, das eine schrittweise Anleitung zur Zubereitung des Rezeptes sein soll. In den Objekten sind die Keys "schritt_1", "schritt_2", "schritt_3" und so weiter. Die Werte sind Texte mit Anleitungen, was zu tun ist. Formuliere hier ganze Sätze und sprich die User mit du an.
Das nächste Feld hat den Key "alternative Zutaten". Das muss nicht in jedem Rezept vorkommen. Hier können in einem Array für bestimmte Zutaten Alternativen genannt werden. Die Keys in den Objekten des Arrays heißen "zutat" und sind aus dem Array für das Feld "zutaten" die "zutat", die Werte heißen "ersatz" und sind eine Zutat, mit der man die Zutat im Key ersetzen könnte.
Das nächste Feld enthält den Key "allergene" und als Wert ein Array mit Zutaten, die Allergien auslösen können. Wähle diese aus dem Feld "zutaten" aus und nimm die Werte der Keys "zutat" aus dem Array.
Das nächste Feld heißt "energie_in_kcal". Als Wert enthält es eine Zahl, Integer, einen Schätzwert der Kilokalorien, die das Rezept enthalten könnte.

### Für den vierten Dummy-Datensatz aus "users"
*hierfür kopiere ich die vorherige Query und passe den Text an*

Bitte generiere 3 Dummy-Datensätze für eine MongoDB-Collection namens "rezepte" in einer Datenbank für vegane Rezepte.
Es gibt bereits eine Collection "users" in der Datenbank, die den folgenden Datensatz enthält:

{
    "_id": {
      "$oid": "66fd53880eabdff47cb4177b"
    },
    "username": "vegan_victor",
    "email": "victor.vegan@example.com",
    "passwort": "$2a$10$4hW8t3G8t9F8O2e3Z1t7eO1N5K2lG2s6H5T0H1R8H5G2D5F7J5l1C",
    "profiltext": "Ich bin Victor und ein Fan von veganer Küche! Ich genieße es, neue Rezepte zu kreieren und meine Leidenschaft für gesunde Ernährung mit anderen zu teilen. Kommt mit mir auf eine kulinarische Reise!",
    "geburtsdatum": "1975-11-30",
    "social_links": {
      "facebook": "facebook.com/vegan_victor"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": true,
      "neue_follower": false
    }
  }

Die 3 Datensätze für die Collection "rezepte" sind Rezepte, die "vegan_victor" gepostet hat. Er kocht vegan, gesund und ist sehr kreativ. Bitte generiere zwei Rezepte für eine Vorspeise und eins für eine gesunde Nachspeise. Die eine Vorspeise und die Nachspeise sind angelehnt an die italienische Küche und die zweite Vorspeise enthält zwei Zutaten, die auf den ersten Blick gegensätzlich scheinen.
Das erste Feld heißt "user" und beinhaltet zwei Key-Value-Pärchen. Das erste Pärchen hat den Key "user_id" und enthält die $oid aus dem Datensatz aus der Collection "users". das zweite Pärchen hat den Key "username" und zeigt den "username" aus dem Datensatz aus der Collection "users".

Das zweite Feld in der Collection "rezepte" hat den Key "rezeptname" und der Wert ist der Name des Rezeptes.
Die weiteren Key-Value-Pärchen beziehen sich auf den Wert des Keys "rezeptname". 
Im nächsten Feld mit dem Key "kategorien" ist der Wert ein Array mit zwei-drei Schlagwörtern, die sich auf den Wert des Keys "rezeptname" bezieht.Sie sollten sich auf die Art des Gerichts beziehen, wie "Hauptspeise", "Vorspeise", "Dessert" "warm", "kalte Küche" oder "Salat". Außerdem sollte, sofern vorhanden, die Landesküche ein Schlagwort sein.
Im nächsten Feld "beschreibung" wird das Gericht, für das das Rezept ist, näher beschrieben.
Das Feld mit dem Key "zutaten" beinhaltet ein Array mit Objekten. Es sollen so viele Objekte sein, wie Zutaten für das Rezept nötig sind. In den Objekten gibt es immer den Key "zutat", dessen Wert eine Zutat ist, und den Key "menge", dessen Wert entsprechend der Zutat in Stück, Milliliter (abgekürzt ml) oder Gramm (g) angegeben wird.
Das nächste Feld hat den Key "schwierigkeitsgrad". Hier wähle zwischen "leicht", "mittel" und "schwer" aus.
Das nächste Feld hat den Key "zubereitungszeit_minuten" und eine Integer-Zahl als Wert. Diese sollte entweder eine 5 oder eine 0 hinten haben und sich zwischen 15 und 90 bewegen. Schätze dafür ein, wie lange man ungefähr braucht, um das Rezept zuzubereiten.
Das nächste Feld mit dem Key "instruktionen" enthält ein Array von Objekten, das eine schrittweise Anleitung zur Zubereitung des Rezeptes sein soll. In den Objekten sind die Keys "schritt_1", "schritt_2", "schritt_3" und so weiter. Die Werte sind Texte mit Anleitungen, was zu tun ist. Formuliere hier ganze Sätze und sprich die User mit du an.
Das nächste Feld hat den Key "alternative Zutaten". Das muss nicht in jedem Rezept vorkommen. Hier können in einem Array für bestimmte Zutaten Alternativen genannt werden. Die Keys in den Objekten des Arrays heißen "zutat" und sind aus dem Array für das Feld "zutaten" die "zutat", die Werte heißen "ersatz" und sind eine Zutat, mit der man die Zutat im Key ersetzen könnte.
Das nächste Feld enthält den Key "allergene" und als Wert ein Array mit Zutaten, die Allergien auslösen können. Wähle diese aus dem Feld "zutaten" aus und nimm die Werte der Keys "zutat" aus dem Array.
Das nächste Feld heißt "energie_in_kcal". Als Wert enthält es eine Zahl, Integer, einen Schätzwert der Kilokalorien, die das Rezept enthalten könnte.

### Für den fünften Dummy-Datensatz aus "users"
*hierfür kopiere ich die vorherige Query und passe den Text an*

Bitte generiere 3 Dummy-Datensätze für eine MongoDB-Collection namens "rezepte" in einer Datenbank für vegane Rezepte.
Es gibt bereits eine Collection "users" in der Datenbank, die den folgenden Datensatz enthält:

{
    "_id": {
      "$oid": "66fd53880eabdff47cb4177c"
    },
    "username": "nourish_nina",
    "email": "nina.nourish@example.com",
    "passwort": "$2a$10$8F2t3R8H6J5T1y2Y3o7k6eO5L1RzG3F4H5S7B1N0Y4F2D6G4H5x1O",
    "profiltext": "Hallo, ich bin Nina! Ich interessiere mich für vegane Ernährung und gesunde Lebensweise. Ich teile meine Lieblingsrezepte und Tipps für ein gesundes Leben. Lass uns zusammen die Welt der pflanzlichen Ernährung erkunden!",
    "social_links": {
      "instagram": "instagram.com/nourish_nina",
      "pinterest": "pinterest.com/nourish_nina"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": false,
      "neue_follower": false
    }
  }

Die 3 Datensätze für die Collection "rezepte" sind Rezepte, die "nourish_nina" gepostet hat. Sie backt besonders gern und postet Rezepte für Gebäcke, mindestens eins für einen Kuchen sollte dabei sein.
Das erste Feld heißt "user" und beinhaltet zwei Key-Value-Pärchen. Das erste Pärchen hat den Key "user_id" und enthält die $oid aus dem Datensatz aus der Collection "users". das zweite Pärchen hat den Key "username" und zeigt den "username" aus dem Datensatz aus der Collection "users".

Das zweite Feld in der Collection "rezepte" hat den Key "rezeptname" und der Wert ist der Name des Rezeptes.
Die weiteren Key-Value-Pärchen beziehen sich auf den Wert des Keys "rezeptname". 
Im nächsten Feld mit dem Key "kategorien" ist der Wert ein Array mit je zwei Schlagwörtern, die sich auf den Wert des Keys "rezeptname" bezieht.Sie sollten sich auf die Art des Gerichts beziehen, wie "Gebäck", "warm", "kalte Küche" oder "Nachspeise" und Rezepte mit Hefe sollten "Hefe" als Schlagwort haben. 
Das Feld mit dem Key "zutaten" beinhaltet ein Array mit Objekten. Es sollen so viele Objekte sein, wie Zutaten für das Rezept nötig sind. In den Objekten gibt es immer den Key "zutat", dessen Wert eine Zutat ist, und den Key "menge", dessen Wert entsprechend der Zutat in Stück, Milliliter (abgekürzt ml) oder Gramm (g) angegeben wird.
Das nächste Feld hat den Key "schwierigkeitsgrad". Hier wähle zwischen "leicht", "mittel" und "schwer" aus.
Das nächste Feld hat den Key "zubereitungszeit_minuten" und eine Integer-Zahl als Wert. Diese sollte entweder eine 5 oder eine 0 hinten haben und sich zwischen 15 und 90 bewegen. Schätze dafür ein, wie lange man ungefähr braucht, um das Rezept zuzubereiten.
Das nächste Feld mit dem Key "instruktionen" enthält ein Array von Objekten, das eine schrittweise Anleitung zur Zubereitung des Rezeptes sein soll. In den Objekten sind die Keys "schritt_1", "schritt_2", "schritt_3" und so weiter. Die Werte sind Texte mit Anleitungen, was zu tun ist. Formuliere hier ganze Sätze und sprich die User mit du an.
Das nächste Feld hat den Key "alternative Zutaten". Das muss nicht in jedem Rezept vorkommen. Hier können in einem Array für bestimmte Zutaten Alternativen genannt werden. Die Keys in den Objekten des Arrays heißen "zutat" und sind aus dem Array für das Feld "zutaten" die "zutat", die Werte heißen "ersatz" und sind eine Zutat, mit der man die Zutat im Key ersetzen könnte.
Das nächste Feld enthält den Key "allergene" und als Wert ein Array mit Zutaten, die Allergien auslösen können. Wähle diese aus dem Feld "zutaten" aus und nimm die Werte der Keys "zutat" aus dem Array.
Das nächste Feld heißt "energie_in_kcal". Als Wert enthält es eine Zahl, Integer, einen Schätzwert der Kilokalorien, die das Rezept enthalten könnte.


***Anmerkung: Ich habe die Backzeit hinterher per Hand ergänzt, weil ich sie in der Query vergessen hatte.***

## Collection Kommentare
### Kommentare
Schreibe bitte 10 Datensätze für eine Collection "kommentare" einer MongoDB, die Kommentare enthalten. Diese Users schreiben Kommentare:
[
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb41778"
    },
    "username": "vegan_chef_mia",
    "email": "mia.vegan@example.com",
    "passwort": "$2a$10$KIXm3R8GZ8K8s5QY8g5h8.0N7K5Wg1qTtL2uR8pXH1RzF0B8cN5fO",
    "profiltext": "Hallo! Ich bin Mia und leidenschaftliche Veganerin. Ich liebe es, neue Rezepte auszuprobieren und gesunde, pflanzliche Mahlzeiten zu kreieren. Mein Ziel ist es, die vegane Küche für alle zugänglich zu machen. Lass uns gemeinsam kochen!",
    "geburtsdatum": "1985-03-15",
    "social_links": {
      "facebook": "facebook.com/vegan_chef_mia",
      "instagram": "instagram.com/vegan_chef_mia"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": true,
      "neue_follower": true
    },
    "rezeptbuch": [
      {
        "rezept_id": "66fd61c211cb6c61f5136f12",
        "rezeptname": "Quinoa-Salat mit Avocado"
      },
      {
        "rezept_id": "66ffe18e2a427df4635b38d1",
        "rezeptname": "Vegane Bouletten"
      }
    ],
    "folgt": [
      {
        "user_id": "66fd53880eabdff47cb4177b",
        "username": "vegan_victor"
      }
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb4177b"
    },
    "username": "vegan_victor",
    "email": "victor.vegan@example.com",
    "passwort": "$2a$10$4hW8t3G8t9F8O2e3Z1t7eO1N5K2lG2s6H5T0H1R8H5G2D5F7J5l1C",
    "profiltext": "Ich bin Victor und ein Fan von veganer Küche! Ich genieße es, neue Rezepte zu kreieren und meine Leidenschaft für gesunde Ernährung mit anderen zu teilen. Kommt mit mir auf eine kulinarische Reise!",
    "geburtsdatum": "1975-11-30",
    "social_links": {
      "facebook": "facebook.com/vegan_victor"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": true,
      "neue_follower": false
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66ffe18e2a427df4635b38d1",
          "rezeptname": "Vegane Bouletten"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41778",
          "rezeptname": "Bunter Linsensalat"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41779",
          "rezeptname": "Deftiges Seitan-Geschnetzeltes"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb41778",
          "username": "vegan_chef_mia"
        },
        {
          "user_id": "66fd53880eabdff47cb41779",
          "username": "plantbased_peter"
        }
      ]
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb4177c"
    },
    "username": "nourish_nina",
    "email": "nina.nourish@example.com",
    "passwort": "$2a$10$8F2t3R8H6J5T1y2Y3o7k6eO5L1RzG3F4H5S7B1N0Y4F2D6G4H5x1O",
    "profiltext": "Hallo, ich bin Nina! Ich interessiere mich für vegane Ernährung und gesunde Lebensweise. Ich teile meine Lieblingsrezepte und Tipps für ein gesundes Leben. Lass uns zusammen die Welt der pflanzlichen Ernährung erkunden!",
    "social_links": {
      "instagram": "instagram.com/nourish_nina",
      "pinterest": "pinterest.com/nourish_nina"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": false,
      "neue_follower": false
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66fd61c211cb6c61f5136f12",
          "rezeptname": "Quinoa-Salat mit Avocado"
        },
        {
          "rezept_id": "66ffe18e2a427df4635b38d2",
          "rezeptname": "Chili Sin Carne"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41779",
          "rezeptname": "Deftiges Seitan-Geschnetzeltes"
        },
        {
          "rezept_id": "66ffe896218fc63a18c3c745",
          "rezeptname": "Bruschetta mit Tomaten und Basilikum"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb41778",
          "username": "vegan_chef_mia"
        },
        {
          "user_id": "66fd53880eabdff47cb4177a",
          "username": "green_guru_lisa"
        }
      ]
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb41779"
    },
    "username": "plantbased_peter",
    "email": "peter.plantbased@example.com",
    "passwort": "$2a$10$JdV4FQW9Tz5qY5e2k3r0oO8M6yGkGZt9R8H1uO1l5y2c6Y7mRzO1i",
    "profiltext": "Ich bin Peter, ein begeisterter Koch, der sich auf pflanzliche Küche spezialisiert hat. Ich teile gerne meine Tipps und Tricks für die Zubereitung köstlicher veganer Gerichte. Lass uns zusammen die Vielfalt der veganen Küche entdecken!",
    "social_links": {
      "instagram": "instagram.com/plantbased_peter",
      "pinterest": "pinterest.com/plantbased_peter"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": false,
      "neue_follower": true
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66ffe896218fc63a18c3c747",
          "rezeptname": "Veganer Schokoladenpudding"
        },
        {
          "rezept_id": "66ffe52fbaf7e37e1a6928b1",
          "rezeptname": "Reisbandnudelsalat mit Mango und Avocado"
        },
        {
          "rezept_id": "66ffec0963ac16343c81e108",
          "rezeptname": "Veganer Schokoladenkuchen"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb4177a",
          "username": "green_guru_lisa"
        },
        {
          "user_id": "66fd53880eabdff47cb4177c",
          "username": "nourish_nina"
        },
        {
          "user_id": "66fd53880eabdff47cb4177b",
          "username": "vegan_victor"
        }
      ]
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb4177a"
    },
    "username": "green_guru_lisa",
    "email": "lisa.green@example.com",
    "passwort": "$2a$10$7A0l2N2eH6l9Q5r1t8Q5eOe6K1RzF1W8S0N1Z2h8N8Rz4L5B9C5rC",
    "profiltext": "Ich bin Lisa, die grüne Guru! Ich liebe es, mit frischen Zutaten zu experimentieren und gesunde, vegane Rezepte zu kreieren. Ich teile auch meine Erfahrungen über nachhaltige Lebensstile und Ernährung.",
    "geburtsdatum": "1990-07-22",
    "social_links": {
      "facebook": "facebook.com/green_guru_lisa",
      "instagram": "instagram.com/green_guru_lisa",
      "pinterest": "pinterest.com/green_guru_lisa"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": false,
      "bewertungen": false,
      "neue_follower": false
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66ffe896218fc63a18c3c746",
          "rezeptname": "Gegrillte Zucchini mit Erdnussbutter"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41778",
          "rezeptname": "Bunter Linsensalat"
        },
        {
          "rezept_id": "66ffec0963ac16343c81e109",
          "rezeptname": "Vegane Zimtschnecken"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb41778",
          "username": "vegan_chef_mia"
        },
        {
          "user_id": "66fd53880eabdff47cb4177c",
          "username": "nourish_nina"
        },
        {
          "user_id": "66fd53880eabdff47cb41779",
          "username": "plantbased_peter"
        }
      ]
    ]
  }
]
Die users kommentieren Rezepte aus ihrem rezeptbuch. Alle users schreiben mindestens einen Kommentar.
Das erste Feld "user" wird hierbei ein Objekt aus der jeweiligen user_id und dem username sein. Das zweite Feld "rezept_id" enthält die Rezept_Id aus dem rezeptbuch aus der Collection "users" als Referenz. Das dritte Feld "kommentar" enthält einen Text, der sich auf den den Wert im Key-Value-Pärchen "rezeptname" beziehen soll. Dieser rezeptname bezeichnet ein Rezept, das nachgekocht und probiert wurde. Schreibe, wie es gelungen ist, ob es einfach war und/oder wie es geschmeckt hat. Vielleicht haben sie auch Fragen zum Rezept. Oder sie haben es Gästen angeboten und berichten, wie es geschmeckt hat. Alle Rezepte sind vegan, bitte erwähne deswegen keine tierischen Produkte. Vielleicht können ein paar Kommentare auch darauf eingehen, dass das Rezept komplett vegan ist und wie Gäste darauf reagiert haben.

### Kommentare mit Antworten

Bitte schreibe je eine Antwort auf 5 der folgenden Kommentare, die ich in die MongoDB-Collection "kommentare" einfügen kann:

[
  {
    "_id": {
      "$oid": "6704f81479a5f79189e231fd"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb41778",
      "username": "vegan_chef_mia"
    },
    "rezept_id": "66fd61c211cb6c61f5136f12",
    "kommentar": "Ich habe den Quinoa-Salat mit Avocado zubereitet und er war einfach köstlich! Die Kombination der Aromen hat meine Gäste begeistert. Definitiv ein Rezept, das ich wieder machen werde!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e231fe"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb41779",
      "username": "plantbased_peter"
    },
    "rezept_id": "66ffe896218fc63a18c3c747",
    "kommentar": "Der vegane Schokoladenpudding war ein Hit auf der letzten Dinner-Party! Alle waren überrascht, dass er ganz ohne tierische Produkte auskommt. Ich werde das Rezept unbedingt weiterempfehlen!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e231ff"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb4177b",
      "username": "vegan_victor"
    },
    "rezept_id": "66fd53880eabdff47cb41778",
    "kommentar": "Ich habe den bunten Linsensalat ausprobiert und er war sehr einfach zuzubereiten. Die Gäste waren begeistert von den Farben und dem Geschmack. Ein tolles veganes Gericht!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23200"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb4177c",
      "username": "nourish_nina"
    },
    "rezept_id": "66ffe18e2a427df4635b38d2",
    "kommentar": "Das Chili Sin Carne war einfach fantastisch! Ich habe es für meine Familie gekocht und sie konnten nicht glauben, dass es vegan ist. Es hat allen sehr gut geschmeckt!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23201"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb4177a",
      "username": "green_guru_lisa"
    },
    "rezept_id": "66ffe896218fc63a18c3c746",
    "kommentar": "Die gegrillten Zucchini mit Erdnussbutter waren eine wunderbare Überraschung. Ich habe sie als Beilage serviert und alle waren begeistert von der Kombination. Vegan und lecker!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23202"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb41778",
      "username": "vegan_chef_mia"
    },
    "rezept_id": "66ffe18e2a427df4635b38d1",
    "kommentar": "Die veganen Bouletten waren ein voller Erfolg! Ich habe sie für ein BBQ zubereitet und alle Gäste waren begeistert. Sie haben gar nicht gemerkt, dass es keine Fleischbouletten sind!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23203"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb41779",
      "username": "plantbased_peter"
    },
    "rezept_id": "66ffe52fbaf7e37e1a6928b1",
    "kommentar": "Der Reisbandnudelsalat mit Mango und Avocado war eine erfrischende Ergänzung zu meinem Sommeressen. Die Gäste waren begeistert von den frischen Aromen. Vegan und super lecker!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23204"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb4177c",
      "username": "nourish_nina"
    },
    "rezept_id": "66ffe896218fc63a18c3c745",
    "kommentar": "Die Bruschetta mit Tomaten und Basilikum war ein einfaches, aber köstliches Rezept. Ich habe es als Vorspeise serviert und die Gäste waren begeistert von der Frische und dem Geschmack!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23205"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb4177b",
      "username": "vegan_victor"
    },
    "rezept_id": "66fd53880eabdff47cb41779",
    "kommentar": "Das deftige Seitan-Geschnetzelte habe ich für ein Familienessen gekocht. Es war einfach zuzubereiten und hat allen sehr gut geschmeckt. Vegan und sehr sättigend!"
  },
  {
    "_id": {
      "$oid": "6704f81479a5f79189e23206"
    },
    "user": {
      "user_id": "66fd53880eabdff47cb4177a",
      "username": "green_guru_lisa"
    },
    "rezept_id": "66ffec0963ac16343c81e109",
    "kommentar": "Die veganen Zimtschnecken waren ein süßer Traum! Ich habe sie zum Frühstück gemacht und alle waren begeistert. Es ist erstaunlich, wie gut vegane Backwaren schmecken können!"
  }
]

Die gewünschten Datensätze sind so strukturiert wie die Kommentare. Es kommt jedoch ein ein Feld hinzu, das sich "antwort_auf" nennt und als Wert die jeweilige kommentar_id hat.
Das Feld rezept_id kann nunmehr weggelassen werden, da es sich um Antworten auf Kommentare handelt, die sich bereits auf ein Rezept beziehen.
Auf den Kommentar mit der _id: "6704f81479a5f79189e231fe" antwortet user: "vegan_victor" mit der user_id: "66fd53880eabdff47cb4177b". Das Rezept ist von ihm und er bedankt sich für den Kommentar.
Auf den Kommentar mit der _id: "6704f81479a5f79189e23206" antwortet user: "nourish_nina" mit der user_id: "66fd53880eabdff47cb4177c". Das Rezept ist von ihr und sie bedankt sich für den Kommentar.
Auf den Kommentar mit der _id: "6704f81479a5f79189e23203" antwortet user: "green_guru_lisa" mit der user_id: "66fd53880eabdff47cb4177a". Das Rezept ist von ihr und sie bedankt sich für den Kommentar.

Die übrigen 2 Antworten sollen von users sein, die das jeweilige Rezept ebenfalls ausprobiert haben.

Da ich diese Datensätze in die Collection "kommentare" als Kommentare einfügen will, fällt das erste Feld "_id" auch weg.

## Collection Followers

Ich habe eine MongoDB-Collection namens "users" mit folgenden Datensätzen:
[
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb41778"
    },
    "username": "vegan_chef_mia",
    "email": "mia.vegan@example.com",
    "passwort": "$2a$10$KIXm3R8GZ8K8s5QY8g5h8.0N7K5Wg1qTtL2uR8pXH1RzF0B8cN5fO",
    "profiltext": "Hallo! Ich bin Mia und leidenschaftliche Veganerin. Ich liebe es, neue Rezepte auszuprobieren und gesunde, pflanzliche Mahlzeiten zu kreieren. Mein Ziel ist es, die vegane Küche für alle zugänglich zu machen. Lass uns gemeinsam kochen!",
    "geburtsdatum": "1985-03-15",
    "social_links": {
      "facebook": "facebook.com/vegan_chef_mia",
      "instagram": "instagram.com/vegan_chef_mia"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": true,
      "neue_follower": true
    },
    "rezeptbuch": [
      {
        "rezept_id": "66fd61c211cb6c61f5136f12",
        "rezeptname": "Quinoa-Salat mit Avocado"
      },
      {
        "rezept_id": "66ffe18e2a427df4635b38d1",
        "rezeptname": "Vegane Bouletten"
      }
    ],
    "folgt": [
      {
        "user_id": "66fd53880eabdff47cb4177b",
        "username": "vegan_victor"
      }
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb4177b"
    },
    "username": "vegan_victor",
    "email": "victor.vegan@example.com",
    "passwort": "$2a$10$4hW8t3G8t9F8O2e3Z1t7eO1N5K2lG2s6H5T0H1R8H5G2D5F7J5l1C",
    "profiltext": "Ich bin Victor und ein Fan von veganer Küche! Ich genieße es, neue Rezepte zu kreieren und meine Leidenschaft für gesunde Ernährung mit anderen zu teilen. Kommt mit mir auf eine kulinarische Reise!",
    "geburtsdatum": "1975-11-30",
    "social_links": {
      "facebook": "facebook.com/vegan_victor"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": true,
      "neue_follower": false
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66ffe18e2a427df4635b38d1",
          "rezeptname": "Vegane Bouletten"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41778",
          "rezeptname": "Bunter Linsensalat"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41779",
          "rezeptname": "Deftiges Seitan-Geschnetzeltes"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb41778",
          "username": "vegan_chef_mia"
        },
        {
          "user_id": "66fd53880eabdff47cb41779",
          "username": "plantbased_peter"
        }
      ]
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb4177c"
    },
    "username": "nourish_nina",
    "email": "nina.nourish@example.com",
    "passwort": "$2a$10$8F2t3R8H6J5T1y2Y3o7k6eO5L1RzG3F4H5S7B1N0Y4F2D6G4H5x1O",
    "profiltext": "Hallo, ich bin Nina! Ich interessiere mich für vegane Ernährung und gesunde Lebensweise. Ich teile meine Lieblingsrezepte und Tipps für ein gesundes Leben. Lass uns zusammen die Welt der pflanzlichen Ernährung erkunden!",
    "social_links": {
      "instagram": "instagram.com/nourish_nina",
      "pinterest": "pinterest.com/nourish_nina"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": false,
      "neue_follower": false
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66fd61c211cb6c61f5136f12",
          "rezeptname": "Quinoa-Salat mit Avocado"
        },
        {
          "rezept_id": "66ffe18e2a427df4635b38d2",
          "rezeptname": "Chili Sin Carne"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41779",
          "rezeptname": "Deftiges Seitan-Geschnetzeltes"
        },
        {
          "rezept_id": "66ffe896218fc63a18c3c745",
          "rezeptname": "Bruschetta mit Tomaten und Basilikum"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb41778",
          "username": "vegan_chef_mia"
        },
        {
          "user_id": "66fd53880eabdff47cb4177a",
          "username": "green_guru_lisa"
        }
      ]
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb41779"
    },
    "username": "plantbased_peter",
    "email": "peter.plantbased@example.com",
    "passwort": "$2a$10$JdV4FQW9Tz5qY5e2k3r0oO8M6yGkGZt9R8H1uO1l5y2c6Y7mRzO1i",
    "profiltext": "Ich bin Peter, ein begeisterter Koch, der sich auf pflanzliche Küche spezialisiert hat. Ich teile gerne meine Tipps und Tricks für die Zubereitung köstlicher veganer Gerichte. Lass uns zusammen die Vielfalt der veganen Küche entdecken!",
    "social_links": {
      "instagram": "instagram.com/plantbased_peter",
      "pinterest": "pinterest.com/plantbased_peter"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": true,
      "bewertungen": false,
      "neue_follower": true
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66ffe896218fc63a18c3c747",
          "rezeptname": "Veganer Schokoladenpudding"
        },
        {
          "rezept_id": "66ffe52fbaf7e37e1a6928b1",
          "rezeptname": "Reisbandnudelsalat mit Mango und Avocado"
        },
        {
          "rezept_id": "66ffec0963ac16343c81e108",
          "rezeptname": "Veganer Schokoladenkuchen"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb4177a",
          "username": "green_guru_lisa"
        },
        {
          "user_id": "66fd53880eabdff47cb4177c",
          "username": "nourish_nina"
        },
        {
          "user_id": "66fd53880eabdff47cb4177b",
          "username": "vegan_victor"
        }
      ]
    ]
  },
  {
    "_id": {
      "$oid": "66fd53880eabdff47cb4177a"
    },
    "username": "green_guru_lisa",
    "email": "lisa.green@example.com",
    "passwort": "$2a$10$7A0l2N2eH6l9Q5r1t8Q5eOe6K1RzF1W8S0N1Z2h8N8Rz4L5B9C5rC",
    "profiltext": "Ich bin Lisa, die grüne Guru! Ich liebe es, mit frischen Zutaten zu experimentieren und gesunde, vegane Rezepte zu kreieren. Ich teile auch meine Erfahrungen über nachhaltige Lebensstile und Ernährung.",
    "geburtsdatum": "1990-07-22",
    "social_links": {
      "facebook": "facebook.com/green_guru_lisa",
      "instagram": "instagram.com/green_guru_lisa",
      "pinterest": "pinterest.com/green_guru_lisa"
    },
    "benachrichtigungen_mail": {
      "kommentare_antworten": false,
      "bewertungen": false,
      "neue_follower": false
    },
    "rezeptbuch": [
      [
        {
          "rezept_id": "66ffe896218fc63a18c3c746",
          "rezeptname": "Gegrillte Zucchini mit Erdnussbutter"
        },
        {
          "rezept_id": "66fd53880eabdff47cb41778",
          "rezeptname": "Bunter Linsensalat"
        },
        {
          "rezept_id": "66ffec0963ac16343c81e109",
          "rezeptname": "Vegane Zimtschnecken"
        }
      ]
    ],
    "folgt": [
      [
        {
          "user_id": "66fd53880eabdff47cb41778",
          "username": "vegan_chef_mia"
        },
        {
          "user_id": "66fd53880eabdff47cb4177c",
          "username": "nourish_nina"
        },
        {
          "user_id": "66fd53880eabdff47cb41779",
          "username": "plantbased_peter"
        }
      ]
    ]
  }
]

Im Feld "folgt" befinden sich user_id und username der Users, denen ein User folgt. Ich möchte basierend darauf eine Collection namens "followers" haben, in der zu sehen ist, wer den users folgt. Diese Collection nennt sich "followers". Bitte erstelle mir für die Collection followers Datensätze im JSON-Format. Im ersten Feld, das "user" heißt, befindet sich die _id eines users. Da es in dieser Abfrage 5 users gibt, bekommt die Collection also 5 Dokumente. Das zweite Feld ist ein Array und nennt sich "followers". Bitte suche hierfür die Daten der users durch und wo du im Feld "folgt" die id, die im Feld user steht, wiederfindest, trage dessen "user_id" und "username" als Objekt in das Array im Feld "followers" ein.