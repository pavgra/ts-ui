import axios from 'axios';

class Api {
    async get(url: string) {
        const { data } = await axios.get(url);
        return data;
    }
}

const api = new Api();

export default api;
