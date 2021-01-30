let askMore = `שאל אותי עוד משהו!`

// let txt = ()=> {
//   let val = document.getElementById('textareaValue').value
//   return val
// }

let time = `השעה עכשיו ${new Date().getHours()} ו${new Date().getMinutes()} דקות.     `;
let creator = `קוראים לך גוראל. אתה היוצר שלי!`
let tryAgain = `לא הבנתי מה אתה אומר. תנסה שוב בבקשה.`
let moon = `המרחק לירח הוא 63 מיליון קילומטר`
let yourName = `השם שלי הוא רמי. אני עוזר דיגיטלי בעברית.`
let googleSearch = (e) => window.open(`https://www.google.com/search?q=${e}`) 
let youtube = (e) => window.open(`https://www.youtube.com/results?search_query=${e}`) 
let content = document.querySelector('.content');
let btn = document.querySelector('.btn');

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onstart = () => console.log('active');

recognition.onresult = e => {
  const current = e.resultIndex;
  const transcript = e.results[current][0].transcript;

  let speak = () => {
    return VoiceRSS.speech({
      key: '722568c711d2481887829b793a098cf5',
      src: transcript === 'מה השעה' ? time : 
           transcript == 'איך קוראים לי' ? creator : 
           transcript == 'מה המרחק לירח' ? moon : 
           transcript == 'מה השם שלך' ? yourName : 
          googleSearch(transcript) && transcript == 'none',
           
      hl: 'he-il',
      r:0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    })
  }
  speak()
  content.textContent = transcript
  
}

btn.addEventListener('click',() => recognition.start())