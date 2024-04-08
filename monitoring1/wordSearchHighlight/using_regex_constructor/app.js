function getInputText() {
  const textArea = document.getElementById('inputText').value
  const searchArea = document.getElementById('wordSearch').value
 
  // const searchSplit = searchArea.split(' ')
  // const textInfoSplit = textArea.split(' ') 

  const regexSearcher = new RegExp(searchArea, 'gi')//paieskos parametrai g - global(iesko visu), i - case indiferent(nekreipia dem i did ar maz)
  const modifiedText = textArea.replace(regexSearcher, (match) => `<b>${match}</b>`)

  const searchResultSelect = document.getElementById('resultHolder')
  const searchResult = document.createElement('p')
  searchResult.innerHTML = modifiedText
  searchResultSelect.appendChild(searchResult)
 }
 
 