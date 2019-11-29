// function changeBackground(color) {
//     document.body.style.background = color;
//  }

//  window.addEventListener("load",function() { changeBackground('black') });

// $(function() {
//     var colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];

//     setInterval(function() {
//         var bodybgarrayno = Math.floor(Math.random() * colors.length);
//         var selectedcolor = colors[bodybgarrayno];
//         $("body").css("background",selectedcolor);
//     }, 3000);
// })


function submit_grade() {
    var n1 = document.getElementById("n1").value;
    var answer = ((n1*0.4-5)/0.6)*-1;
    document.getElementById('answer').innerHTML = "Você precisa de no mínimo " + answer.toFixed(2) + " para obter a média necessária para passar.";
}
