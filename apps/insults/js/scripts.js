'use strict';

var insultsCollection = [
   {
      name: 'Driggle-Draggle!',
      definition: 'An untidy woman'
   },
   {
      name: 'Pillock!',
      definition: 'A stupid person'
   },
   {
      name: 'Fopdoodle!',
      definition: 'An insignificant or foolish man'
   },
  {
      name: 'Gobermouch!',
      definition: 'Someone who likes to interfere in other people’s business'
   },
  {
      name: 'Klazomaniac!',
      definition: 'Someone who only seems able to speak by shouting'
   },
  {
      name: 'Loiter-Sack!',
      definition: 'An idling, lazy good-for-nothing'
   },
  {
      name: 'Lubberwort!',
      definition: 'A nickname for a lethargic, fuzzy-minded person'
   },
  {
      name: 'Raggabrash!',
      definition: 'A disorganized or grubby person'
   },
  {
      name: 'Saddle-Goose!',
      definition: 'Saddling geese is a proverbially pointless exercise, so anyone who wastes their time doing it—namely, a saddle-goose—must be an imbecile'
   },
  {
      name: 'Snoutband!',
      definition: 'Someone who constantly interrupts a conversation, typically only to contradict or correct someone else'
   },
];

var definition = document.getElementById('definition');
var define = document.getElementById('define');
var insult = document.getElementById('insult');

function displayInsult(){
  var rand = insultsCollection[Math.floor(Math.random() * insultsCollection.length)];
  define.style.display = "inline";
  definition.style.display = "none";
  insult.innerHTML=rand.name;
  definition.innerHTML=rand.definition;
}

function defineInsult(){
  definition.style.display = "inline";
}

function removeInsult(){
  insult.innerHTML='';
  definition.innerHTML='';
  define.style.display = "none";
}
