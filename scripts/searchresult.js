document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");

    if (query) {
        // Define the URL to your custom API endpoint
        const apiUrl = `https://your-api-url.com/gethtml?query=${query}`;

        // Fetch and display the content from your custom API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                return response.text();
            })
            .then((htmlContent) => {
                const resultContainer = document.getElementById("search-result");
                resultContainer.innerHTML = htmlContent;
            })
            .catch((error) => {
                handleNoQuery();
            });
    } else {
        handleNoQuery();
    }
});

function handleNoQuery() {
    const resultContainer = document.getElementById("search-result");
    resultContainer.textContent = "Please enter a search query.";
}
