# Collection users


Bitte generiere 5 Dummy-Nutzerdatensätze für eine MongoDB-Collection namens "users" in einer Datenbank für vegane Rezepte.
Das erste Key-Value-Pärchen enthält den "username". Die Namen können auf Klarnamen beruhen oder frei erfunden sein. 
Das zweite Key-Value-Pärchen heißt "email" und beinhaltet die E-Mail-Adresse. 
Das nächste Key-Value-Pärchen heißt "passwort" und hier generiere bitte Einträge, die aussehen, als wäre das Passwort hashed.
Das nächste Key-Value-Pärchen heißt "profiltext" und es kommt ein kurzer Text über die jeweiligen User rein. Bitte lass sie sich in Kurztexten von maximal 150 Wörten vorstellen. Die Profiltexte sind für eine Plattform, in der es um veganes Kochen und Essen geht und können diese Themen beinhalten. 
Für das nächste Feld "geburtsdatum" generiere bitte ein Geburtsdatum zwischen 1950 und 2009. Die Angabe des Geburtsdatums ist freiwillig, also muss nicht jeder Datensatz dieses Key-Value-Pärchen beinhalten. Bitte lass diese Angabe bei 5 Datensätzen aus.
Das nächste Feld heißt "social_links" und enthalt Links zu Profilen, die wahlweise auf Facebook, Instagram oder Pinterest sind. Sie können angelehnt an die usernames der users sein. Die users sind entweder auf einer der drei Plattformen, auf zweien oder auf dreien unterwegs.
das letzte Feld in der Collection "users" hat den Key "benachrichtigungen_mail". Darin befinden sich drei Keys, deren Werte alle Booleans sind, "kommentare_antworten", "bewertungen" und "neue_follower". Sie können in folgenden Konstellationen ausgewählt worden sein: True-True-True, True-False-True, True-True-False, rue-false-false oder false-false-false.

# Collection Rezepte:
## Für den ersten Dummy-Datensatz aus "users"

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