document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;

  const results = document.getElementById("results");
  results.innerHTML = `
    <h3>Search Results</h3>
    <p><strong>Category:</strong> ${category.charAt(0).toUpperCase() + category.slice(1)}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p>(Note: This is just a demo. Integrate a real API to get actual results.)</p>
  `;
});
