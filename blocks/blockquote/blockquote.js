export default async function decorate(block) {
    const quoteDiv = block.querySelector(':scope > div > div');
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = quoteDiv.innerHTML;
    quoteDiv.replaceWith(blockquote);
}