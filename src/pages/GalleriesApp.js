import {useState, useEffect} from "react";
import galleryService from "../services/GalleryService";
import {useDispatch, useSelector} from "react-redux";
import {galleriesSelector} from "../store/galleries/selector";

export default function GalleriesApp () {
    // const [galleries, setGalleries] = useState([]);
    const galleries = useSelector(galleriesSelector)

    const getGalleries = async() => {
        // const data = await galleryService.getGalleries();
        // setGalleries(data);
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

            <div>
                {/* <ul>
                    {galleries.data.map((gallery) => {
                        <li></li>
                    })}
                </ul> */}
            </div>

            <button>Load more</button>
        </div>
    );
}