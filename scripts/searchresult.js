document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");

    if (query) {
        // Define the GitHub Pages URL for your repository
        const githubPagesUrl = "https://mhf2145.github.io/GDSC_ITB_2022-Last_Project-Web_Dev/";

        // Construct the URL to your HTML file on GitHub Pages
        const htmlUrl =
        [
            `pokemons/sinnoh/${query}.html`,
            `pokemons/kanto/${query}.html`,
            `pokemons/johto/${query}.html`,
            `pokemons/hoenn/${query}.html`,
        ];

        // Fetch and display the content from GitHub Pages
        fetch(htmlUrl)
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
