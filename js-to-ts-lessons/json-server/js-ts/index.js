
async function fetchPosts() {
    let url = "http://localhost:3005/posts";

    try {
        // fetch returns a Response object, not raw JSON
        const response = await fetch(url);
        console.log("Raw Response:");
        console.log(response);

        // Convert Response body to JSON
        const posts = await response.json();
        console.log("Parsed data");
        console.log(posts);

        return posts;

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// fetchPosts() is async so you await it in DOMContentLoaded
window.addEventListener("DOMContentLoaded", async () => {
    const posts = await fetchPosts();
    // console.log(posts);

});