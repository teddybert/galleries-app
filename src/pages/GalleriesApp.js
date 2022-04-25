import {useState, useEffect} from "react";
// import galleryService from "../services/GalleryService";
import {useDispatch, useSelector} from "react-redux";
import {galleriesSelector} from "../store/galleries/selector";
// import ViewGalleryPage from "./ViewGalleryPage";
import {getGalleries} from "../store/galleries/slice";

export default function GalleriesApp () {
    // const [galleries, setGalleries] = useState([]);
    const dispatch = useDispatch();
    const galleries = useSelector(galleriesSelector)

    // const getGalleries = async() => {
    //     // const data = await galleryService.getGalleries();
    //     // setGalleries(data);
    // }

    useEffect(() => {
        dispatch(getGalleries());
    }, [dispatch]);

    return (
        <div>
            <div>
                <br/>
                <input type="text" />
                <button type="button">Filter</button>
            </div>

            <h2>Galleries - Home Page</h2>
            <hr/>
            <ul>
                {galleries.data.map((gallery, id) => {
                return <div>
                    <li key={id}> {gallery.name} </li>
                </div>
            })}
            </ul>
            
            <button>Load more</button>
        </div>
    );
}
