const gifPairs = [
    { speaking: "GIFs/Speak1.gif", idle: "GIFs/Idle1_R.gif" },
    { speaking: "GIFs/Speak2_R.gif", idle: "GIFs/Idle2_R.gif" },
    { speaking: "GIFs/Speak3.gif", idle: "GIFs/Idle3_R.gif" },
    { speaking: "GIFs/Speak4.gif", idle: "GIFs/Idle4_R.gif" },
    { speaking: "GIFs/Speak5.gif", idle: "GIFs/Idle5_R.gif" },
    { speaking: "GIFs/Speak6.gif", idle: "GIFs/Idle6_R.gif" },
    { speaking: "GIFs/Speak7.gif", idle: "GIFs/Idle7_R.gif" },
    { speaking: "GIFs/Speak8.gif", idle: "GIFs/Idle8_R.gif" },
    { speaking: "GIFs/Speak9.gif", idle: "GIFs/Idle9_R.gif" }
    // Add more pairs as needed
];
const finalImagePath = "BonDia.jpg"; // Replace with the actual path to your image

let isAnimating = false;

const sentences = [
    "Bon dia!! Des de Juneau esperem que vagi super bé avui!!",
    "Avui farà un dia tranquil, sol amb una mica de núvol.",
    "És important pendre's-ho amb calma i disfrutar dels petits moments.",
    "Quina sort de poder gaudir d'un altre dia ple d'oportunitats.", 
    "Recorda que hi ha molta gent que t'estima. Estem amb tu!!",
    'Vigila de no treballar massa. També és important descansar.',
    'Et desitjo un dia meravellòs.',
    'I com diria la Taytay:',
    "But I keep cruising, can't stop, won't stop moving. It's like I got this music in my mind. Saying, 'It's gonna be alright'."
    // Add more sentences as needed
];

let currentSentence = 0;
const textSpeed = 40; // Milliseconds per character

function changeGifToSpeaking(index) {
    const gifPath = gifPairs[index % gifPairs.length].speaking; // Use modulo to loop back if index exceeds array length
    document.getElementById('isabelle-img').src = gifPath;
}

function changeGifToIdle(index) {
    const gifPath = gifPairs[index % gifPairs.length].idle; // Use modulo to loop back if index exceeds array length
    document.getElementById('isabelle-img').src = gifPath;
}


function displaySentence() {
    if (currentSentence >= sentences.length || isAnimating) {
        // Check if it's not currently animating and all sentences are done
        document.getElementById('isabelle-img').src = finalImagePath; // Change to final image
        // Optionally, you can hide the text box or display a final message
        document.getElementById('text-box').style.display = 'none'; // Hide the text box
        return;
    }

    changeGifToSpeaking(currentSentence); // Change GIF to speaking at the start
    isAnimating = true; // Set flag to true as animation st
    const textBox = document.getElementById('text-box');
    textBox.innerHTML = ''; // Clear previous sentence
    const sentence = sentences[currentSentence];
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < sentence.length) {
            textBox.innerHTML += sentence.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            changeGifToIdle(currentSentence); // Change GIF to idle once done typing
            isAnimating = false; // Reset flag as animation ends
            currentSentence++; // Prepare for next sentence
        }
    }, textSpeed);
}

document.getElementById('isabelle-container').addEventListener('click', function() {
    if (!isAnimating) { // Only allow clicking if not currently animating
        displaySentence();
    }
});

// Initially call displaySentence to show the first message and GIF
displaySentence();

