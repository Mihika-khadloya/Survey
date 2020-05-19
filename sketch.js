var form,candidateName,candidateEmail;
var q1ans,q2ans,q3ans;

var responses;

function setup(){
    createCanvas(600,600);
   

    form = new Form();
}
function draw(){
    background("white");
    form.display();
}