import './App.css'
import axios = require("axios");
import {useEffect, useState} from "react";

function App() {

    const[value, setValue] = useState<string("")

    function getHello() {
        axios.get("/api/groceryshop")
            .then(response => setValue(response.data))

    }

    useEffect(() => {
        getHello()
    },[])

  return (
    <>
        <h1>(value</h1>

    </>
  )
}

export default App
