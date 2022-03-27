let bookmarks = [];
let bookMarksList = document.getElementById("bookmarksList");
let siteName = document.getElementById("siteNameInput");
let siteNameErr = document.getElementById("siteNameErrMsg");
let siteUrl = document.getElementById("siteUrlInput");
let siteUrlErr = document.getElementById("siteUrlErrMsg");

function createBookMarks(bookmarks) {
    for (let site of bookmarks) {
        let siteList = document.createElement("li");
        siteList.id = site.bookmarkId;
        siteList.classList.add("bookmarkcontainer", "mt-3", "ml-0");
        bookMarksList.appendChild(siteList);

        let siteName = document.createElement("h1");
        siteName.textContent = site.name;
        siteName.classList.add("h5");
        siteList.appendChild(siteName);

        let siteUrl = document.createElement("a");
        siteUrl.href = site.url;
        siteUrl.target = "_blank";
        siteUrl.textContent = site.url;
        siteUrl.classList.add("text-primary", "h5");
        siteList.appendChild(siteUrl);
    }
}

function addBookmark(bookmarks) {
    if (siteName.value === "") {
        siteNameErr.textContent = "Required*";
    }
    if (siteUrl.value === "") {
        siteUrlErr.textContent = "Required*";
    }
    if (siteName.value !== "" && siteUrl.value !== "") {
        let name = siteName.value;
        let url = siteUrl.value;
        let id = "bookmark" + (bookmarks.length + 1);
        bookmarks.push({
            bookmarkId: id,
            name: name,
            url: url
        });
        bookMarksList.textContent = "";
        createBookMarks(bookmarks);
    }
}
let bookmarkFormEl = document.getElementById("bookmarkForm");
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark(bookmarks);
});
siteName.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErr.textContent = "Required*";
    } else {
        siteNameErr.textContent = "";
    }
});
siteUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErr.textContent = "Required*";
    } else {
        siteUrlErr.textContent = "";
    }
});