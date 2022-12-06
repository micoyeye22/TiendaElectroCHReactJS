import React from "react";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imageURL} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
                <p>Stock: {item.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail;