// function changeImage() {
//   if (document.getElementById("imgClickAndChange").src == "./img/sticker-ordinateur-logo-information-ambiance-sticker-KC10255.png"){
//       document.getElementById("imgClickAndChange").src = "./img/logo2.png";
//   } else {
//       document.getElementById("imgClickAndChange").src = "./img/sticker-ordinateur-logo-information-ambiance-sticker-KC10255.png";
//   }
// }



function changeImage() {

  let disPlay = document.getElementById("imgClickAndChange");

  if (disPlay.src.match("./img/sticker-ordinateur-logo-information-ambiance-sticker-KC10255.png")){

    disPlay.src="./img/logo2.png"

  } else {

    disPlay.src="./img/sticker-ordinateur-logo-information-ambiance-sticker-KC10255.png"

  }
};

let seeIt=document.getElementById('display');