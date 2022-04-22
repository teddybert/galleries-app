import HttpService from "./HttpService";

class CommentService extends HttpService {
    async addComment(comment, gallery_id) {
        const {data} = await this.client.post(`/galleries/${gallery_id}/comments`, comment);
        return data;
    }
    async deleteComment(comment) => {
        const { data } = await this.client.delete(`/comment/${comment}`);
        return data;
    }
}

const commentService = new CommentService();
export default commentService;
