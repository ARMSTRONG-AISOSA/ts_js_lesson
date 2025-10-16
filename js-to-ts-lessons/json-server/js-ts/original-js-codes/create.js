const blogForm = document.querySelector('#blogCreateForm');


blogForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // stop form from reloading the page

    const newPostData = {
        title: document.getElementById("title").value.trim(),

        slug: document.getElementById("title").value
            .trim() // remove leading/trailing spaces
            .toLowerCase() // convert all letters to lowercase
            .split(" ") // split at every space
            .join("-"), // join back into a string with "-"
        // Check below for a better code

        author: document.getElementById("author").value.trim(),
        datePublished: document.getElementById("datePublished").value,
        category: document.getElementById("category").value,

        tags: document.getElementById("tags").value
            .split(",") // Split into array
            .map((tag) => tag.trim()) // Remove spaces around each tag
            .filter((tag) => tag !== "" && tag !== " "), // Remove empty strings

        likes: Math.floor(Math.random() * 20) + 1,
        content: document.getElementById("content").value.trim(),
    }

    // console.log(newPostData);
    const confirmUpload = confirm("Confirm Upload!");

    if (confirmUpload) {
    // Upload Blog 
    await fetch('http://localhost:3005/posts/', {
        method: 'POST',
        body: JSON.stringify(newPostData),
        headers: { 'Content-Type': 'application/json' }
    });

    // Go to homepage
    window.location.replace('http://127.0.0.1:8080/');

    } else {
        alert("Upload denied!");
    }


})


// ======================================
// 💡 Even Better (Handles Multiple Spaces & Punctuation)

// If you want a cleaner, URL-friendly slug, use a regular expression:

// slug: document.getElementById("title").value
//   .trim()
//   .toLowerCase()
//   .replace(/\s+/g, "-")         // replace one or more spaces with "-"
//   .replace(/[^a-z0-9\-]/g, "")  // remove all non-alphanumeric characters
//   .replace(/-+/g, "-")          // collapse multiple hyphens into one


// ✅ Example:
// Input: " Hello World!!! "
// Output: "hello-world"