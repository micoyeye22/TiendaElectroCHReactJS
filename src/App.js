import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    return <div>
        <NavBar />  
        <ItemListContainer greeting={"test"} />
    </div>
}

export default App;