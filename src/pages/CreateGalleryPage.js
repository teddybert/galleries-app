import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import galleryService from "../services/GalleryService";

export default function CreateGalleryPage() {
    const history = useHistory();
    let {id} = useParams();
    const [newGallery, setNewGallery] = useState({
        name: "",
        description: "",
        image_url: [],
    });
    const [newImages, setNewImages] = useState([{
        url: ""
    }]);

    const handleRemoveClick = index => {
        const list = [...newImages];
        list.splice(index, 1);
        setNewImages(list);
    }

    const handleAddClick = () => {
        setNewImages([...newImages, { url: "" }]);
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...newImages];
        list[index][name] = value;
        setNewImages(list);
    }

    const getGallery = async() => {
        if(!id) {
            return;
        }
        const gallery = galleryService.get(id);
        setNewGallery(gallery);
    }
    useEffect(() => {
        getGallery();
    }, [getGallery]);

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
                    {newImages && newImages.map((img, i) => {
                        return (
                            <div>
                                <input
                                  required
                                  value={img.url}
                                  placeholder="Image URL"
                                  key={i}
                                  onChange={(e) => handleInputChange(e, i)}
                                />
                                <span>
                                    {newImages?.length !== 1 && 
                                      <button onClick={() => handleRemoveClick(i)}>Remove</button>}
                                </span>
                                <div>
                                    {newImages?.length - 1 === i &&
                                      <button onClick={handleAddClick}>Add more</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <br/>

                <button>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}
