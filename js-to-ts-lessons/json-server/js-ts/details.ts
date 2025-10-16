// Javascript for details page
const blogDetailsContainerTs = document.querySelector('.details') as HTMLElement | null;

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
const paramsTs = new URLSearchParams(window.location.search);
const postIdTs = paramsTs.get("id") as string | null;


let baseURLDetailsTs: string = "http://localhost:3005/posts/";
// const response = await fetch(`http://localhost:3005/posts/${postIdTs}`);
// Works when the end point has only one resorce

let homeURLDetailsTs: string = "http://127.0.0.1:8080/";

// Post Interface
interface Post {
    id: string;
    title: string;
    category: string;
    author: string;
    content: string;
    likes: number;
    datePublished: string;
    postUpdatedLast?: string;
    tags?: string[];
}

async function fetchSinglePostDetails(): Promise<Post | void> {

    let template: string = '';

    // Null checks
    if (!postIdTs) {
        console.error("❌ No post ID found in URL.");
        return;
    }

    if (blogDetailsContainerTs == null) {
        console.error("blogDetailsContainerTs returned null");
        return;
    }

    try {
        const response = await fetch(baseURLDetailsTs); // fetch data from endpoint

        if (!response.ok) {
            throw new Error(`Failed to fetch post. Status: ${response.status}`);
        }


        const posts: Post[] = await response.json(); //parse data

        if (!posts) {
            return
        }


        // Find the post that matches the ID


        const foundPost: Post | undefined = posts.find((post) => post.id === postIdTs);

        // find returns undefined if it doesn't match
        if (!foundPost) {
            blogDetailsContainerTs.innerHTML = `
                    <div>
                        <p class="postNotFound">Post not found!</p>
                        <button class="returnHomeBtn" onClick={returnHomeTs()} >Return Home</button>
                    </div>`;

            return;
        } else {
            // foundPost.tags ?: 
            const tags = foundPost.tags ?
                foundPost.tags.map((tag) => {
                    return `<span class="tags">${tag.trim().toUpperCase()}</span>`;
                }).join(", ")
                :
                "";

            template = template + `
            <div class="detailedPost">
        <h2>${foundPost.title}</h2>
        <p><b>Category:</b> ${foundPost.category}</p>
        <p><b>Tags:</b> ${tags}</p>
        <p class="bodyContent">${foundPost.content}</p>
        <div class="postInfo">
            <div>
                <p><em><b>${foundPost.author}</b></em></p>
                <p><small>Likes ❤️ ${foundPost.likes}</small></p>
            </div>
            <p>Date Published: <em>${foundPost.datePublished}</em></p>
            ${foundPost.postUpdatedLast ? `<p>Last updated: <em>${foundPost.postUpdatedLast}</em></p>` : ""}
            <button type="submit" id="deleteBtn" >Delete Post</button>
            <button class="returnHomeBtn" onClick={returnHomeTs()} >Return Home</button>
            <a class="updatePostLink" href="/html/update.html?id=${foundPost.id}">Update Post</a>
        </div>
        </div>
            `;
        }

        // Null check
        if (blogDetailsContainerTs !== null) {
            blogDetailsContainerTs.innerHTML = template;
        }

        // ✅ Attach delete listener here (after element exists)
        const deleteBtn = document.querySelector('#deleteBtn') as HTMLButtonElement | null;

        //null checks
        if (deleteBtn !== null && postIdTs !== null) {
            deleteBtn.addEventListener('click', async (): Promise<void> => {
                await deletePostDetailsTs(postIdTs);
            });
        }

        return foundPost;

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

async function deletePostDetailsTs(postIdTs: string): Promise<void> {
    try {

        const confirmDelete = confirm("Are you sure you want to delete?");


        if (confirmDelete) {
            // Delete Method
            const response = await fetch(baseURLDetailsTs + postIdTs, {
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
function returnHomeTs(): void {
    window.location.replace(homeURLDetailsTs);
}


// fetchSinglePostDetails() is async so you await it in DOMContentLoaded
window.addEventListener("DOMContentLoaded", async () => {
    const post: Post | void = await fetchSinglePostDetails();
    console.log(post);
});