var quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.s", author: "Albert Einstein" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
];

function generateQuote() {

    var randomIndex = Math.floor(Math.random() * quotes.length);

    console.log("random index:", randomIndex);

    var randomQuote = quotes[randomIndex];

    document.getElementById("quote").innerHTML = `"${randomQuote.text}"`;
    document.getElementById("author").innerHTML = `--${randomQuote.author}`;
}
