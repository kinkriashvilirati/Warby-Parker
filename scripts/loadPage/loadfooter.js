export async function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) {
    return;
  }

  try {
    const response = await fetch(
      new URL("../../htmlComponents/footer.html", import.meta.url).href
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const headerHtml = await response.text();
    footerPlaceholder.innerHTML = headerHtml;
  } catch (error) {
    console.error("Error loading footer:", error);
  }
}

loadFooter();
