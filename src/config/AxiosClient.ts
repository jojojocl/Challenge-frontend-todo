import axios, { AxiosInstance } from 'axios';

const AxiosClient = (): AxiosInstance => {
    const client = axios.create({
        baseURL: "https://my-json-server.typicode.com/AlvaroArratia/",
        paramsSerializer: {
            indexes: null,
        },
    });

    return client;
};

export default AxiosClient;