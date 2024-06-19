import React, { useEffect } from 'react';
import './styles/gallerypage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GalleryPage = ({ photos, onPhotoClick,setPhotos }) => {


function removePhotoHandler(photo){
  toast.success("File Removed Successfully!")
 let newPhoto= photos.filter((pho) => pho.id !== photo.id);
 setPhotos(newPhoto)
}
useEffect(()=>{

},[photos])



  if(photos.length <=0){
    return (
      <div className='wrapper'>
{/* <div className='empty-container'> No images uploaded yet</div> */}
<div className='empty-container'>
  <img src='https://govtartsandcommercecollege.com/pdf/notup.png'></img>
</div>
</div>
    );
  };


  return (
    <div className="gallery-page">
  
   
      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-thumbnail" >
          <div className='center-div'>
          
            <img  className='cross' src='https://cdn-icons-png.freepik.com/512/1828/1828843.png' onClick={ () =>removePhotoHandler(photo)} ></img>
      
            <img src={photo.thumbnailUrl} alt={photo.title} className='gallery-img' onClick={() => onPhotoClick(photo)} />
            </div>
            <div className='gallery-dec'>
              <h3>Title : {photo.title}</h3>
              <p>Description : {photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
