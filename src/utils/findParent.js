export default function findParent(el, key) {
    if (el.getAttribute(`data-${key}`) !== null) {
        return el;
    }

    return findParent(el.parentElement, key);
}
