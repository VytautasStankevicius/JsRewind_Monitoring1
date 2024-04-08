// Sukurti JavaScript aplikaciją, kurios pagalba vartotojas gali surasti nurodytame tekste žodžius pagal paiešką. 
// Vartotojo sąsajoje yra du laukai: paieška, tekstas. 
// Į lauką vartotojas įkelia tekstą, o į paiešką turi įvesti žodį, kurį nori surasti tekste. 
// Kai žodis, žodžiai arba žodžio fragmentas yra surandamas jie turi būti pažymimi uždedant foną ant paieškos rezultatų.


function getInputText() {
  const textArea = document.getElementById('inputText').value
  // const textInfo = textArea.value
  const searchArea = document.getElementById('wordSearch').value
  // const searchInfo = searchArea.value

  const searchSplit = searchArea.split(' ')
  const textInfoSplit = textArea.split(' ') 


  textInfoSplit.forEach((word, index) => {
    if (searchSplit.includes(word)) {
         textInfoSplit[index] = `<b>${word}</b>`
    }
  })
  const searchResultSelect = document.getElementById('resultHolder')
  const searchResult = document.createElement('p')
  searchResult.innerHTML = textInfoSplit.join(' ')
  searchResultSelect.appendChild(searchResult)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
