function toggleVisibility(newsId) {
    var element = document.getElementById(newsId);
    if (element.style.display === "none") {
        element.style.display = "block"; // If the element is hidden, show it
    } else {
        element.style.display = "none";  // If the element is shown, hide it
    }
}
