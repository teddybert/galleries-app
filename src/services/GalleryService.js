import HttpService from "./HttpService";

class GalleryService extends HttpService {
    async getGalleries() {
        const {data} = await this.client.get("/galleries");
        return data;
    }
    async getGallery(id) {
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
    async deleteGallery(id) {
        const {data} = await this.client.delete(`/galleries/${id}`);
        return data;
    }
    async addComment(comment, gallery_id) {
        const {data} = await this.client.post(`/galleries/${gallery_id}/comments`, comment);
        return data;
    }
}

const galleryService = new GalleryService();
export default galleryService;
