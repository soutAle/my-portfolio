export const getGridColumnsClass = (columns) => {
    switch (columns) {
        case 1: return "grid-cols-1";
        case 2: return "grid-cols-1 sm:grid-cols-2";
        case 3: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
        case 4: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        default: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }
};
