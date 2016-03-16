export default function findParent(el) {
    if (el.dataset && el.dataset.handler) {
        return el;
    }

    return findParent(el.parentElement);
}
