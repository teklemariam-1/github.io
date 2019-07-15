
// window.onload= function() {
// document.getElementById("textArea").value = JUGGLER;

// }


// window.onload= function() {
//     document.getElementById("textArea").value = BIKE;

//     }



// window.onload= function() {
//     document.getElementById("textArea").value = DIVE;

//     }

alert("hi")
window.onload = function exercise() {
    index = 0;
    var string = EXERCISE;

    var splits = string.split('=====');
    var size = splits.length;

    function animation() {

        if (index > size - 1) {
            index = 0;
        }

        function timer() {
            document.getElementById("textArea").value = splits[index];
        }

        timer();
        index++;
        alert(index);
    }
   // timer();
    // setInterval("animation()",1000) 

    // alert(splits[0]);
    //animation();
}
function timerCheck() {
    alert("timer check");
}
setInterval("animation()", 4000);

            // window.onload= function() {
            //     document.getElementById("textArea").value = CUSTOM;

            //     }





