// create your App component here

import React, {useEffect, useState} from 'react'

 function App() {
    const [image, setImage] = useState([]);
    const [isLoad, setIsload] =useState(false);

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res=> res.json())
        .then(data=> {
            setImage(data)
            setIsload(true)})
    },[])

    if(!isLoad) {
        return <p>Loading....</p>
    }
  return (
    <div id='image'>
        <h3>Cute Dogs</h3>
        <img src={image.message} alt="A Random Dog"></img>
    </div>
  )
}
export default App;