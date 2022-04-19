import HttpService from "./HttpService";

class GalleryService extends HttpService {
    async create(galleryData) {
        const {data} = await this.client.post("/create", galleryData);
        return data;
    }
}

const galleryService = new GalleryService();
export default galleryService;