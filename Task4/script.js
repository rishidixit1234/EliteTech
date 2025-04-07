// Track video watch progress
const video = document.getElementById("lesson-video");
video.addEventListener("ended", () => {
    localStorage.setItem("videoWatched", "1");
    updateProgress();
});

// Handle quiz logic
function checkAnswer(button) {
    const answer = button.innerText;
    const feedback = document.getElementById("quiz-feedback");

    if (answer === "HyperText Markup Language") {
        feedback.textContent = "Correct!";
        localStorage.setItem("quizCompleted", "yes");
    } else {
        feedback.textContent = "Try again!";
    }

    updateProgress();
}

// Display progress
function updateProgress() {
    const videoWatched = localStorage.getItem("videoWatched") || "0";
    const quizCompleted = localStorage.getItem("quizCompleted") || "No";

    document.getElementById("video-progress").textContent = videoWatched;
    document.getElementById("quiz-progress").textContent = quizCompleted;
}

// Initialize
document.addEventListener("DOMContentLoaded", updateProgress);