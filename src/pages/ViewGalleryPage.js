import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { gallerySelector } from '../store/galleries/selector';
import { useEffect, useState } from 'react';
import {addComment, getGallery} from "../store/galleries/slice";

export default function ViewGalleryPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const gallery = useSelector(gallerySelector);
    const [comment, setComment] = useState({
        content: "",
    });

    useEffect(() => {
        dispatch(getGallery(id));
    }, [id, dispatch]);

    const handleSubmitComment = async() => {
        dispatch(addComment(comment, id));
    }
    
    return (
        <div>
            <h1>
                {gallery?.name}
            </h1>
            <p>
                {gallery?.description}
            </p>
            <div>
                <ul>
                    {gallery?.image_url.map((url) => {
                        <li>{url}</li>
                    })}
                </ul>
            </div>
            <hr />
            <h3>Comments</h3>
            <form onSubmit={handleSubmitComment}>
                <textarea 
                  required
                  rows="4" 
                  cols="50" 
                  placeholder="Write a comment..."
                  value={comment.content}
                  onChange={({target}) => {setComment({content: target.value})}} />
                <br />
                <button>Post</button>
            </form>
        </div>
    );
}
