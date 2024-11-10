# Datenbank für ein soziales Netzwerk für Rezepte mit MongoDB


Link zur Aufgabe: https://github.com/bergemann-hoehne/Datenbank-Wochenprojekte/blob/main/10_Wochenprojekt/10_Projektbeschreibung.md

**Das Projekt startet am 27.09.2024**
## Datenbank erstellen
... dazu richte ich mir erst mal auf der Website von MongoDB ein neues Cluster ein.

Ich nenne meine Plattform, und somit auch die Datenbank, Planet-A. There's no Planet B. Bei meiner Plattform geht es um den Austausch von veganen Rezepten.

Der Code für die Befehle befindet sich in den js.-Dateien. Über ein Plugin für meinen Code-Editor kann ich direkt die Datenbank manipulieren. (Natürlich erst, nachdem ich eine Verbindung zu meinem Cluster bei Atlas hergestellt habe)

Zur besseren Übersicht erstelle ich für verschiedene Aktionen extra Dateien und beschreibe hier, was ich in welcher Datei mache.

Alles, was ich jetzt schon weiß, ist, dass es eine Collection users geben wird, deswegen erstelle ich die erste mongodb.js-Datei namens "users_insert" (Inzwischen insert-alt.mongodb.js) Hier habe ich die Datenbank erstellt sowie die Collection users.

Ohne Collection gibt es nämlich keine Datenbank.

Ich weiß auch nicht, warum ich immer eine Datenbank haben will, bevor ich sie in Diagrammen modelliere. Vielleicht glaube ich, die Welt könnte inzwischen untergehen, da will man ja vorher unbedingt zumindest eine Datenbank haben!

## Datenmodellierung mit einem Klassendiagramm

Ich bin dabei, MongoDB zu lernen. Da bei der dokumentenbasierten Datenbank vieles flexibler läuft, könnte sich am Datenmodell noch einiges ändern.
Hier ist mein Klassendiagramm, Stand 30.09.2024:

!["Klassendiagramm meiner Datenbank"](/klassendiagramm_vorher.png)

In die Collection "users" werden die "Pflichtdaten" eingetragen, die Benutzer zum Registrieren und Anmelden brauchen. Außerdem treffen die users hier die Auswahl, ob und wann sie per Mail benachrichtigt werden möchten. Ist der Boolean-Wert true, bekommen sie eine Mail-Benachrichtigung, wenn etwas bestimmtes eintritt, in meinem Beispiel, wenn ein neuer Kommentar auf ihren Beitrag gekommen ist. Wenn False gewählt ist, wünschen sie keine Mail

Users und user_profile sind durch eine *Composite Aggregation* miteinander verbunden. Sie gehören zwingend zusammen und eines existiert nicht ohne das andere. Die im Diagramm aufgeführte Collection enthält alle möglichen Keys, die meisten Angaben sind freiwillig. Füllt man weniger aus, wird das Dokument weniger Daten enthalten

Die Users können anderen Users folgen. Weil ich der Meinung bin, dass solche Listen oft abgerufen werden, denke ich an eine Extra-Collection, um schnell darauf zugreifen zu können.


Ähnlich wie mit der Folgeliste verhält es sich mit dem Rezeptbuch. Die Rezeptbücher haben von mir nunmehr eine eigene Collection erhalten, in die die User_profil-id kommt und ein Array mit den hinzugefügten Rezept_ids. 

Das Rezeptbuch und die folgt-Liste sind zwingend an das User-Profil gebunden, gibt es kein Profil, gibt es auch keine Einträge in den beiden Collections. Anders habe ich mich bei der Collection rezepte entschieden. Sofern sie nicht eigenhändig von den VerfasserInnen gelöscht werden, bleiben sie weiterhin auf der Plattform für alle zum Nachkochen. Man hat lediglich keinen Zuriff mehr auf das entsprechende Profil, durch das es angelegt wurde. Ich verwende hier eine Shared Aggregation.


Die Kommentare bekommen keine Extratabelle für Antworten. Sie sind über eine Composite Aggregation mit den Rezepten verbunden, denn ohne das Rezept kann es auch keinen Kommentar zum Rezet geben. Allerdings, sofern nicht händisch gelöscht, bleiben sie bestehen, wenn der User-Account gelöscht wird. 


## Zusammenlegung der Collections users, user_profile, rezeptbuch und folgt_listen
02.10.2024: In einer Mongo-DB, wo es keine Joins gibt, ist es besser, andere Tabellen einzubetten und sofort abrufbar zu haben, sofern sie nicht unüberschaubar groß werden und die Tabelle sprengen oder sehr unübersichtlich machen würden. 
Das Rezeptbuch ist auf 100 Einträge beschränkt, die keine nennenswerte Größe darstellen. Auch andere Users, denen man folgt, werden nicht unüberschaubar viele werden. Hier könnte man später von Seiten des Netzwerkes auch eine Beschränkung einrichten, wenn absehbar ist, dass die Anzahl sehr groß wird.

Users und ihre Profile kann man auch problemlos zusammenlegen, sofern es nicht rechtliche Einwände gibt. Also mache ich das auch.

## Und was ist mit Followern? Eine eigene Collection? Überlegungen ...

Eine weitere Überlegung ist, eine neue Collection anzulegen, in die nicht eingetragen ist, wem z.B. User1 folgt, sondern andersherum, wer alles User1 folgt. 
Ich könnte mir vorstellen, dass dies durchaus Sinn ergeben könnte, denn wie soll die Abfrage lauten, wenn User1 wissen möchte, wer ihr/ihm folgt, dann müsste man bei allen Users in die Profile geschaut werden, ob User1 im folgt-Array drinsteht? Ich halte deswegen eine eigene Collection dafür sinnvoll.



## Collection Rezepte und Dummy-Datensätze mit ChatGPT
04.10.2024: Ist nicht Teil der Aufgabe, aber ich habe mit ChatGPT gespielt, um Dummy-Daten zu bekommen. 
Für Interessierte lade ich die Datei, in der ich die Querys für die Datensätze vorformuliere, als "Chat-GPT-Datensätze.md" hoch. 

Ich habe gemerkt, dass meine ersten Überlegungen noch viel zu SQL waren. Zu viele Collections. Darum habe ich einen neuen Playground angelegt und noch mal von vorne mit der Collection users angefangen. 

Den alten Playground habe ich unter "insert-alt.mongodb.js" abgespeichert. 

## Rezeptbuch zu "users" hinzufügen
Rezept-Dummydaten habe ich mir auch von ChatGPT generieren lassen. Für das Rezeptbuch update ich die Datensätze der "users". Der Code hierfür befindet sich im Playground update mongodb.js.


## Users folgen Users
 08.10.2024: Im Prinzip ist es das Gleiche Prinzip wie beim Einfügen des Rezeptbuches.
 Anmerkung: Nachdem ich bei Insert oder Update einmal Daten eingefügt habe, kommentiere ich den Code in den Playgrounds aus. Ließe ich sie einkommentiert, würden jedes Mal, wenn ich das Script ausführe, neue Daten bzw. Datensätze eingefügt.



## Collection Kommentare

 Diese werde ich im Playground insert.mongodb.js erstellen.
 Und dann frage ich wieder ChatGPT nach ein paar Dummy-Datensätzen.

 Es gibt Kommentare und Antworten auf Kommentare. Beides ist in der Collection kommentare zu finden. Erste Kommentare beziehen sich auf das jeweilige Rezept, Antworten auf den Kommentar bzw. das Profil, das ihn geschrieben hat. Im Playground abfragen.mongodb.js befinden sich Abfragen, die jeweils die "Ur-Kommentare" filtern und die Antworten.

## Collection Followers
 Weiter vorn hatte ich es angekündigt, dass ich erwäge, die Collection Followers einzufügen. 

 Ich werde wieder meinen insert.mongodb.js-Playground benutzen, um die Collection zu erstellen und zu füllen. Vielleicht kann mir hier auch wieder ChatGPT helfen, da in den users-Daten bereits drinsteht, welchen users die users folgen. Es kann!


## Bewertungen
Bewertungen und Kommentare kommen in eine Collection (die Antworten auch) Kommentare sind eine Art "erweiterte Bewertung" und können nur nach einer Sternebewertung abgegeben werden. Antworten auf Kommentare haben keine Option auf Sternebewertung, kommen aber auch in diese Collection.

Ich lege zunächst die Sternebewertung bei den Kommentaren an. Hier ist sie ein Array, in das jedes Mal, wenn eine Bewertung erfolgt, die Sternebewertung rein gepusht wird. Mir fällt auf, dass ich die Collection in bewertungen umbenennen sollte. MongoDB sei Dank muss ich sie nicht umplanen. Auch hierfür bitte ich ChatGPT um Probedatensätze.

Anschließend suche ich mir die rezept_ids aus der Collection raus, damit ich weiß, welche Rezepte eine Bewertung bekommen haben.

Ich update daraufhin die Rezepte mit den entsprechenden ids. Mit dem Befehl $inc: 1, soll jedes Mal, wenn ein neuer Eintrag in in der Bewerungsliste erfolgt, die AnzahlBewertungen um 1 inkrementiert werden. Aus den Zahlen, die sich im Array "sternebewertungen" in der Collection bewertungen ansammeln, soll ein Durchschnitt gebildet und in der Rezepte-Collection geupdatet werden. 

Auf zum Playgound update.mongodb.js!!!



## Klassendiagramm nachher

!["Klassendiagramm meiner Datenbank nach Erstellung"](/klassendiagramm_nachher.png)

Das Klassendiagramm enthält nun die Änderungen vom (vielleicht vorerst?) letzten Projekttag, dem 08.10.2024.









