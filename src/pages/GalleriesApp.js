import {useState, useEffect} from "react";
import galleryService from "../services/GalleryService";

export default function GalleriesApp () {
    const [galleries, setGalleries] = useState([]);

    const getGalleries = async() => {
        const data = await galleryService.getAll();
        setGalleries(data);
    }

    useEffect(() => {
        getGalleries();
    }, []);

    return (
        <div>
            <div>
                <br/>
                <input type="text" />
                <button type="button">Filter</button>
            </div>

            <h2>Galleries - Home Page</h2>
            <hr/>
            <ul style={{listStyle: 'none',}}>
                {galleries.map((gallery) => {
                    <li>
                        <h3>{gallery.name}</h3>
                        <p>{gallery.description}</p>
                        {/* images */}
                    </li>
                })}
            </ul>

            <button>Load more</button>
        </div>
    );
}