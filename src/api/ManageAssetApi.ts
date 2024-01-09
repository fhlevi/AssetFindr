import ConfigAxios from "@/plugins/configAxios";

class ManageAssetApi extends ConfigAxios {
    uri: string;
    constructor (header: {} | undefined) {
        super(header)
        this.uri = '/manage-asset'
    }

    getManageAsset(keyword: string) {
        return this.Axios.get(`${this.uri}?keyword=${keyword}`);
    }
}

export default ManageAssetApi;