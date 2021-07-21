import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Webcam() {
  const [webcams, setWebcams] = useState("");
  const { parkCode, stateCode, parkId } = useParams();
  const recentSearch = useSelector((state) =>
    state.recentSearch.find((search) => {
      return search.id === parkId;
    })
  );

  useEffect(() => {
    const getWebcams = async () => {
      const url = `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&stateCode=${stateCode}&limit=10&api_key=9LM6ZhHeG6sKKnKjV5pzSRPS8b0DGfghndyl6m9a`;

      const webcamsJson = await fetch(url);
      const webcamsData = await webcamsJson.json();
      setWebcams(webcamsData);
    };

    getWebcams();
  }, []);

  return (
    
    <div container style={{ backgroundColor: "#4a9557" }}>
    
        <img src={recentSearch.imageUrl}/>
        {webcams?.data?.map((webcam) => {
          return (
          <div>
              
              <a href={webcam.url}>{webcam.title}</a>
              {webcam.description}
           </div>
          );
        })}
      </div>
      
   
  );
}
