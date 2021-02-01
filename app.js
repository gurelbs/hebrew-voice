let askMore = `שאל אותי עוד משהו!`

let time = `השעה עכשיו ${new Date().getHours()} ו${new Date().getMinutes()} דקות.     `;
let creator = `,קוראים לך גוּראֶל, אתה היוצר שלי, עשיתה אותי בשפת התוכנה ג'אוה Script`
let tryAgain = `תנסה שוב בבקשה.`
let moon = `המרחק לירח הוא 63 מיליון קילומטר`
let yourName = `השם שלי, הוא יוחאי. אני עוזר דיגיטלי בעברית.`

let googleSearch = (e) => window.open(`https://www.google.com/search?q=${e}`) 
let youtube = (e) => window.open(`https://www.youtube.com/results?search_query=${e}`)
let arr = [];

let wordSearch = someWord => {
  someWord = someWord.split(' ')
  arr.push(someWord)    
  someWord = arr[0].slice(2).join(' ')
   return someWord
}
let content = document.querySelector('.content');
let btn = document.querySelector('.btn');

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
function reloadPage(){
  document.location.reload();
}
recognition.onstart = () => console.log('זיהוי קולי פעיל');

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
           transcript.includes('חפש בגוגל') !== false ? googleSearch(wordSearch(transcript)) && location.reload():
           transcript.includes('חפש ביוטיוב') !== false ? youtube(wordSearch(transcript)) && location.reload()
           : `לא הבנתי מה אתה רוצה ממני, כשאתה אומר ${transcript}. ,` + tryAgain,
      hl: 'he-il',
      r:0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    })
  }
  content.textContent = transcript
  console.log(transcript);
  speak()
  
}

btn.addEventListener('click',() => recognition.start())