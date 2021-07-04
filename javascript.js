var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;


//if we click on the start/reset
document.getElementById("start").onclick =function(){
    //if we are playing
    
     if(playing==true){
         //reload the page
        
        location.reload(); //reload page
        
    }
    else{ 
        //if we are not playing
            playing=true;
        //set score to 0
            score=0;
              document.getElementById("scorevalue").innerHTML=score;
        //show countdown box
           show("timeremaining");
            timeremaining=60;
        
        //to hide the score div
        hide("gameOver");
            
            document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
        //change text to reset
            document.getElementById("start").innerHTML="Reset Game"
        
        //start countdown
        startCountdown();
    
        //genetare new Q&A
        generateQA();
    
    }
}

// Clicking on an answer box
for(i=1; i<5; i++){
    
    document.getElementById("c"+i).onclick =function(){
    //check if we are playing
    if(playing==true){//yes
        
        if(this.innerHTML==correctAnswer){
            //correct answer
            
            //increase score by one
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            
            //hide wrong box and show correct box
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //Generate new question
            generateQA();
            
        }else{
            //wrong answer
             hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
            
        }
        
    }
}
}

        
        

// if we click on answer box
    //if we are playing
        //correct??
            //yes
                //increase score by 1
                //show correct box for 1 sec
                //generate new question
            //No 
                //show the try again box for 1sec





// Functions

    //1.Start counter
 function startCountdown(){
      action=setInterval(function(){
          timeremaining -= 1;           document.getElementById("timeremainingvalue").innerHTML=timeremaining;
            
          if(timeremaining == 0){
              //game over
               Stopcountdown();
               
            show("gameOver");
              
             document.getElementById("gameOver").innerHTML="<p>game over!</p><p>your score is " +score+".</p>";
              
             hide("timeremaining");
             hide("correct");
             hide("wrong");
             playing=false; 
             document.getElementById("start").innerHTML= "Start Game";
            }          
      },1000);
 }

    //2.Stop counter
function Stopcountdown(){
     clearInterval(action);
}
    
    //3.To hide something
function hide(Id){    document.getElementById(Id).style.display="none";
}
    //4.To show something
function show(Id){    document.getElementById(Id).style.display="block ";
}

    //5.Generate question and multiple answers
function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    correctAnswer = x*y;
    
 document.getElementById("question").innerHTML= x+ "x" +y;
    
    var correctPosition = 1+Math.round(3*Math.random());
    
 document.getElementById("c"+correctPosition)   .innerHTML=correctAnswer;  //fill one box with correct answer box
    
    //Fill other box with wrong answers
        var answers = [correctAnswer];
        
    for(i=1; i<5; i++){
        if( i != correctPosition){
             var wrongAnswer ;
            
            do{
                 wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));

             }while(answers.indexOf(wrongAnswer)>-1);
            document.getElementById("c"+i).innerHTML=wrongAnswer;
                    answers.push(wrongAnswer);
        }
    }
    
}