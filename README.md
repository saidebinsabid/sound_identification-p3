# 👽 Sound Controlled Aliens Web App

**[🌍 Live Website Demo](https://saidebinsabid.github.io/sound_identification-p3/)**

A fun, interactive, and intelligent web application that uses Artificial Intelligence (AI) to listen to sounds through your microphone and control dancing alien characters. 

Play different sounds like a **Clap**, **Snap**, or ring a **Bell**, and watch specific aliens start dancing based on the sound they hear! It also features a sleek, modern, "glassmorphism" dark-themed design.

---

## 🚀 Quick Description

This project demonstrates a simple yet powerful implementation of Machine Learning in the browser using **ml5.js** and a custom **Teachable Machine** model. The AI continuously listens, predicts the sound, calculates its accuracy, and changes the user interface (UI) dynamically to react to the audio.

---

## 🛠️ Technologies Required

This project is built using basic web technologies and requires no complex installation—just a browser and an internet connection!

*   **HTML5** (Structure)
*   **Vanilla CSS3** (Styling, Dark Mode & Glassmorphism)
*   **Vanilla JavaScript** (Logic and Model Integration)
*   **Google Fonts** (Typographic Styling)

### 🔗 Required CDNs
Since we use AI directly in the browser, the project relies on the following direct Content Delivery Network (CDN) links included in the `index.html`:

**ml5.js (Machine Learning Library):**
```html
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
```

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Special+Elite&display=swap" rel="stylesheet">
```

---

## ⚙️ How It Works

Here is a simple breakdown of how the magic happens behind the scenes:

1.  **AI Model Loading**: When the page loads, the JavaScript fetches our pre-trained sound classification model directly from Google's Teachable Machine servers.
2.  **Listening**: When the user clicks the **"START"** button, the app asks for microphone permission.
3.  **Classification**: The `ml5.js` library continuously records snippets of audio and passes them through our AI model.
4.  **Prediction Output**: The model figures out what sound it is (e.g., "Clap", "Bell", "Snapping", or "Background Noise") and gives a confidence score (accuracy percentage).
5.  **UI Updates**: 
    *   The text on the screen is updated to show what sound was heard.
    *   The text color dynamically changes to a random color.
    *   The static `.png` images of the aliens are swapped with animated `.gif` images depending on the sound recognized:
        *   🔊 **Clap** $\rightarrow$ Alien 1 dances
        *   🔔 **Bell** $\rightarrow$ Alien 2 dances
        *   🤌 **Snapping** $\rightarrow$ Alien 3 dances
        *   🗣️ **Background Noise** $\rightarrow$ Alien 4 dances

---

## 💻 Project Setup & Usage

Since it doesn't use node modules or complex build tools, anybody can run this project in seconds!

1.  **Download or Clone** the project files to your computer.
2.  Ensure you have the following folder structure:
    ```text
    📁 sound_identification-p3
    ├── 📁 images/
    │   ├── aliens-01.png, aliens-01.gif
    │   ├── aliens-02.png, aliens-02.gif
    │   ├── aliens-03.png, aliens-03.gif
    │   └── aliens-04.png, aliens-04.gif
    ├── index.html
    ├── style.css
    └── script.js
    ```
3.  **Open `index.html`** in any modern web browser (Google Chrome, Firefox, Edge).
4.  Click the **"START"** button.
5.  **Allow microphone access** when the browser prompts you.
6.  Start making sounds (Clap, Snap, Bell) and watch the aliens react!

---

## 👨‍💻 Developer

**Developed by - Saide Bin Sabid**
