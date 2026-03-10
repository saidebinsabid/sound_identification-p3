// Step 1: Tell the computer where our trained sound model is located
const modelURL = 'https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json';

// Step 2: Load the model using ml5.js
const classifier = ml5.soundClassifier(modelURL, onModelReady);

// Step 3: This function runs when the model is fully loaded and ready to listen
function onModelReady() {
    console.log('The AI model is loaded and ready!');
}

// Step 4: This function runs exactly when we click the "START" button
function startClassification() {
    // Tell the classifier to start listening to the microphone and guessing the sound
    classifier.classify(onSoundRecognized);
}

// Step 5: This function runs every single time the model hears a sound
function onSoundRecognized(error, results) {

    // If there's an error, print it and stop
    if (error) {
        console.error("Oops! Something went wrong:", error);
        return;
    }

    // The model gives us a list of guessed sounds. The first one (results[0]) is the best guess.
    const bestGuess = results[0];
    const soundName = bestGuess.label; // For example: "Clap", "Bell", or "Snapping"
    const accuracy = (bestGuess.confidence * 100).toFixed(2); // For example: 98.45

    // Print the result secretly to our console like a developer
    console.log("I heard:", soundName, "with accuracy:", accuracy, "%");

    // Step 6: Find the HTML elements where we will show our answers
    const resultLabel = document.getElementById("result_label");
    const resultConfidence = document.getElementById("result_confidence");

    // Step 7: Update the text on our website screen!
    resultLabel.innerText = "I can hear - " + soundName;
    resultConfidence.innerText = "Accuracy - " + accuracy + " %";

    // Step 8: Mix 3 random numbers together to invent a new random color!
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    const randomColor = "rgb(" + red + "," + green + "," + blue + ")";

    // Step 9: Paint our text using our newly invented random color
    resultLabel.style.color = randomColor;
    resultConfidence.style.color = randomColor;

    // Step 10: Find all four of our alien images on the page
    const alien1 = document.getElementById('alien1');
    const alien2 = document.getElementById('alien2');
    const alien3 = document.getElementById('alien3');
    const alien4 = document.getElementById('alien4');

    // Step 11: Tell all aliens to stop dancing and stand still (show normal PNG images)
    alien1.src = 'images/aliens-01.png';
    alien2.src = 'images/aliens-02.png';
    alien3.src = 'images/aliens-03.png';
    alien4.src = 'images/aliens-04.png';

    // Step 12: Tell ONLY the correct alien to dance (show dancing GIF image) based on the sound
    if (soundName === "Clap") {
        alien1.src = 'images/aliens-01.gif'; // Alien 1 dances for Clap
    }
    else if (soundName === "Bell") {
        alien2.src = 'images/aliens-02.gif'; // Alien 2 dances for Bell
    }
    else if (soundName === "Snapping") {
        alien3.src = 'images/aliens-03.gif'; // Alien 3 dances for Snapping
    }
    else {
        // If we hear "Background Noise" or everything else
        alien4.src = 'images/aliens-04.gif'; // Alien 4 dances for Background Noise
    }
}
