document.addEventListener("DOMContentLoaded", async () => {
    const footerHost = document.getElementById("site-footer");
    if (!footerHost) return;

    try {
        const response = await fetch("footer.html");
        if (!response.ok) {
            throw new Error(`Failed to load footer: ${response.status}`);
        }
        footerHost.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
});
