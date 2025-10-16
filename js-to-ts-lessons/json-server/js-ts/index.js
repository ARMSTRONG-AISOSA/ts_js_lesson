// as HTMLElement → tells TypeScript this element is a general HTML container (like a <div>).
// as HTMLSelectElement → specifies that #sort is a <select> dropdown.
// as HTMLFormElement → ensures TypeScript knows .searchForm supports .submit, .reset(), etc.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// | null : If you want null-safety checks to avoid runtime errors:
const blogsContainer = document.querySelector('.blogs');
const sortSelectTs = document.querySelector('#sort');
const searchFormTs = document.querySelector('.searchForm');
let homeURLIndexTs = "http://127.0.0.1:8080/";
let baseURLIndexTs = "http://localhost:3005/posts/";
function fetchPostsTs() {
    return __awaiter(this, arguments, void 0, function* (sortType = "none", term = "") {
        // Always restart from a clean baseUrl and prevent baseURL mutation
        let url = baseURLIndexTs;
        // // doesn't seem to work for me
        //     if (term) {
        //         url = url + `?q=${term}`; 
        //         console.log("search ran!: " + url);
        //     }
        let template = ''; // hold ui element and content
        try {
            // fetch returns a Response object, not raw JSON
            const response = yield fetch(url);
            // console.log("Raw Response:");
            // console.log(response);
            // Convert Response body to JSON
            let posts = yield response.json();
            // console.log("Parsed data");
            console.log(posts);
            console.log("Sort type:", sortType);
            // Handle empty post list
            if (posts.length === 0 && blogsContainer !== null) {
                blogsContainer.innerHTML = `<p class="noPost">No posts found!</p>`;
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
                    // Strict date sorting — uses .getTime() to compare properly.
                    posts.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
                    break;
                case "oldest":
                    posts.sort((a, b) => new Date(a.datePublished).getTime() - new Date(b.datePublished).getTime());
                    break;
                default:
                    console.log("No sort option selected!");
                    break;
            }
            // Alternative Manual search
            // Search Logic
            let sortedPosts = posts;
            if (term) {
                console.log("Search term: " + term); //log search term
                const searchTerm = term.toLowerCase(); //convert search term to lowercase for better match cases 
                // If returns any that is true for at leasta singleconditions within
                sortedPosts = sortedPosts.filter((post) => post.title.toLowerCase().includes(searchTerm) || //if title includes search term
                    post.author.toLowerCase().includes(searchTerm) || //if author includes search term
                    post.category.toLowerCase().includes(searchTerm) || //if category includes search term
                    post.content.toLowerCase().includes(searchTerm) //if content includes search term
                );
                console.log("Filtered locally:", sortedPosts); // log filtered posts
            }
            let filteredPosts = sortedPosts;
            filteredPosts.forEach(post => {
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
            // Inject into DOM
            if (blogsContainer !== null) {
                blogsContainer.innerHTML = template;
            }
            // Get all buttons listeners
            const deleteBtns = document.querySelectorAll('.deleteBtn');
            // Attach a delete event(function) to each button
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
                    // Check Notes below
                    const target = event.target;
                    const postId = target.getAttribute('data-id');
                    // if falsy in value ex. null, undefined
                    if (!postId) {
                        return;
                    }
                    // Confirm delete intention
                    const confirmDelete = confirm("Are you sure you want to delete this post?");
                    // Delete function if true
                    if (confirmDelete) {
                        yield deletePostTs(postId);
                    }
                    ;
                }));
            });
            return filteredPosts;
        }
        catch (error) {
            console.error("Error fetching posts:", error);
        }
    });
}
// Delete Post
function deletePostTs(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(baseURLIndexTs + postId, {
                method: 'DELETE'
            });
            // Handle Response
            if (response.ok) {
                alert("Post deleted successfully!");
                yield fetchPostsTs(); // Reload list after delete with default arguements
            }
            else {
                console.error("Failed to delete post:", response.status);
            }
        }
        catch (error) {
            console.error("Error deleting post:", error);
        }
    });
}
// Listen for dropdown change
if (sortSelectTs !== null) {
    sortSelectTs.addEventListener("change", (event) => {
        const target = event.target;
        const sortType = target.value;
        fetchPostsTs(sortType, "");
    });
}
// Search Listner: listen to form
if (searchFormTs !== null) {
    searchFormTs.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.searchInput');
        if (searchInput !== null) {
            const term = searchInput.value.trim(); // get search term and remove white space from input field
            fetchPostsTs("none", term);
        }
    });
}
// Initial Fetch
// fetchPostsTs() is async so you await it in DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => __awaiter(this, void 0, void 0, function* () {
    const posts = yield fetchPostsTs(); //sortType = "none", term=""
    // console.log(posts);
}));
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
// What is this about
//         const deleteBtns = document.querySelectorAll('.deleteBtn') as NodeListOf<HTMLButtonElement>;
// deleteBtn.addEventListener('click', async (event: PointerEvent | MouseEvent) => {
// Check Notes below
// const target = event.target as HTMLButtonElement;
// const postId = target.getAttribute('data-id');
