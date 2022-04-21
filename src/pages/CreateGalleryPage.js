import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import galleryService from "../services/GalleryService";

export default function CreateGalleryPage() {
    const history = useHistory();
    let {id} = useParams();
    const [newGallery, setNewGallery] = useState({
        name: "",
        description: "",
        image_url: [], //image_url: [...imageUrl],
    });
    // const [imageUrl, setImageUrl] = useState([]);

    const getGallery = async() => {
        if(!id) {
            return;
        }
        const gallery = galleryService.get(id);
        setNewGallery(gallery);
    }
    useEffect(() => {
        getGallery();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!id) {
            try {
                await galleryService.create(newGallery);
                history.push("/my-galleries");
            } catch(err) {
                console.log("Error", err);
            }
        } else {
            await galleryService.edit(id, newGallery);
        }
    }

    const handleCancel = async() => {
        history.push("/my-galleries");
    }
    const handleAddURL = async() => {}

    return (
        <div>
            <h2>Create New Gallery</h2>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Name"
                  value={newGallery.name}
                  required
                  onChange={({target}) => {
                      setNewGallery({...newGallery, name: target.value})
                  }} />
                <br />

                <input
                  type="text" 
                  placeholder="Description"
                  maxLength="1000"
                  value={newGallery.description}
                  onChange={({target}) => {
                      setNewGallery({...newGallery, description: target.value})
                  }} />
                <br />

                <div>
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={newGallery.image_url}
                      required
                      onChange={({target}) => {
                          setNewGallery({...newGallery, image_url: target.value})
                      }} />
                     <button onClick={handleAddURL}>Add another URL</button>
                </div>
                <br/>

                <button>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}