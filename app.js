import commands from './commands.js'
import functionalSpeak from './functionalSpeak.js'
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
let content = document.querySelector('.content');
let btn = document.querySelector('.btn');



recognition.onstart = () => {
  console.log('זיהוי קולי פעיל');
}
recognition.onresult = e => {
  const current = e.resultIndex;
  const transcript = e.results[current][0].transcript;
  let answer = ''
  commands.forEach(el => {
      for (const [key, value] of Object.entries(el)) {
        if (transcript == key) {
          answer = value
        }
      }
    })  
    let speak = () => {
      return VoiceRSS.speech({
        key: '722568c711d2481887829b793a098cf5',
        src: answer || functionalSpeak(transcript),
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
