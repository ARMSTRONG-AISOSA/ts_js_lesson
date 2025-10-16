var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const blogUpdateForm = document.querySelector('#blogUpdateForm');
// Input Fields
const titleField = document.querySelector('#titleUpdate');
const authorField = document.querySelector('#authorUpdate');
const categoryField = document.querySelector('#categoryUpdate');
const tagsField = document.querySelector('#tagsUpdate');
const contentField = document.querySelector('#contentUpdate');
// Button
const homeBtn = document.querySelector('#returnHome');
// .get('id')	Retrieves the value of id from the query string
const paramsUpdate = new URLSearchParams(window.location.search);
const postIdUpdate = paramsUpdate.get("id");
// Urls
let baseURLUpdate = "http://localhost:3005/posts/";
let homeURLUpdate = "http://127.0.0.1:8080/";
// Functions
// Function to fetch a single(specific) post from the Json-Server
function fetchSinglePostUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
        let template = '';
        // A guard clause: If the URL doesn’t have ?id=1 (or another valid post ID), postIdUpdate will be null, and this fetch will fail:
        if (!postIdUpdate) {
            console.error("No post ID found in the URL.");
            return;
        }
        try {
            const response = yield fetch(baseURLUpdate + `${postIdUpdate}`); //fetch data
            if (!response.ok) {
                throw new Error(`Failed to fetch post. Status: ${response.status}`);
            }
            const post = yield response.json(); // Parse data
            // console.log(post); //log data
            if (!post) {
                console.error("Post not found!");
                return;
            }
            // Exract data
            const fetchedTitle = post.title;
            const fetchedAuthor = post.author;
            const fetchedCategory = post.category;
            const fetchedTags = post.tags;
            const fetchedContent = post.content;
            // console.log(fetchedTags);
            // Null checks
            if (!titleField ||
                !authorField ||
                !categoryField ||
                !tagsField ||
                !contentField) {
                alert("Error: One or more fields are missing in the form!");
                return;
            }
            // by default, querySelector() returns: Element | null
            // and Element (the base type) doesn’t have a .value property — only HTMLInputElement and HTMLTextAreaElement do.
            // Use instanceof before accessing .value
            // to make TypeScript’s DOM type definitions certain that (ex. #titleUpdate exists) or is indeed an <input>
            // This is the safest way (runtime + compile-time protection):
            if (titleField instanceof HTMLInputElement &&
                authorField instanceof HTMLInputElement &&
                categoryField instanceof HTMLInputElement &&
                tagsField instanceof HTMLInputElement &&
                contentField instanceof HTMLTextAreaElement) {
                // Inject data into form field
                titleField.value = fetchedTitle;
                authorField.value = fetchedAuthor;
                categoryField.value = fetchedCategory;
                tagsField.value = Array.isArray(fetchedTags) ? fetchedTags.join(", ") : "";
                contentField.value = fetchedContent;
            }
        }
        catch (error) {
            console.error("Error fetching posts:", error);
        }
    });
}
// ".target" is only used in event handlers, not for direct element references.
// Null Check form field first
if (blogUpdateForm) {
    // Function to update the (specifically) fetched post
    blogUpdateForm.addEventListener("submit", (event) => __awaiter(this, void 0, void 0, function* () {
        event.preventDefault(); // stop form from reloading the page
        // 🗓️ Simple date format: YYYY-MM-DD
        const currentDate = new Date().toISOString().split("T")[0];
        // console.log(currentDate);
        // Null checks
        if (!titleField ||
            !authorField ||
            !categoryField ||
            !tagsField ||
            !contentField) {
            alert("Error: One or more fields are missing in the form!");
            return;
        }
        // Use instanceof before accessing .value
        // to make TypeScript’s DOM type definitions certain that (ex. #titleUpdate exists) or is indeed an <input>
        if (titleField instanceof HTMLInputElement &&
            authorField instanceof HTMLInputElement &&
            categoryField instanceof HTMLInputElement &&
            tagsField instanceof HTMLInputElement &&
            contentField instanceof HTMLTextAreaElement) {
            // type Partial<T> Make all properties in T optional
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
            };
            const response = yield fetch(baseURLUpdate + postIdUpdate, {
                // method: "PUT", //Updates all field and deletes the others 
                method: "PATCH", // only update provided fields
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatePost),
            });
            if (response.ok) {
                alert("Post updated successfully!");
            }
            else {
                console.error("Failed to update post:", response.status);
            }
        }
    }));
}
// Return Home
if (homeBtn !== null) {
    homeBtn.addEventListener("click", () => {
        window.location.replace(homeURLUpdate);
    });
}
// Fetch post and load into form on load
window.addEventListener("DOMContentLoaded", function fetchPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield fetchSinglePostUpdate();
    });
});
