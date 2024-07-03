function calcWordFrequencies(words) {
    const wordArray = words.split(" ");
    const wordFrequencies = {};
 
    wordArray.forEach(word => {
       if (wordFrequencies[word]) {
          wordFrequencies[word]++;
       } else {
          wordFrequencies[word] = 1;
       }
    }
    );
 
    // Output the words and their frequencies
    for (const [word, frequency] of Object.entries(wordFrequencies)) {
       console.log(`${word} ${frequency}`);
    }
 }
 
 console.log("Testing calcWordFrequencies()...");
 calcWordFrequencies("hey hi Mark hi mark");
 
 
 
 // Do NOT remove the following line:
 export default calcWordFrequencies;