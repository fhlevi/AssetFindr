import AxiosREST from 'axios';

class ConfigAxios {
    Axios: any;
    constructor(header: {} | undefined) {
        this.Axios = this.initialAxios({
            url: import.meta.env.VITE_APP_API_MOCK,
            token: null,
            header: header
        });
    }

    initialAxios({ url, token, header }: any) {
        return AxiosREST.create({
            baseURL: url,
            headers: {
                Authorization: token,
                'Content-Type': (header) ? header.contentType : 'application/json'
            },
            timeout: 120000
        });
    }
}

export default ConfigAxios;