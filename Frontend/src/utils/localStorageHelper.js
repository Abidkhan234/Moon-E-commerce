// Save item
export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error("Error saving to localStorage", err);
    }
};

// Get item
export const getItem = (key, fallback = null) => {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : fallback;
    } catch (err) {
        console.error("Error reading from localStorage", err);
        return fallback;
    }
};

// Remove item
export const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.error("Error removing from localStorage", err);
    }
};

// Clear all
export const clearStorage = () => {
    try {
        localStorage.clear();
    } catch (err) {
        console.error("Error clearing localStorage", err);
    }
};

// Update item (merge with existing if object)
export const updateItem = (key, newValue) => {
    try {
        const current = getItem(key);
        if (current && typeof current === "object" && typeof newValue === "object") {
            const updated = { ...current, ...newValue };
            setItem(key, updated);
        } else {
            setItem(key, newValue);
        }
    } catch (err) {
        console.error("Error updating localStorage", err);
    }
};

// Check if exists
export const hasItem = (key) => {
    try {
        return localStorage.getItem(key) !== null;
    } catch (err) {
        console.error("Error checking localStorage", err);
        return false;
    }
};
