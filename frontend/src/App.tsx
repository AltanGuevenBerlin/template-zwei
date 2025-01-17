import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import GroceryshopGallery from "./GroceryshopGallery.tsx";

function App() {

    const[value, setValue] = useState<Groceryshop[]>([])

    function getHello() {
        axios.get("/api/groceryshop")
            .then(response => setValue(response.data))
    }

    useEffect(() => {
        getHello()
    }, [])

  return (
    <>
        <GroceryshopGallery/>
    </>
  )
}
export default App
