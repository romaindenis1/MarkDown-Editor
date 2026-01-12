document.getElementById('convertButton').addEventListener('click', () => {
    const markdownText = document.getElementById('markdownInput').value; // Get input
    const htmlOutput = window.markdown.parse(markdownText); // Call parse function
    document.getElementById('preview').innerHTML = htmlOutput; // Display HTML output
});
