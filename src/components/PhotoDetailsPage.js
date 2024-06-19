import React from 'react';
import './styles/photoDetailsPage.css'
const PhotoDetailsPage = ({ photo, onBack }) => {
  return (
    <div className="photo-details-page">
     
      <div className="photo-details">
            <img src={photo.fullSizeUrl} alt={photo.title} />
            
        <h3> Title :  {photo.title}</h3>
        <p> Description : {photo.description}</p>
        <button className='btn' onClick={onBack}>Back to Gallery</button>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
