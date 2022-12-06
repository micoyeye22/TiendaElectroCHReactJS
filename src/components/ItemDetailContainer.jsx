import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../json/productos.json"
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 500);
        });

        promesa.then((data) => {
            setLoading(false)
            setItem(data);
        })
    }, [id]);

    return (
        <div className="container my-5">
            {
            loading ? 
            <Loader /> :
            <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer;