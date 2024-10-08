# Datenbank für ein soziales Netzwerk für Rezepte mit MongoDB


Link zur Aufgabe: https://github.com/bergemann-hoehne/Datenbank-Wochenprojekte/blob/main/10_Wochenprojekt/10_Projektbeschreibung.md

**Das Projekt startet am 27.09.2024**
## Datenbank erstellen
... dazu richte ich mir erst mal auf der Website von MongoDB ein neues Cluster ein.

Ich nenne meine Plattform, und somit auch die Datenbank, Planet-A. Der Name spielt auf den Spruch der Klimagerechtigkeitsbewegung "There's no Planet B" an. Wir wollen unseren Planeten erhalten und schützen. Da der Verzehr von Fleisch weltweit reduziert werden müsste, geht es bei meiner Plattform um den Austausch von veganen Rezepten.

Der Code für die Befehle befindet sich in den js.-Dateien. Über ein Plugin für meinen Code-Editor kann ich direkt die Datenbank manipulieren. (Natürlich erst, nachdem ich eine Verbindung zu meinem Cluster bei MongoDB hergestellt habe)

Zur besseren Übersicht erstelle ich für verschiedene Aktionen extra Dateien und beschreibe hier, was ich in welcher Datei mache.

Alles, was ich jetzt schon weiß, ist, dass es eine Collection users geben wird, deswegen erstelle ich die erste mongodb.js-Datei namens "users_insert" Hier habe ich auch die Datenbank erstellt sowie die Collection users.

Ohne Collection gibt es nämlich keine Datenbank.

Ich weiß auch nicht, warum ich immer eine Datenbank haben will, bevor ich sie modelliere. Vielleicht glaube ich, die Welt könnte inzwischen untergehen. Da will man ja vorher unbedingt zumindest eine Datenbank haben!

## Datenmodellierung mit einem Klassendiagramm

Ich bin dabei, MongoDB zu lernen. Da bei der dokumentenbasierten Datenbank vieles flexibler läuft, könnte sich am Datenmodell noch einiges ändern.
Hier ist mein Klassendiagramm, Stand 30.09.2024:

!["Klassendiagramm meiner Datenbank"](/klassendiagramm_vorher.png)

Aus Gründen der Geschlechtsneutralität habe ich die Tabelle wieder "users" genannt. Hier werden die "Pflichtdaten" eingetragen, die User zum Registrieren und Anmelden brauchen. Außerdem treffen die users hier die Auswahl, ob und wann sie per Mail benachrichtigt werden möchten. In meinem Beispiel steht der Boolean-Wert true nur bei kommentare_antworten, das heißt, wenn ein Rezept, das die Person gepostet hat, kommentiert oder auf einen Kommentar geantwortet wird, wird die Person per Mail benachrichtigt, wenn das Rezept mit Sternen bewertet wird oder andere Users folgen, erfolgt keine Benachrichtigung.


Users und user_profile (profile als Mehrzahl des deutschen Wortes Profil zu lesen) sind durch eine *Composite Aggregation* miteinander verbunden. Sie gehören zwingend zusammen und eines existiert nicht ohne das andere. Ein username muss angegeben werden, aber viele Angaben sind im Profil 
freiwillig, wie etwa das Geburtsdatum. Die im Diagramm aufgeführte Tabelle enthält alle möglichen Keys, zu denen die Users Angaben machen können. Wenn jemand im Frontend der Anwendung nicht alle fakultativen Felder ausfüllt, wird ein Dokument mit entsprechend weniger Key-Value-Pärchen in die DB gespeichert. Ändert man sein Profil, kann man auch später noch fehlende Key-Value-Pärchen ergänzen.

Die Users können anderen Users folgen. Es ginge auch, das direkt in die Profil-Dokumente abzuspeichern, aber das käme mir doch unübersichtlich vor. Obwohl, vielleicht nur für das menschliche Auge. Sofern es der Maschine egal ist und ich erfahre, dass es sogar günstiger für die Performance wäre, das nicht in eine extra Tabelle zu legen, werde ich es ändern.

In dem Fall müsste ich noch nicht einmal irgendwelche neuen Keys oder Spalten anlegen, das kann ganz unkompliziert in den Dokumenten abglegt werden. Vorausgesetzt, die entsprechenden Users folgen anderen Users.

Ähnlich wie mit der Folgeliste verhält es sich mit dem Rezeptbuch. Die Rezetbücher haben von mir nunmehr eine eigene Collection erhalten, in die die User_profil-id kommt und ein Array mit den hinzugefügten Rezept_ids. Die Beschränkung auf 100 findet sicherlich auf Anwendungsebene statt.

Das Rezeptbuch und die folgt-Liste sind zwingend an das User-Profil gebunden, gibt es kein Profil, gibt es auch keine Einträge in den beiden Collections. Anders habe ich mich bei der Collection rezepte entschieden. Sofern sie nicht eigenhändig von den VerfasserInnen gelöscht werden, bleiben sie weiterhin auf der Plattform für alle zum Nachkochen. Man hat lediglich keinen Zuriff mehr auf das entsprechende Profil. In dem Fall verwende ich eine Shared Aggregation.

Auch bei den Rezepten habe ich alle möglichen Attribute angegeben, eigentlich noch nicht mal alle, denn man kann Mengen in Stück, Milliliter oder Gramm angeben.

Die Kommentare bekommen keine Extratabelle für Antworten. Sie sind über eine Composite Aggregation mit den Rezepten verbunden, denn ohne das Rezept kann es auch keinen Kommentar zum Rezet geben. Allerdings, sofern nicht händisch gelöscht, überdauern sie das Userprofil und bleiben bestehen, auch wenn der User-Account gelöscht wird. 


## Zusammenlegung der Collections users, user_profile, rezeptbuch und folgt_listen
02.10.2024: In einer Mongo-DB, wo es keine Joins gibt, ist es besser, andere Tabellen einzubetten und sofort abrufbar zu haben, sofern sie nicht unüberschaubar groß werden und die Tabelle sprengen oder sehr unübersichtlich machen würden. Das ist hier nicht nötig, das Rezeptbuch ist auf 100 Einträge beschränkt, die keine nennenswerte Größe darstellen. Auch andere Users, denen man folgt, sollten nicht unüberschaubar viele werden. Hier könnte man von Seiten des Netzwerkes auch eine Beschränkung einrichten, wenn absehbar ist, dass die Users vorhaben, Tausenden von anderen Users zu folgen (Ich glaube, Facebook macht das sogar).

Users und ihre Profile kann man auch problemlos zusammenlegen, sofern es nicht rechtliche Einwände gibt. Das ist ein Thema, mit dem ich mich hier und jetzt nicht befasse, denn dafür würde es im Realfall rechtlich bewanderte Personen geben, die das beantworten können sollten.

## Und was ist mit Followern? Eine eigene Collection? Überlegungen ...

Eine weitere Überlegung ist nunmehr, eine neue Collection anzulegen, in die nicht eingetragen ist, wem z.B. User1 folgt, sondern andersherum, wer alles User1 folgt. Ich könnte mir vorstellen, dass dies durchaus Sinn ergeben könnte, denn wie soll die Abfrage lauten, wenn User1 wissen möchte, wer ihr/ihm folgt, dann müsste man bei allen Users in die Profile geschaut werden, ob User1 im folgt-Array drinsteht? Ich halte hier eine eigene Collection für sinnvoll, nicht eingebettet, denn so ein Netzwerk soll ja schon mehrere Tausend Users haben und wie viele einer/m User folgen, ist nicht beschränkt. Ich würde zusätzlich zur Referenz auf die Id der Follower auch die Usernames einbetten. So kann User1 jederzeit ihre/seine Follower aufrufen und ihre Namen sehen bzw. zu ihren Profilen gelangen. Und alle anderen können sich die Follower-Liste von User1 auch angucken.

Das ist jetzt erst mal nur Theorie, implementiert habe ich in diese Richtung noch gar nichts.

## Collection Rezepte und Dummy-Datensätze mit ChatGPT
04.10.2024: Ist nicht Teil der Aufgabe, aber ich habe mit ChatGPT gespielt. Die Anfrage zu erstellen ist etwas kompliziert, aber kann dann kopiert und leicht abgeändert werden. Die Datensätze sind unglaublich präzise. Ich habe leichte Änderungen vorgenommen, da in einem Datensatz Honig war und die Felder, die Antwort leere Arrays haben, habe ich gelöscht. Ansonsten konnte ich die Antworten in meine Inserts so reinkopieren und sie sind sogar strukturiert, mit Einzügen etc.

Für Interessierte lade ich die Datei, in der ich die Querys für die Datensätze vorformuliere, mit hoch. Bei den alten Abfragen habe ich das teilweise leider nur in ChatGPT formuliert, sodass nur die Abfragen ab dem Zeitpunkt dabei sind, ab dem ich die users-Tabelle neu angelegt habe. 
Das ist aber auch nur eine Spielerei nebenbei. Den Playground, mittels dem ich die Datensätze in die vorherigen Tabellen "users" und "user_profile" isertet habe, habe ich unter "insert-alt.mongodb.js" abgespeichert. 

## Rezeptbuch zu "users" hinzufügen
Dazu brauchte ich erst mal ein paar Rezepte. Nun können die Users sie in ihren eigenen Rezeptbüchern abspeichern. Dafür update ich die Datensätze der "users". Der Code hierfür befindet sich im Playground update.mongodb.js.

Überlegungen hierzu sind, dass die users nicht eigene Rezepte ... wobei. Die Plattform sollte möglichst vollständig von den Users nutzbar sein und eine Hilfe im Alltag. Warum sollten sie nicht auch eigene Rezepte abspeichern können, wenn sie diese schnell wiederfinden wollen? Technisch ist es sowieso möglich, denn jedes Rezept hat seine eigene Id.

#.# Users folgen Users
 08.10.2024: Im Prinzip ist es das Gleiche Prinzip wie beim Einfügen des Rezeptbuches.
 Anmerkung: Nachdem ich bei Insert oder Update einmal Daten eingefügt habe, kommentiere ich den Code in den Playgrounds aus. Man kann immer nur das gesamte Scrippt ausführen. Ließe ich sie einkommentiert, würden jedes Mal, wenn ich das Script ausführe, neue Daten bzw. Datensätze eingefügt.

 Der Code für die Rezeptbücher wird also auskommentiert. Ich update die Datensätze wieder im Playground update.mongodb.js

## Collection Kommentare

 Diese werde ich im Playground insert.mongodb.js erstellen.
 Und dann frage ich wieder ChatGPT nach ein paar Dummy-Datensätzen.

 Es gibt Kommentare und Antworten auf Kommentare. Die Dokumente unterscheiden sich insofern als die Kommentare die "rezept_id" des Rezeptes in ihrem Dokument haben. Die Antworten bekommen keine rezept_id, dafür aber eine "antwort_auf", unter der die id des Kommentars abgeleggt wird, auf die sich die Antwort bezieht. Beides ist in der Collection kommentare zu finden. Im Plaground abfragen.mongodb.js befinden sich Abfragen, die jeweils die "Ur-Kommentare" filtern und die Antworten.

## Collection Followers
 Weiter vorn hatte ich es angekündigt, dass ich erwäge, die Collection Followers einzufügen. es handelt sich hierbei um eine Redundanz, die ich für den Fall erstellen will, dass die Users schnell abrufen wollen, wie viele und wer ihnen folgt. Aus gewissen sozialen Netzwerken ist mir bekannt, dass es durchaus nicht nur für die Users selbst eine Rolle spielt, wie viele ihnen folgen, sondern für andere Users. Vielleicht könnte eine solche Collection auch Speilereien erlauben, dass die Users anhand ihrer Followerzahl Michelin-Sterne sammeln können oder so etwas.

 Ich werde wieder meinen insert.mongodb.js-Playground benutzen, um die Collection zu erstellen und zu füllen. Vielleicht kann mir hier auch wieder ChatGPT helfen, da in den users-Daten bereits drinsteht, welchen users die users folgen.


## Bewertungen
Zuerst habe ich gedacht, ich bringe die Bewertungen nur bei den Rezepten ein und ein Array für Bewertungen in der Collection erstellt.

Dafür benutzte ich wieder den Playground update.mongodb.js. 

Dann fiel mir aber auf, dass Bewertungen einhergehen könnten und daher auchin der Collection getätigt werden können, wo dann Bewertungen mit oder ohne Kommentar und Kommentare ohne Bewertung (Antworten) gesammelt werden. 

Die Rezepte-Collection sollte zwar auch ein Feld für Bewertungen habe, wo aber lediglich die Anzahl und der Durchschnitt der Bewertungshöhe eingegeben werden. Kein Array. Das wollte ich nun wieder loswerden und habe herausgefunden, nachdem ich es schon eingefügt habe, und habe dafür die $unset-Methode benutzt. Die Datensätze haben nun wieder keine Bewertungen. Vorerst. Erst mal füge ich sie aber in der Collection Kommentare ein. 
Wenn man auf einen Kommentar antwortet, wird die Antwort weiterhin ohne Rezept_id und dafür mit Kommentar_id abgelegt. Auch eine Bewertung wird nicht im Dokument mit abgespeichert, wenn man auf "Antworten" drückt. Dies wäre beim Programmieren der Anwendung zu beachten.

Also, für die Bewertungen wird es ein Update in der Collection Rezepte geben, welches erfolgt, wenn in der Collection kommentare eine Sternebewertung abgegeben wird. 

Ich lege zunächst die Sternebewertung bei den Kommentaren an. Hier ist sie ein Array, in das jedes Mal, wenn eine Bewertung erfolgt, die Sternebewertung rein gepusht wird. Mir fällt auf, dass ich die Collection in bewertungen umbenennen sollte. MongoDB sei Dank muss ich sie nicht umplanen. Die Sternebewertung steht sozusagen "über" dem Kommentar. Der Kommentar ist etwas, was man der Sternebewertung hinzufügen kann. Auf Anwendungsebene sollte es vielleicht so sein, dass, um einen Kommentar zu schreiben, eine Sternebewertung notwendig ist. Aber eine Sternebewertung ohne Kommentar geht. Die kommt dann einfach ins Array
Bei meinen Datensätzen füge ich die Sternenbewertung nachträglich ein (hüstel) und da ChatGPT so freundliche Kommentare geschrieben hat, und um das Ganze abzukürzen, gebe ich allen Rezepten erst mal eine Bewertung von 5 Sternen.

Anschließend suche ich mir die rezept_ids aus der Collection raus, damit ich weiß, welche Rezepte eine Bewertung bekommen haben.

Ich update daraufhin die Rezepte mit den entsprechenden ids. Mit dem Befehl $inc: 1, soll jedes Mal, wenn ein neuer Eintrag in in der Bewerungsliste erfolgt, die AnzahlBewertungen um 1 inkrementiert werden. Aus den Zahlen, die sich im Array "sternebewertungen" in der Collection bewertungen ansammeln, soll ein Durchschnitt gebildet und in der Rezepte-Collection geupdatet werden. Das geschieht eigentlich durch die Anwendung, ich trage es jetzt händisch ein.

Auf zum Playgound update.mongodb.js!!!



## Klassendiagramm nachher

!["Klassendiagramm meiner Datenbank nach Erstellung"](/klassendiagramm_nachher.png)

Das Klassendiagramm enthält nun die Änderungen vom (vielleicht vorerst?) letzten Projekttag, dem 08.10.2024.









