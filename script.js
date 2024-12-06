const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    preview.innerHTML = marked.parse(markdownText);
});

markdownInput.value = "# Welcome!\n\nThis is a **live Markdown previewer coded by Quravat**.\n\n- Write Markdown on the left.\n- See the preview on the right.";
preview.innerHTML = marked.parse(markdownInput.value);
