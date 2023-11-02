// Add your JavaScript code here

const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. – Jordan Belfort",
    "If you don't build your dream, someone else will hire you to help them build theirs. – Dhirubhai Ambani"
];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;
});
