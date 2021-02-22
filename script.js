const fetchQuoteAndAuthor = () => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then((response) => response.json())
    .then(
        (data) => {
            (document.getElementById("quote").innerHTML = data.quotes[0].text),
        (document.getElementById("author").innerHTML = data.quotes[0].author);
        }
    );
};