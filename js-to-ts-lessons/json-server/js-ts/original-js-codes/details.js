// Javascript for details page
const blogDetailsContainer = document.querySelector('.details');

// Excellent — this is a really useful and powerful JavaScript line, especially when working with query parameters (the stuff after ? in URLs).

// 🧠 TL;DR Summary
// window.location.search:  Gets the query string from the current page
//  → (like ?id=42&name=ben)
// new URLSearchParams(...):  Converts it into an easy-to-use object with methods to run on it
// .get(name): Gets the [first] value of the parameter -- params.get('id') → "42"
// .append(name, value): Adds another parameter -- params.append('filter', 'popular')
// .delete(name): Removes a parameter -- params.delete('id')
// .toString(): Converts params back to a string -- "id=42&name=ben"



// .get('id')	Retrieves the value of id from the query string
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");


let baseURLDetails = "http://localhost:3005/posts/";
// const response = await fetch(`http://localhost:3005/posts/${postId}`);
// Works when the end point has only one resorce

let homeURLDetails = "http://127.0.0.1:8080/";

async function fetchSinglePost() {

    let template = '';

    try {
        const response = await fetch(baseURLDetails); // fetch data from endpoint

        const posts = await response.json(); //parse data


        // Find the post that matches the ID
        // const post = posts.find((post) => post.id === postId);
        const post = posts.find((post) => post.id === postId);

        // find returns undefined if it doesn't match
        if (!post) {
            blogDetailsContainer.innerHTML = `
            <div>
                <p class="postNotFound">Post not found!</p>
                <button class="returnHomeBtn" onClick={returnHome()} >Return Home</button>
            </div>`;
            return;

        } else {
            const tags = post.tags.map((tag) => {
                return `<span class="tags">${tag.trim().toUpperCase()}</span>`;
            }).join(", ");

            template = template + `
            <div class="detailedPost">
        <h2>${post.title}</h2>
        <p><b>Category:</b> ${post.category}</p>
        <p><b>Tags:</b> ${tags}</p>
        <p class="bodyContent">${post.content}</p>
        <div class="postInfo">
            <div>
                <p><em><b>${post.author}</b></em></p>
                <p><small>Likes ❤️ ${post.likes}</small></p>
            </div>
            <p>Date Published: <em>${post.datePublished}</em></p>
            ${post.postUpdatedLast ? `<p>Last updated: <em>${post.postUpdatedLast}</em></p>` : ""}
            <button type="submit" id="deleteBtn" >Delete Post</button>
            <button class="returnHomeBtn" onClick={returnHome()} >Return Home</button>
            <a class="updatePostLink" href="/html/update.html?id=${post.id}">Update Post</a>
        </div>
        </div>
            `;
        }


        blogDetailsContainer.innerHTML = template;

        // ✅ Attach delete listener here (after element exists)
        const deleteBtn = document.querySelector('#deleteBtn');
        deleteBtn.addEventListener('click', async () => {
            await deletePost(postId);
        });

        return post;

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

async function deletePost(postId) {
    try {

        const confirmDelete = confirm("Are you sure you want to delete?");


        if (confirmDelete) {
            // Delete Method
            const response = await fetch(baseURLDetails + postId, {
                method: 'DELETE'
            });


            // Handle Response
            if (response.ok) {
                alert("Post deleted successfully!");
            } else {
                console.error("Failed to delete post:", response.status);
            }
        }



    } catch (error) {
        console.error("Error deleting post:", error);
    }
}


// Return home
function returnHome() {
    window.location.replace(homeURLDetails);
}


// fetchSinglePost() is async so you await it in DOMContentLoaded
window.addEventListener("DOMContentLoaded", async () => {
    const post = await fetchSinglePost();
    console.log(post);
});