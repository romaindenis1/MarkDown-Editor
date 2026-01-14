document.addEventListener('DOMContentLoaded', function() {
    showPreview();
}, false);

document.getElementById('editor').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});

const showPreview = () => {
    const md = document.getElementById("editor").value
    const html = markdown.parse(md)
    document.getElementById("preview").innerHTML = html
}

var area = document.getElementById("editor");
area.addEventListener('input', showPreview, false);
