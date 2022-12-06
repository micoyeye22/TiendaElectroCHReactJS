import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../json/productos.json"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categoryId ? arrayProductos.filter(item => item.category === categoryId) : arrayProductos);
        }, 500)
      })
    
      promise.then((data) => {
        setItems(data)
      })
    }, [categoryId]);
    

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;