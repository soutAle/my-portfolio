export const getGridColumnsClass = (columns) => {
    switch (columns) {
        case 1: return "grid-cols-1";
        case 2: return "grid-cols-2";
        case 3: return "grid-cols-3";
        case 4: return "grid-cols-4";
        default: return "grid-cols-1";
    }
}