import { useState} from "react";
import {useHistory} from "react-router-dom";
import galleryService from "../services/GalleryService";

export default function CreateGalleryPage() {
    const history = useHistory();
    const [newGallery, setNewGallery] = useState({
        name: "",
        description: "",
        image_url: [],
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await galleryService.create(newGallery);
            history.push("/my-galleries");
        } catch(err) {
            console.log("Error", err);
        }
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

                {/* {add edit} */}
                <button>Submit</button>
            </form>
        </div>
    )
}