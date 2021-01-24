let askMore = `שאל אותי עוד משהו!`
let txt = ()=> {
  let val = document.getElementById('textareaValue').value
  return val
}
let time = `השעה עכשיו ${new Date().getHours()} ו${new Date().getMinutes()} דקות.     `
let speak = () => {
  return VoiceRSS.speech({
    key: '722568c711d2481887829b793a098cf5',
    src: txt().length == 0 ? time + askMore : txt(),
    hl: 'he-il',
    r:0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  })
}
