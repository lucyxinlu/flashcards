class question{
constructor(question,answer){
this.question=question;
this.answer=answer;}
}
let myFlashcards=[];
myFlashcards.push(new question('What is the capital of China?','Beijing'));
myFlashcards.push(new question('Who is the president of USA?','Biden'));
myFlashcards.push(new question('What is the name of your university?','CMU'));
let i=0;
while (i<myFlashcards.length){
alert(myFlashcards[i].question);
  ++i;
}
let answer=new Array();
answer.push("Beijing","Biden","CMU");

function buttonClicked(event){
 document.getElementById("demo").innerHTML=answer;}
