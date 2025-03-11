// Load posts from localStorage if available
var posts = JSON.parse(localStorage.getItem("posts")) || [
    {id: 1, title: 'daily js news'},
    {id: 2, title: 'daily html news'},
    {id: 3, title: 'daily python news'},
    {id: 4, title: 'daily css news'}
];

// Function to display posts in the table
function renderTable() {
    const tableBody = document.querySelector("#posts-table tbody");
    // Clear previous data
    tableBody.innerHTML = ""; 
    posts.forEach(post => {
        let row = `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Run renderTable only on index.html
if (document.querySelector("#posts-table")) {
    renderTable();
}

// Add event listener for form submission in add.html
var submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", function () {
    var id = document.querySelector("#id").value;
    var title = document.querySelector("#title").value;
    // Append new data
    posts.push({ id: parseInt(id), title: title }); 
    // Save to localStorage
    localStorage.setItem("posts", JSON.stringify(posts)); 
    // Redirect back to main page
    window.location.href = "index.html"; 
});
