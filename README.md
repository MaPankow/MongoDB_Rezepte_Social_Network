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

## Und was ist mit Followern? Eine eigene Collection?

Eine weitere Überlegung ist nunmehr, eine neue Colletion anzulegen, in die nicht eingetragen ist, wem z.B. User1 folgt, sondern andersherum, wer alles User1 folgt. Ich könnte mir vorstellen, dass dies durchaus Sinn ergeben könnte, denn wie soll die Abfrage lauten, wenn User1 wissen möchte, wer ihr/ihm folgt, dann müsste man bei allen Users in die Profile geschaut werden, ob User1 im folgt-Array drinsteht? Ich halte hier eine eigene Collection für sinnvoll, nicht eingebettet, denn so ein Netzwerk soll ja schon mehrere Tausend Users haben und wie viele einer/m User folgen, ist nicht beschränkt. Ich würde zusätzlich zur Referenz auf die Id der Follower auch die Usernames einbetten. So kann User1 jederzeit ihre/seine Follower aufrufen und ihre Namen sehen bzw. zu ihren Profilen gelangen. Und alle anderen können sich die Follower-Liste von User1 auch angucken.

## Dummy-Datensätze mit Chat-GPT
Ist nicht Teil der Aufgabe, aber ich habe mit Chat-GPT gespielt. Die Anfrage zu erstellen ist etwas kompliziert, aber kann dann kopiert und leicht abgeändert werden. Die Datensätze sind unglaublich präzise. Ich habe leichte Änderungen vorgenommen, da in einem Datensatz Honig war und die Felder, die Antwort leere Arrays haben, habe ich gelöscht. Ansonsten konnte ich die Antworten in meine Inserts so reinkopieren und sie sind sogar strukturiert, mit Einzügen etc.











