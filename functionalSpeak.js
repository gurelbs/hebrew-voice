
export let googleSearch = (e) => window.open(`http://www.google.com/search?q=${e}`) 
export let youtube = (e) => window.open(`http://www.youtube.com/results?search_query=${e}`)
export let wikiSearch = e => window.open(`https://he.wikipedia.org/wiki/${e}`)
export let wordSearch = someWord => {
  let arr = []
  someWord = someWord.split(' ')
  arr.push(someWord)    
  someWord = arr[0].slice(2).join(' ')
  return someWord
}
 let functionalSpeak = (transcript) => {
  return transcript.includes('חפש בגוגל') !== false 
    ? googleSearch(wordSearch(transcript)) && location.reload()
    : transcript.includes('חפש ביוטיוב') !== false 
    ? youtube(wordSearch(transcript)) && location.reload() 
    : transcript.includes('חפש בויקיפדיה') !== false 
    ? wikiSearch(wordSearch(transcript)) && location.reload() 
    : transcript.includes('הפעל רדיו') !== false 
    ? window.open('https://www.rlive.co.il/station/glgltz') && location.reload() 
    : `לא הבנתי, תנסה שוב בבקשה.`
}
export default functionalSpeak
