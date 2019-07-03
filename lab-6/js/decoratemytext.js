// text decorator
function decorator(){
    //alert("text style will changed");
    var textInput = document.getElementById("textArea");
    var box = document.getElementById("checkBox");
    //alert((box.checked==true));
   
    if(box.checked) {
   
    textInput.style.fontWeight = "bold"; 
    textInput.style.color="green";
    textInput.style.textDecoration="underline";
    document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')"; 
    }
    else{
        textInput.style.fontSize = "10px"; 
        textInput.style.fontWeight = "normal";
        document.body.style.backgroundImage = "url('')"; 
    }

}


    // timer on button click
   var timerStarted = false;
  var timerIntervalId = 0;
    function timer(){

      //  alert("timer will start");
      if(timerStarted==false) {
          timerStarted=true;
       timerIntervalId= setInterval("textSize()",2000);

      }
      else {
          timerStarted=false;
          clearInterval(timerIntervalId);

      }

    }

function textSize(){

   // alert("text size will changed");
    var textInput = document.getElementById("textArea");
    var oldTextSize = window.getComputedStyle(textInput, null).getPropertyValue("font-size");
    
    size= parseFloat(oldTextSize);
    textInput.style.fontSize = (size + 2) + 'px'; 
    
}