import HttpService from "./HttpService";

class GalleryService extends HttpService {
    async getAll() {
        const {data} = await this.client.get("/galleries");
        return data;
    }
    async get(id) {
        const {data} = await this.client.get(`/galleries/${id}`);
        return data;
    }
    async create(galleryData) {
        const {data} = await this.client.post("/create", galleryData);
        return data;
    }
    async edit(id, galleryData) {
        const {data} = await this.client.post(`/edit-gallery/${id}`, galleryData);
        return data;
    }
    async delete(id) {
        const {data} = await this.client.delete(`/galleries/${id}`);
        return data;
    }
}

const galleryService = new GalleryService();
export default galleryService;