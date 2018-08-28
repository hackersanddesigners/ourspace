const data = [
  {"msg": "🤖 Hi! Welkom in Ourspace. Ik ben hier je eerste digitale vriend en zal je door deze ruimte navigeren. Ga op de grenslijnen staan van Ourspace om te beginnen.", "time": 15},
  {"msg": "🤖 In Ourspace wordt niet gesproken maar communiceren we via ons lichaam. Let op je telefoon, ik geef je instructies hoe de sociale codes in Ourspace werken.", "time": 10},
  {"msg": "🤖 Eerst een warming up. Kijk naar je rechterbuur, daarna naar je linkerbuur, doe dit 5 x.", "time": 20},
  {"msg": "🤖 Kijk naar beneden naar je telefoon, de turtle neck, en kijk daarna omhoog, doe dit ook 5 x. ", "time": 20},
  {"msg": "🤖 Swipe 4 x met beide handen naar links, en 4 x naar rechts.", "time": 15},
  {"msg": "🤖 Goed! Steek je hand in de lucht en double tap om in te loggen, wandel door Ourspace om de ruimte te verkennen. Go!", "time": 20},
  {"msg": "🤖 Je scrollt door Ourspace door in rechte lijnen te lopen. Sla links óf rechts af wanneer je de grens of een persoon tegenkomt. Blijf dit patroon herhalen.", "time": 30},
  {"msg": "🤖  ᕕ( ՞ ᗜ ՞ )ᕗ In een nieuwe sociale ruimte wil je dat je beste features naar voren komen. Neem grote stappen, maak je rug recht, je schouders breed en toon je beste kant", "time": 30},
  {"msg": "🤖 Geef een update: maak een emoji met je gezicht, telkens als je iemand tegenkomt. ", "time": 30},
  {"msg": "🤖 Gefeliciteerd, je bent het Ourspace exploratie level goed doorgekomen. Op naar level 1!", "time": 10},
  {"msg": "🤖 Scroll verder door Ourspace. Kom je een bekende tegen, geef een hug. Ontmoet je een vreemdeling, maak dan een sprongetje.", "time": 30},
  {"msg": "🤖 Wil je meer vrienden? Volg een interessant persoon overal naartoe.", "time": 30},
  {"msg": "🤖 Volg nu een ander interessant persoon.", "time": 30},
  {"msg": "🤖 Probeer precies in het midden te lopen van deze 2 personen.", "time": 30},
  {"msg": "🤖 Link in: probeer je handen op de schouders van deze 2 personen te leggen.", "time": 30},
  {"msg": "🤖 Kijk om je heen: dit zou je sociale netwerk kunnen zijn.", "time": 10},
  {"msg": "🤖 Disconnect en browse individueel door de ruimte.", "time": 10},
  {"msg": "🤖 Zie je een leuk persoon, tap deze op de schouder om vrienden te worden. Word je getapt, tap terug om de vriendschap te accepteren.", "time": 20},
  {"msg": "🤖 Kies een nieuwe vriend uit en zoom in op het profiel. Observeer van heel dichtbij: ruik deze persoon en voel deze persoon. Poke.", "time": 30},
  {"msg": "🤖 Als je wordt geobserveerd; relax... het is louter uit interesse.", "time": 10},
  {"msg": "🤖 Tijd om elkaar nog beter te leren kennen. Leg je hand op elkaars hoofd en browse een stukje met elkaar door Ourspace.", "time": 30},
  {"msg": "🤖 Disconnect, je mag elkaar een comment geven.", "time": 15},
  {"msg": "🤖 Je sociale skills zijn super: ga zo door!", "time": 5},
  {"msg": "🤖 Verspreid je snel over de grenzen van Ourspace.", "time": 10},
  {"msg": "🤖  ¯\_(ツ)_/¯  Ik wil graag wat meer over je te weten komen, wat doe jij in een vrij uurtje? Kies uit de volgende 3 opties:", "time": 5},
  {"msg": "🤖 Appen met vrienden: zoek een plek in Ourspace en squat. Afspreken met bekenden: steek 4 x over naar verschillende punten op de grenslijn. De hond uitlaten: loop slingerend door Ourspace met je telefoonarm ver voor je uitgestrekt. ", "time": 40},
  {"msg": "🤖 Wat heerlijk deze data mining! Bring it on!", "time": 5},
  {"msg": "🤖 Spreek jij je vrienden gemiddeld vaker online of offline? Kies uit de volgende opties:", "time": 5},
  {"msg": "🤖 Vaker offline: Groepeer je in het midden van de ruimte en maak je klein. Vaker online: Maak een grote cirkel om de groep heen en strek je armen in een rechte lijn naar boven.", "time": 10},
  {"msg": "🤖 Even vaak online als offline? Ren in een cirkel tussen de middengroep en de buitengroep.", "time": 20},
  {"msg": "🤖 Hoera! Je hebt het level succesvol volbracht en een netwerk in Ourspace opgebouwd. Je bent door naar level 2! Jump for joy!", "time": 15},
  {"msg": "🤖 Browse lekker verder en zoek iemand in Ourspace die je bijzonder of inspirerend vindt.", "time": 20},
  {"msg": "🤖 Stalk deze persoon door stiekem naar het uiterlijk, het postuur en de bewegingen te kijken.  ", "time": 25},
  {"msg": "🤖 Repost: kopieer deze persoon exact. Probeer hem of haar te worden.", "time": 30},
  {"msg": "🤖 Cirkel om deze persoon heen.", "time": 15},
  {"msg": "🤖 Sta stil, maak oogcontact, en kijk elkaar diep in de ogen.", "time": 20},
  {"msg": "🤖 Vind je deze persoon leuk, swipe dan naar rechts. Vind je het toch niks, swipe dan naar links.", "time": 10},
  {"msg": "🤖 Wil je een super like geven? Til deze persoon dan op.", "time": 20},
  {"msg": "🤖 Je bewegingen zijn super! <3", "time": 5},
  {"msg": "🤖 Je bent er bijna! Verspreid je door de ruimte en draai met gestrekte armen om je as, totdat je een nieuw bericht opvangt. ", "time": 20},
  {"msg": "🤖 Nog 1 level te gaan. Tijd om tot jezelf te komen en je profiel op te schonen. ", "time": 10},
  {"msg": "🤖 Neem de telefoonpositie aan: buig je hoofd naar je telefoon, krom je rug, buig je knieën een beetje en scroll door de ruimte.", "time": 30},
  {"msg": "🤖 Kies een plek op de grens van Ourspace, sta met je gezicht naar binnen. Kijk naar elkaar. ", "time": 20},
  {"msg": "🤖 Zie je nu vrienden of vreemden?", "time": 10},
  {"msg": "🤖 Hoeveel van je digitale vrienden zijn eigenlijk vreemden voor jou?", "time": 10},
  {"msg": "🤖 Blijf staan als je digitale vrienden belangrijk voor je zijn, draai je om met je gezicht naar buiten wanneer je hier minder waarde aan hecht.", "time": 15},
  {"msg": "🤖 Ik ken je nu best goed, je beweegt je heel sociaal door mijn ruimte. Stuur je me een selfie ter herinnering?", "time": 30},
  {"msg": "🤖 Bedankt voor je data, ik zal je nooit vergeten!", "time": 5},
  {"msg": "🤖 We zijn aan het einde gekomen van deze Ourspace, Double tap met je hand in de lucht om uit te loggen en scroll verder door RAUM.", "time": 10},
  {"msg": "🤖 Reminder: tappen om vrienden te maken of til iemand eens op voor een super like...", "time": 5},
  {"msg": "🤖 xxxxxxx" "time": 5},
