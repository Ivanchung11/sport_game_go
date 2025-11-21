const BASE_URL = 'http://localhost:3000';
export const itemAPI = {
    getItems: async () => {
        const response = await fetch(`${BASE_URL}/items`, {
            method: 'GET',
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to fetch items');
        return data; // return the fetched items

    }
};