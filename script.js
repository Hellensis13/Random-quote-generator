const quotes = [
    {
        author: "Albert Einstein",
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
        author: "Maya Angelou",
        text: "You will face many defeats in life, but never let yourself be defeated."
    },
    {
        author: "Winston Churchill",
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
        author: "Mark Twain",
        text: "The secret of getting ahead is getting started."
    },
    {
        author: "Nelson Mandela",
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    }
];

const h3 = document.querySelector('h3');
const p = document.querySelector('p');
const button = document.querySelector('button');

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    h3.textContent = quote.author;
    p.textContent = quote.text;
}

button.addEventListener('click', showRandomQuote);


showRandomQuote();