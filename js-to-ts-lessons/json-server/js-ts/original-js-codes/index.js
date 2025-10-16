const blogsIndexContainer = document.querySelector('.blogs');
const sortSelect = document.querySelector('#sort');
const searchForm = document.querySelector('.searchForm');

let homeURLIndex = "http://127.0.0.1:8080/";
let baseURLIndex = "http://localhost:3005/posts/";


async function fetchPosts(sortType = "none", term = "") {

    // Always restart from a clean baseUrl and prevent baseURL mutation
    let urlIndex = baseURLIndex;

    // // doesn't seem to work for me
    //     if (term) {
    //         url = url + `?q=${term}`; 
    //         console.log("search ran!: " + url);
    //     }

    let template = ''; // hold ui element and content

    try {
        // fetch returns a Response object, not raw JSON
        const response = await fetch(urlIndex);
        // console.log("Raw Response:");
        // console.log(response);

        // Convert Response body to JSON
        let posts = await response.json();
        // console.log("Parsed data");
        console.log(posts);

        console.log("Sort type:", sortType);

        // Handle empty post list
        if (posts.length === 0) {
            blogsIndexContainer.innerHTML = `<p class="noPost">No posts found!</p>`;
            return;
        }


        // Apply sort based on selected value
        switch (sortType) {
            case "likes_desc":
                posts.sort((a, b) => b.likes - a.likes);
                break;

            case "likes_asc":
                posts.sort((a, b) => a.likes - b.likes);
                break;

            case "newest":
                posts.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
                break;

            case "oldest":
                posts.sort((a, b) => new Date(a.datePublished) - new Date(b.datePublished));
                break;

            default:
                console.log("No sort option selected!");
                break;
        }

        // Alternative Manual search
        if (term) {

            console.log("Search term: " + term); //log search term

            const searchTerm = term.toLowerCase(); //convert search term to lowercase for better match cases 

            // If returns any that is true for at leasta singleconditions within
            posts = posts.filter((post) =>
                post.title.toLowerCase().includes(searchTerm) || //if title includes search term
                post.author.toLowerCase().includes(searchTerm) || //if author includes search term
                post.category.toLowerCase().includes(searchTerm) || //if category includes search term
                post.content.toLowerCase().includes(searchTerm) //if content includes search term
            );

            console.log("Filtered locally:", posts); // log filtered posts

        }

        posts.forEach(post => {

            // Tags
            // Array.isArray(post.tags): check if post.tags is present and if its an array
            // map: go over array one at a time and return each element
            // Trim: remove white space
            // Join: join into a string spaced by ", "
            const tags = Array.isArray(post.tags)
                ? post.tags.map((tag) => {
                    return `<span class="tags">${tag.trim().toUpperCase()}</span>`;
                }).join(", ")
                :
                "";

            template = template + `
        <div class="post">
        <h2>${post.title}</h2>
        <p><b>Category:</b> ${post.category}</p>
        <p><b>Tags:</b> ${tags}</p>
        <p>${post.content.slice(0, 100)}...</p>
        <div class="postInfo">
            <div>
                <p><em><b>${post.author}</b></em></p>
                <p><small>Likes ❤️ ${post.likes}</small></p>
            </div>
            <p>Date Published: <em>${post.datePublished}</em></p>
            ${post.postUpdatedLast ? `<p>Last updated: <em>${post.postUpdatedLast}</em></p>` : ""}
        </div>
        <a href="/html/details.html?id=${post.id}">Read more...</a>
        <button type="submit" class="deleteBtn" data-id="${post.id}">Delete Post</button>
        </div>
        `;
        });

        blogsIndexContainer.innerHTML = template;


        // Get all buttons
        const deleteBtns = document.querySelectorAll('.deleteBtn');
        // Attach a delete event(function) to each button 
        deleteBtns.forEach((deleteBtn) => {
            deleteBtn.addEventListener('click', async (event) => {
                // Check Notes below
                const postId = event.target.getAttribute('data-id');

                // Confirm delete intention
                const confirmDelete = confirm("Are you sure you want to delete this post?");

                // Delete function if true
                if (confirmDelete) {
                    await deletePost(postId);
                };
            })
        })



        return posts;

    } catch (error) {
        console.error("Error fetching posts:", error);
    }

}

// Delete Post
async function deletePost(postId) {
    try {

        const response = await fetch(baseURLIndex + postId, {
            method: 'DELETE'
        });

        // Handle Response
        if (response.ok) {
            alert("Post deleted successfully!");

            await fetchPosts(); // Reload list after delete with default arguements
        } else {
            console.error("Failed to delete post:", response.status);
        }

    } catch (error) {
        console.error("Error deleting post:", error);
    }
}

// Listen for dropdown change
sortSelect.addEventListener("change", (event) => {
    const sortType = event.target.value;
    fetchPosts(sortType, "");
})

// Search Listner: listen to form
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const term = document.querySelector('.searchInput').value.trim(); // get search term and remove white space from input field
    fetchPosts("none", term);
    // document.querySelector('.searchInput').value = ""; // clear input field after search
})


// Initial Fetch
// fetchPosts() is async so you await it in DOMContentLoaded
window.addEventListener("DOMContentLoaded", async () => {
    const posts = await fetchPosts(); //sortType = "none", term=""
    // console.log(posts);

});




// 🧩 What getAttribute() Does
// In JavaScript, the getAttribute() method allows you to read the value of an HTML attribute on an element.

// ✅ Syntax: element.getAttribute(attributeName)

// element → the DOM element you want to inspect
// attributeName → the name of the attribute you want to read (as a string)

// It returns the value of that attribute, or null if the attribute does not exist.

// 🧠 Example 1 — Basic Use
// HTML:
// <button data-id="101" data-role="admin">Delete</button>


// JavaScript:
// const btn = document.querySelector("button");

// console.log(btn.getAttribute("data-id"));   // "101"
// console.log(btn.getAttribute("data-role")); // "admin"