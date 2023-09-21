document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");

    if (query) {
        // Define the GitHub repository and file path
        const repository = "MHF2145/GDSC_ITB_2022-Last_Project-Web_Dev";
        const filePath = `pokemons/sinnoh/${query}.html`;

        // Construct the API URL
        const apiUrl = `https://api.github.com/repos/${repository}/contents/${filePath}`;

        // Fetch the content using the GitHub API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                return response.json();
            })
            .then((data) => {
                const htmlContent = atob(data.content); // Decode the content
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
