// Étape 2
function getLatinCharacterList(letter) {
    return letter.split(''); 
  }
  const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
  const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

//   Étape 3
  function translateLatinCharacter(letter) {
    letter = letter.toUpperCase(); 
    return latinToMorse[letter]; 
  }
  
  function encode(text) {
    let encodedText = '';
  
    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      const morse = translateLatinCharacter(letter);
      
    
      if (morse) {
        encodedText += morse + ' ';  
      }
    }
  
    return encodedText; 
  }
  
  const encodedText = encode("HELLO");
  console.log(encodedText); 
  
//   Étape 4

  function getMorseCharacterList(morse) {
    return morse.split(' ');
  }

  function translateMorseCharacter(morse) {
    return morseToLatin[morse];
  }
// function decode (morse) {
    // let decodedText = '';
  
    // for (let i = 0; i < text.length; i++) {
    //   const letter = text[i];
    //   const morse = translateLatinCharacter(letter);
      
    
    //   if (morse) {
    //     encodedText += morse + ' ';  
    //   }
    // }
  
    // return decodedText; 
  


