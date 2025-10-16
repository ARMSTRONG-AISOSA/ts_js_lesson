const blogUpdateForm = document.querySelector('.blogUpdateForm');

// Input Fields
const titleField = document.querySelector('#titleUpdate');
const authorField = document.querySelector('#authorUpdate');
const categoryField = document.querySelector('#categoryUpdate');
const tagsField = document.querySelector('#tagsUpdate');
const contentField = document.querySelector('#contentUpdate');
const dateField = document.querySelector('#dateModified');

// Button
const homeBtn = document.querySelector('#returnHome');

// .get('id')	Retrieves the value of id from the query string
const params = new URLSearchParams(window.location.search)
const postId = params.get("id");


// Urls
let baseURLUpdate = "http://localhost:3005/posts/";
let homeURLUpdate = "http://127.0.0.1:8080/";


// Functions

// Function to fetch a single(specific) post from the Json-Server
async function fetchSinglePost() {
    let template = '';

    // A guard clause: If the URL doesn’t have ?id=1 (or another valid post ID), postId will be null, and this fetch will fail:
    if (!postId) {
        console.error("No post ID found in the URL.");
        return;
    }

    try {
        const response = await fetch(baseURLUpdate + `${postId}`); //fetch data
        const post = await response.json(); // Parse data
        // console.log(post); //log data

        // Exract data
        const fetchedTitle = post.title;
        const fetchedAuthor = post.author;
        const fetchedCategory = post.category;
        const fetchedTags = post.tags;
        const fetchedContent = post.content;

        // console.log(fetchedTags);

        // Inject data into form field
        titleField.value = fetchedTitle;
        authorField.value = fetchedAuthor;
        categoryField.value = fetchedCategory;
        tagsField.value = Array.isArray(fetchedTags) ? fetchedTags.join(", ") : fetchedTags;
        contentField.value = fetchedContent;


    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// ".target" is only used in event handlers, not for direct element references.

// Function to update the (specifically) fetched post
blogUpdateForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // stop form from reloading the page

    // 🗓️ Simple date format: YYYY-MM-DD
    const currentDate = new Date().toISOString().split("T")[0];
    // console.log(currentDate);


    const updatePost = {
        title: titleField.value.trim(),

        slug: titleField.value
            .trim() // remove leading/trailing spaces
            .toLowerCase() // convert all letters to lowercase
            .split(" ") // split at every space
            .join("-"), // join back into a string with "-"
        // Check below for a better code

        author: authorField.value.trim(),
        // dateUpdate: document.getElementById("datePublished").value,
        category: categoryField.value.trim(),

        tags: tagsField.value
            .split(",") // Split into array
            .map((tag) => tag.trim()) // Remove spaces around each tag
            .filter((tag) => tag !== "" && tag !== " "), // Remove empty strings

        content: contentField.value.trim(),
        postUpdatedLast: currentDate, // 🆕 new key added here
    }

    const response = await fetch(baseURLUpdate + postId, {
        // method: "PUT", //Updates all field and deletes the others 
        method: "PATCH", // only update provided fields
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatePost),
    });

    if (response.ok) {
        alert("Post updated successfully!");

    } else {
        console.error("Failed to update post:", response.status);
    }


})


// Return Home
homeBtn.addEventListener("click", () => {
    window.location.replace(homeURLUpdate);
});

// Fetch post and load into form on load
window.addEventListener("DOMContentLoaded", async function fetchPost() {
    const post = await fetchSinglePost();
})