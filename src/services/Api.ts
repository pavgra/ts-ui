import axios from 'axios';

class Api {
    async get(url: string) {
        const { data } = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
        });
        return data;
    }

    async post<T>(url: string, body: any) {
        const { data } = await axios.post<T>(
            url,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        return data;
    }
}

const api = new Api();

export default api;
