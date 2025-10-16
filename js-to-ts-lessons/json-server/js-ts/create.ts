const blogCreateForm = document.querySelector('#blogCreateForm') as HTMLFormElement | null;

// Null checking
if (blogCreateForm !== null) {
    blogCreateForm.addEventListener("submit", async (event: SubmitEvent): Promise<void> => {
        event.preventDefault(); // stop form from reloading the page

        // Type-safe field access
        const titleInput = document.getElementById("title") as HTMLInputElement | null;
        const authorInput = document.getElementById("author") as HTMLInputElement | null;
        const categoryInput = document.getElementById("category") as HTMLInputElement | null;
        const contentInput = document.getElementById("content") as HTMLTextAreaElement | null;
        const datePublishedInput = document.getElementById("datePublished") as HTMLInputElement | null;
        const tagsInput = document.getElementById("tags") as HTMLInputElement | null;


        // ✅ Validate required fields against falsy value(null)
        if (!titleInput || !authorInput || !categoryInput || !contentInput || !datePublishedInput || !tagsInput) {
            alert("Error: One or more fields are missing in the form!");
            return;
        }

        const newPostData = {
            title: titleInput.value.trim(),

            slug: titleInput.value
                .trim() // remove leading/trailing spaces
                .toLowerCase() // convert all letters to lowercase
                .split(" ") // split at every space
                .join("-"), // join back into a string with "-"
            // Check below for a better code

            author: authorInput.value.trim(),
            datePublished: datePublishedInput.value,
            category: categoryInput.value,

            tags: tagsInput.value
                .split(",") // Split into array
                .map((tag) => tag.trim()) // Remove spaces around each tag
                .filter((tag) => tag !== "" && tag !== " "), // Remove empty strings

            likes: Math.floor(Math.random() * 20) + 1,
            content: contentInput.value.trim(),
        }

        // console.log(newPostData);
        const confirmUpload = confirm("Confirm Upload!");

        if (confirmUpload) {
            try {
                // Upload Blog
                const response = await fetch('http://localhost:3005/posts/', {
                    method: 'POST',
                    body: JSON.stringify(newPostData),
                    headers: { 'Content-Type': 'application/json' }
                });

                if (response.ok) {
                    // alert("✅ Blog uploaded successfully!");
                    // Go to homepage
                    window.location.replace('http://127.0.0.1:8080/');
                } else {
                    alert("❌ Upload failed. Server responded with: " + response.status);
                }

            } catch (error) {
                console.error("Error uploading post:", error);
                alert("⚠️ An error occurred while uploading the post.");
            }

        } else {
            alert("Upload denied!");
        }


    })
}



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