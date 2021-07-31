import axios from 'axios';

class Api {
    async get(url: string) {
        const { data } = await axios.get(url);
        return data;
    }

    async post(url: string, body: any) {
        const { data } = await axios.post(url, body);
        return data;
    }
}

const api = new Api();

export default api;
