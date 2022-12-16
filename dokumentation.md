Rock Paper Scissors
Niklas Affenita

Slutprojekt Front End 2022


Introduktion

Ideerna strömmade in direkt när jag läst projektbeskrivningen. Jag visste direkt att jag skulle koda en komplett webbsida fyllda av animationer och smidig navigering. Jag hade redan nu en ide om att sidan skulle handla om sten sax påse i helhet, dvs inte bara själva spelet. Jag ville bygga en lärorik och informativ helhetswebbsida med historien, reglerna och strategi.  Jag bestämde mig direkt för att jag inte skulle använda mig av canvas för att göra spelet, naivt valde jag istället att bygga hela spelet med css animationer (logiken är dock såklart JS) och skulle snart upptäcka att CSS inte gör det lika lätt för en som JS canvas. Men med många JS funktioner, svett och tårar går allt till slut.


Mål

Mitt mål för detta projekt är att skapa en helheltswebbsida byggt utifrån ett tillgänglighetsperspektiv, men som också är stilren och fyllda av animationer av olika slag.



Navigationsfältet

Navigationsfältet var det allra första jag började skapa, det kändes naturligt. Mina första tankar var att ha en sticky navbar samt en dropdownmeny, men brist på innehåll gjorde att det inte behövdes eller såg naturligt ut. Jag hade helt enkelt inte tillräckligt med material för att det skulle se bra ut. Jag ville använda mig av en animation på titel-texten som visades varje gång sidan laddas som inte skulle vara allt för distraherande. Jag skrev först en keyframe animation som ökade letter-spacing, men det blev alldeles för mycket. Istället valde jag en fade-in animation på både titeln och länkarna i headern. Jag bestämde mig även för en enkel hoverfunktion med en övergångseffekt (transition) för stilens skull.

Jag tycker att navigeringsfält lätt blir väldigt fyrkantiga och tråkiga, istället valde jag att gå ett annat håll med mitt. Jag ville att headern skulle vara helt lös, nästan svävande mellan bodyn och toppen av sidan. Med lite border-radius, positioning och padding åstadkom jag exakt det jag försökte åstadkomma.

Jag la till en liten logga till vänster om titel-texten som ursprungligen inte var planerat för den enkla anledningen att det såg rätt tråkigt ut.

Jag gjorde även en header som är anpassad för mindre skärmar och mobil. Navigeringsfältet ändras automatiskt då den är helt responsiv. I den anpassade headern har jag istället en logga-bild på var sida samt att länkarna är under titeln som är placerad med hjälp av positioning, precis som mycket annat i detta projekt.


Tankar och reflektion

Jag blev supernöjd med hur headern blev. Den är simpel, men inte fyrkantig eller tråkig. Den är tydlig och enkel att förstå. Den är helt responsiv och funkar lika bra på alla de olika sidor.

Spelet

Innan jag började skriva Javascript koden för spelet arbetade jag analogt med papper och penna. Att få det klart för mig själv vad jag vill att min kod ska göra gör det mycket enklare att faktiskt skriva den i Visual Studio Code. Att lista ut ett sätt att spara användarens val var enkelt, det kunde lösas med en knapp. Tre knappar för användaren att välja där var och en representerade sten, sax och påse. Att lista ut hur datorn skulle kunna göra sitt val var inte heller så komplicerat. Datorn har samma antal val som spelaren, men inga knappar. Genom att använda sig av den inbyggda funktionen “Math.random” och specificera att endast siffror mellan 1 och tre skulle användas kunde jag simulera dators val. Det allra viktigaste var att inte glömma att också använda sig av den inbyggda funktionen “Math.floor” för att avrunda den valda siffran nedåt till närmaste hela siffra. Nu hade vi valen fastställda, och det var bara dags att jämföra valen spelare och dator gjort för att komma fram till vad resultatet av spelet blir. Här hade jag valet mellan “if” statements eller “switch” cases. Då jag är mer bekväm/van vid “if” statements valde jag att gå den rutten. Nu var den grundläggande logiken fastställd och det var dags att börja skriva programmet i JS.

Jag börjar med att få in alla HTML variabler jag behöver för att kunna manipulera dom i JS filen. Allt innehåll ska stoppas in en funktion som heter Game för att jag sedan ska kunna köra spelet genom att kalla på funktionen genom en onclick funktion.


Här har vi den väldigt simpla funktionen som bestämmer dators val med hjälp av inbyggda JS funktioner. Vi konverterar sedan valet till string för att tydligare kunna jämföra dators val mot spelarens. Här kunde som sagt switch cases också använts men jag tyckte inte det fanns några större fördelar med det jämfört med de klassiska if statements.



När vi har båda valen kan vi enkelt jämföra dessa för att utse om det finns en vinnare och en förlorare. Det blir även extra tydligt vad resultatet blir pga omvandlingen av valen från siffror till en beskrivande text.


Nu var logiken helt fastställd och redo att stylas. Vid detta stadiet började jag sketcha för hand och kom fram till ungefär hur jag ville att både startskärmen och spelet skulle se ut.

Här började jag kolla på animationer och hur jag kunde bygga mina egna. Att bygga enklare animationer var inte svårt, men det var väldigt kul att leka med. Det var dock viktigt att känna till mina egna begränsningar (både tid och kunskap) och att inte vara överambitiös med vad jag kunde få ihop. Jag kom fram till att jag definitivt ville ha en typ av loading animation. Jag tog lite inspiration från äldre tv spel och kom fram till den flimrande “loading…” texten. Detta var enkelt att återskapa genom att manipulera opaciteten ett antal gånger i animationen. Jag ville också att “Get ready…” Skulle tona ut när spelet hade “laddats” vilket jag också löste genom att ändra opaciteten. Det viktigaste i alla mina animationer (förekömmer mer senare) är just “animation-fill-mode”. Genom att sätta “forward” som värde kunde jag låta elementet vara kvar i sista steget av animationen som egentligen är nyckeln till hela spelet (Tillsammans med display)..

Det tog mig en god stund att hitta rätt lösning för hur jag skulle animera spelarens/datorns val och resultat. Det finns tyvärr ingen inbyggd funktion för att CSS animationer ska kunna repetera, vilket var ett enormt problem i detta projekt. Jag kunde inte hitta ett sätt för att pålitligt visa animationerna VARJE gång spelaren valde sten, sax, eller påse. På grund av brist på tid (jag ville lägga mer fokus på resten av sidorna) valde jag istället en enklare lösning. Genom att lägga till en restart-knapp med onclick funktion som laddar om hela sidan kunde jag återställa alla animationer så att de än en gång kunde visas efter spelaren gjort sitt val. Jag insåg senare att alla animationer fortfarande inte visas varje gång, och det beror nog på att jag använt för många onclick events istället för Eventlisteners. Detta ångrar jag djupt när jag ser tillbaka på de färdiga projektet, men tidsbristen gör tyvärr att jag ej hinner åtgärda dessa buggar innan sista inlämningsdatum. Om jag hade haft tiden vet jag att jag hade kunnat bygga en mycket mer pålitlig metod för att visa animationerna.

Själva ikonerna (sten, sax, påse, roboten och vs symbolen) finns alltid på plats inuti spel-containern. Här använde jag mig av min absolut favorit property i hela projektet: “display:none”. Alla ikoner har från början en display på none vilket gör dem osynliga. För att sedan visa dom använder jag mig av en Javascript funktion som ändrar displayen från “none” till “block” (detta kan man se på sida 5 av detta dokument, t ex funktionen “showRock()”). På detta vis kan jag visa den animationen som motsvarar valen gjorda och resultatet. Alla ikoner är animerade med simpla “keyframe” funktioner. Dessa animationer kommer inte börja innan displayen är block, vilket betyder att körs exakt när jag väljer att verkställa dem.. 

Vid detta stadiet bestämde jag mig även för att rita en “robot” i Microsoft Paint som ska föreställa datorns karaktär. Denna robot skulle reagera på resultatet som visas i bilden ovan. Roboten visas precis som de andra ikoner, via en animation. Här la jag även till ljud som spelas när ett resultat har nåtts. Ett specifikt ljud för vinst, förlust och oavgjort. Detta görs enkelt genom att importera ljudet i HTML filen och sedan omvandla det till en JS variabel som kan spelas på kommando genom en enkelt funktion.

Jag tycker att spelets design är simpelt, men stilrent. Det passar in med resten av sidans stil och är lätt att se, förstå, och spela.

Spelet var byggt med WCAG och tillgänglighet i åtanke. Därför bestämde jag mig för att lägga till en varning på spelets startskärm där det rekommenderas att man skruvar ner/stänger av ljudet på sin enhet då det förekommer ljud i spelet. Det finns flera olika typer av människor som kan skrämmas av dessa plötsliga ljud och liknande. Alla bilder som används har såklart en alternativ beskrivande text som istället visas om bilden ej kan laddas, eller om användaren lider av synnedsättning eller är blind. Dessa personer använder sig av ett program som istället läser upp texten vilken är varför det är viktigt att ha en välbeskrivande text.  Tillgängligheten för alla speglas även i simplicitet av spelet, det är väldigt enkelt att förstå och är ej krävande av användaren. Spelaren behöver endast trycka på en enda knapp för att spelet ska sättas igång, en knapp till för att spelet ska få sina resultat, och en knapp till om de vill starta om och spela igen. Spelet kan spelas på de flesta skärmstorlekar då sidan är helt responsiv. Tyvärr kan spelet ej spelas på mobil då spel-containern blev alldeles för liten för att vara användbar.

Anledningen för att jag inte la mer tid på att göra spelet mer spännande är just för att jag ville göra en mer informativ sida som handlar om mer än att spela själv spelet.

Tankar och reflektion

Jag är väldigt nöjd med spelet, men det fanns mycket som kunde förbättras. Att hitta ett mer pålitligt sätt att visa animationerna efter varje tur är den största punkten. Om jag hade kunnat åstadkomma detta i den angivna tidsramen hade jag kunnat ha flera spel i följd utan att användaren behövt ladda om sidan. Detta öppnar även upp möjligheten för att spara användarens poäng och animera dessa.

Jag är heller inte nöjd med att jag inte gjort ett mobilanpassat spel. Jag tror inte det hade varit komplicerat alls, samma logik hade använts. Alla animationer hade dock behövts göras om och tiden fanns tyvärr inte för det.



Startsidan

Efter jag gjort min väldigt basic lofi sketch var det dags att hitta mina typsnitt och färger. Jag började dock med att få in alla element jag ville på sidan med svarta borders, exakt som det ser ut på sketchen. På detta vis var det lättare för mig att se vad jag fick plats med för att säkerställa att sidan ej upplevdes som för trång. Jag la nog lite för många timmar på att hitta de exakta typsnitt jag ville använda men blev väldigt nöjd i slutändan. Jag pendlade även mellan indian-red och darkslategrey för bakgrundsfärgen i 45 minuter i sträck men lyckades till slut göra det tuffa beslutet…

I info delen ville jag ha en text som berättade om innehållet på min webbsida och även syftet. I den beskrivande texten lägger jag även till länkar till de andra sidorna så användaren får en extra chans att inte missa resten av innehållet. Detta gör det både lättare för alla människor att hitta det de är ute efter och ökar också tiden användaren stannar kvar på sidan vilket är SEO-positivt. Samma länkar är naturligtvis tillgängliga i navigeringsfältet.

När jag gjorde den här sketchen hade jag tänkt att ha ett klassiskt sidofält. När jag väl började bygga det insåg jag snabbt att det blev för trångt med en fyrkantig färgad sektion. Jag bestämde mig istället för att ha nästan “svävande” ikoner som en efter en visas med en “fade-in” animation. Detta såg både mindre klumpigt ut och symboliserade spelets gång då sten kom först, sen påse, sen sax.  
Jag ville att hela sidan skulle nästan glida in på skärmen i ett smidigt svep. Jag blev väldigt nöjd med animationen jag skapat för att klara av detta. Jag blev så pass nöjd att jag bestämde mig för att använda samma animation på alla de olika sidorna, vilket också är positivt för kontinuiteten.


Tankar och reflektion

Jag blev oerhört nöjd med slutresultatet av första sidan. Jag tycker den är stilren, enkel att navigera och inte för trång. Sidan är helt responsiv och innehållet ändras när skärmen minskas. Det är dock ett par element som inte blev helt centrerade vid vissa skärmstorlekar och det är någonting jag hade fixat om jag gjort om projektet. Sidan har även en liten informationstext i botten som berättar att man ej kan spela spelet på sin mobil och hänvisar istället till att man besöker webbsidan via en större skärm. Detta anser jag var lite av en lat lösning då jag egentligen ville göra ett helt nytt mobilanpassat spel, men tiden fanns bara inte som sagt.



Regler och strategi



Här hade jag en klar tanke från start som visas i den ursprungliga sketchen. Jag ville på något sätt få denna information att efterlikna sidor ur en regelbok. Här var jag dock tvungen att inse mina egna begränsningar och bestämma mig om jag vill lägga en hel dag (eller mer) på att bygga en pålitlig animation som föreställer en bok som man som användare kan vända blad i, eller gå den enklare rutten för att kunna lägga mer tid på annat. Just denna gång bestämde jag mig för att gå den enkla rutten för att lägga ännu mer tid på att kunna expandera webbsidan och lägga fokusen på helhetsbilden. 

För att kompensera för de tråkiga info-boxarna ville jag lägga till ett par roliga bilder eller GIFs. Jag bestämde mig för en av var. Jag tyckte att det hade varit kul med en “live-action” del för att visuellt förklara spelets gång. 

Reglerna är skrivna på så sätt att de är enkla att första, mycket utrymme mellan raderna samt stort typsnitt. Detta är gjort med tillgänglighet i åtanke. Spelet ska kunna förklaras så att så många som möjligt förstår. Strategidelens text är lite luddigare, men inte alldeles för svår.



Tankar och reflektion

Vid detta stadiet i projektet hade jag en fastställd stil och befintliga css ramar jag kunde tillämpa på de olika element och containers. På grund av detta byggde jag denna sida väldigt snabbt utan några större problem. Jag la som sagt till samma animation som på startsidan (sidan glider in) men tyckte det räckte där. Då jag redan hade en GIF som körde oavbrutet tyckte jag detta hade blivit för mycket av en distraktion att ha flera animationer än så.


Trivia

Designsketchen för trivia sidan höll jag väldigt simpel. Jag visste att jag ville lyfta två eller tre diverse fakta om just RPS historia, men inte hur jag skulle visa upp denna fakta på sidan. Jag tänkte mig någon form av animation för att visa de olika fakt-containers en efter en, och precis så blev det. Genom att använda mig av “display:none” och en funktion som då ändrar display värdet, och samma keyframe animation (fade-in) kunde jag manipulera text-boxarna till precis det jag ville. Denna delen av webbsidan tog väldigt lite tid att slutföra då jag redan hade alla css stilar jag behövde från de förra sidorna. 

Nästa steg var att lägga till en Iframe med en relevant Youtube video. Jag tänkte att detta var en fantastiskt idé för att kunna hålla kvar besökare av sidan även längre (Därför valde jag en 12 minuters video), detta var då med SEO i åtanke. 

Sidan blev responsiv precis som de andra sidorna med innehåll som ändras beroende på skärmstorlek. Vid detta stadiet hade jag listat ut ett sätt för att kunna göra sidorna responsiva vilket jag tyckte var hyfsat effektivt. Genom att använda mig av “@media” taggen kan jag styra ett antal ändringar. Då jag byggt alla sidor med div klasser och andra sektions-taggar kunde jag enkelt ange max och min width till de olika klasser/sektioner. Jag kunde sedan genom min favorit “display” gömma och visa andra element beroende på skärmstorlek. Alla element ligger alltid framme på sidan, det var bara en fråga om när vad skulle visas.

Simpliciteten är också ett målmedvetet beslut för denna och regler/strategi sidan. WCAG är tydliga med att samtliga webbsidor ska vara förutsägbara och utan överraskningar vilket jag tycker jag lyckats med hyfsat bra. Iframen har såklart en alternativ text för att beskriva innehållet, precis som alla bilder på mina sidor. Även texten här har stort typsnitt med lämpligt mellanrum mellan ord och rader. Texten är också hyfsat lättläst så att så många som möjligt kan ta del av informationen.


Tankar och reflektion

Precis som på de andra sidorna tyckte jag att mina responsiva lösning blev OKEJ. Innehållet ändras inte lika smidigt som jag hade velat att de hade gjort, och om jag gjort om eller haft mer tid för projektet hade jag använt en annan lösning som t ex en helt gridanpassad sida(or).

När jag tänker tillbaka på Iframen hade jag även velat styla den (genom att rita i canvas eller CSS animationer) för att efterlikna en tv-skärm. Faktan jag hittade om RPS tyckte jag dock var hyfast intressant, så är i helhet nöjd med hur sidan blev.

Feedback

En feedback sida var ett moment jag kände var väldigt nödvändigt för mig som nybörjare inom programmering. Om den här sidan nu hade varit live hade det uppskattats enormt att kunna få både positiv och negativ kritik på hur jag kan förbättra webbsidan. Sketchen blev oerhört simpel då jag inte var säker hur mycket jag skulle hinna med när jag ritade den i början av projektprocessen. 

När jag väl började skriva koden för feedback sidan visste jag att jag ville ha input från användaren:

För- och efternamn.
Mejladress(För att kunna svara personen).
Typen av feedback (Så att man lättare kan sortera kommentarerna).
Feedbacken.

Jag satte ihop sidan med en enkel HTML form. Namnet och mejladressen kunde jag använda mig av en text input, sedan en selekt input för en liten dropdown av val för typen av feedback. Sist använde jag mig av en textarea för att skapa tillräckligt med utrymme för att användaren ska kunna skriva sin kommentar. 

Jag ville ha en submit-knapp också, men jag ville att den skulle leda någonstans. Tanken slog mig att använda mig av en hidden div-container med texten “Thank you! Your feedback has been submitted.” som visas när användaren trycker på submit-knappen. Det kändes dock onödigt att implementera mer JS kod, det var enklare att istället dirigera om till ännu en ny sida (som är en replika av feedback sidan) som istället visar texten jag nämnt ovan, detta sättet gjorde också att det blev mindre utrymme för fel.


Tankar och reflektion

Det är inte så mycket att säga om denna sidan, den blev exakt hur jag tänkt mig. Det var inte mycket kreativitet som använts för att skapa denna sista sida, tidsbegränsningen kom ikapp mig.


Footer

Jag ritade inte en sketch för footern eftersom jag visste från allra början att den skulle bli så basic som den blev. Jag använde mig av många animationer genom hela projektet (som planerat) och insåg tidigt i planläggningen att det hade blivit för luddigt med en avancerad footer. Jag inkludera det absolut mest grundläggande: länkar till feedback sidan och min personliga Linkedin, och även min mejladress för direktkontakt. Jag funderade även på att ha länkar till alla de olika sidorna på webbsidan till höger om mina kontaktlänkar, men kände av att de redan visades upp tydligt i headern och även i infon på startsidan.

Det finns inga tankar eller reflektioner för denna del.



Städa kod och fixa buggar

Efter alla dessa moment var avklarade var det dags att finslipa alla kod jag skrivit. Att fixa indenteringar, sammanställa olika CSS element i samma deklarationer (ta bort onödigt repeterande rader kod), försök till att använda mig av polymorphism i JS filen och se till att syntaxen var korrekt i alla dokument var de större delar av den städningen jag utförde. Jag fixade även ett par småbuggar när det kommer till animationer som ej visades vid korrekt tidpunkt eller hade felaktig iteration-count.

Alla olika “show” funktioner i JS filen (showrock, showpaper etc…) borde istället varit en gemensam funktion som använder sig av polymorphism. Detta blev tyvärr en eftertanke som förekom några få timmar innan projektet skulle lämnas in, men det är väl tanken som räknas?


Sluttankar och reflektion

Jag hade väldigt kul med att bygga dessa sidor. Webbutveckling är någonting jag brinner för och att bygga en fullständig sida med interaktionsdesign i åtanke har tillåtit mig att vara kreativ i både CSS och Javascript och skärpt mina HTML kunskaper. Att konstant ha tillgänglighet och respons-design i bakhuvudet har gett mig ett nytt perspektiv som jag kommer ta med mig i alla framtida projekt.

Jag är nöjd med hur min webbsida blev, men är medveten om alla förbättringsmöjligheter, vilket också är någonting jag kommer ta med mig från detta arbete. Det finns mycket jag hade gjort annorlunda men också mycket jag tyckte att jag gjorde rätt. Med det sagt tycker jag att jag nådde mina ursprungliga mål vilket gör detta projekt en succe i mina ögon.


