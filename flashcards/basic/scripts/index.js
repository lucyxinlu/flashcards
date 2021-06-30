class question{
constructor(question,answer){
this.question=question;
this.answer=answer;
this.correct=false;}
}
let myFlashcards=[];
myFlashcards.push(new question('What is the capital of China?','Beijing'));
myFlashcards.push(new question('Who is the president of USA?','Biden'));
myFlashcards.push(new question('What is the name your university?','CMU'));
let i=0;
while (i<myFlashcards.length){
console.log(myFlashcards[i].question);
  ++i;
}

