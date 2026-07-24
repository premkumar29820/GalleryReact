import React from 'react';
import ReactDOM from 'react-dom/client';
import"./style.css"
import Imagetitle from './component/imagetitle';
import vacation from './asset/image/vacation.png';
import roadtrip from './asset/image/Road Trip.png';
import outfits from './asset/image/Outfit.png';
import gym from './asset/image/Gym.png';
import family from './asset/image/family.png';
import doc from './asset/image/Document.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
function ImageCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <p><span>Title:</span> {props.name}</p>
      <p><span>Year:</span> {props.year}</p>
    </div>
  )
}

var imagecard=[
  {
    image:vacation,
    name: "Vacation",
    year:"2020"
  },

  {
    image:family,
    name: "Family",
    year:"2026"
  },

  {
    image:roadtrip,
    name: "RoadTrip",
    year:"2023"
  },
  {
    image:gym,
    name: "Gym",
    year:"2026"
  },

  {
    image:outfits,
    name: "Outfits",
    year:"2026"
  },
  {
    image:doc,
    name: "Document",
    year:"2025"
  }
]
 
root.render(
  
   <div>
     <Imagetitle></Imagetitle>

    <span className="gallery">
      {imagecard.map((item) => (
        <ImageCard
          image={item.image}
          name={item.name}
          year={item.year}
        />
      ))}
    </span>
   </div>
   

);

