function changeEmoji() {
  let emojiRandon = Math.floor(Math.random()*3);
  document.title = listaEmojies[emojiRandon] + ' Severo';
}

let listaEmojies = ['๐', '๐', '๐' ];
// window.addEventListener("load", muda);

// executa a funรงรฃo a cada 0,1s
var time = setInterval(changeEmoji,100);

// let tempo = setInterval(muda,1000);
//https://www.youtube.com/watch?v=9nt9HRdPSpo