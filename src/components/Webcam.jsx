import { useEffect } from "react"
import { useState } from "react"


export default function Webcam({parkId,stateCode}) {
    const [webCam,setwebCam]=useState('')
    // console.log(stateCode,parkId)
      useEffect(() => {
    (async function () {
      await fetch(
        `https://developer.nps.gov/api/v1/webcams?parkCode=${parkId}&stateCode=${stateCode}&api_key=9LM6ZhHeG6sKKnKjV5pzSRPS8b0DGfghndyl6m9a`
      )
        .then((response) => response.json())
        .then((natParkData) => {
        //   console.log(natParkData);
          setwebCam(natParkData.data.url);
        });
    })();
  }, [setwebCam]);
    console.log("webcam",webCam)
    return (
        <div>
           {/* {webCam !== ''?<img src="${webCam}" alt="img" />:<h3> no webcam available</h3> } */}
            
            
        </div>
    )
}
