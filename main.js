import './style.css'

const quoteText = document.getElementById('quote-text'),
      quoteTags = document.getElementById('quote-tags'),
      quoteAuthor = document.getElementById('quote-author'),
      genQuoteBtn = document.getElementById('gen-quote-btn');


  function randomQuote(){
    fetch('/api/v1/quotes', {
      headers: {
        'X-Api-Key': '9x9R97s43j9wHJDf+zt8iA==PbXTYlKK9CW9bvxl'
      }
    })
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const quoteData = data[0];
            quoteText.textContent = quoteData.quote;
            // API does not provide tags; optionally use category: quoteTags.textContent = quoteData.category;
            quoteAuthor.textContent = `-- ${quoteData.author}`;
          }
        })
        .catch(error => console.error('Error fetching quote:', error));
  }
randomQuote();
genQuoteBtn.addEventListener('click', () =>{
  randomQuote();
});