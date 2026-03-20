export let comandas = [];

let currentID = 1;

export function nextID() {
    const id = String(currentID).padStart(4, '0');
    currentID++;
    return `ORD-${id}`;
}
