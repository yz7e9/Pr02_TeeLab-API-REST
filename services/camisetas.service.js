import { camisetas } from "../data/camisetas.js";

export function getAll() {
    return camisetas;
}

export function getById(id) {
    return camisetas.find(s => s.id === id);
}
