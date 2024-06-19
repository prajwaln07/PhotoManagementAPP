import React, { useEffect, useState } from 'react';
import UploadPage from './components/UploadPage';
import GalleryPage from './components/GalleryPage';
import PhotoDetailsPage from './components/PhotoDetailsPage';
import './App.css';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InitialData from './InitialData'


const App = () => {
  const notify = () => toast.success("File uploaded Successfully");
  const [photos, setPhotos] = useState(InitialData);
  const [detailPage,setDetailPage]=useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPhotoPresent,setIsPhotoPresent]=useState(false);
  const navigate = useNavigate();

  // Function to handle photo upload
  const handleUpload = (photoData) => {
    const reader = new FileReader();
    reader.onload = () => {
      notify();
      const newPhoto = {
        id: photos.length + 1,
        title: photoData.title,
        description: photoData.description,
        thumbnailUrl: reader.result, 
        fullSizeUrl: reader.result 
      };
      setPhotos([...photos, newPhoto]);
    };
    reader.readAsDataURL(photoData.file);
  };

  const handlePhotoClick = (photo) => {
    console.log("clicke on photo")
    navigate('/details');
    setSelectedPhoto(photo);
  };


  const handleBackToGallery = () => {
    setSelectedPhoto(null);
    navigate('/gallery');
  };
  useEffect(()=>{
  if(photos.length>0){
    setIsPhotoPresent(true);
  }
  else{
    setIsPhotoPresent(false);
  }
  },[photos])

  return (
    <div className="App">

        <Navbar isPhotoPresent ={isPhotoPresent}></Navbar>

        <Routes>
          <Route path='/' element ={<UploadPage onUpload={handleUpload} />}/> 
         
          <Route path='/gallery' element ={<GalleryPage photos={photos} onPhotoClick={handlePhotoClick} setPhotos={setPhotos} />}/> 
        
          { false &&
          <Route path='/details' element ={<PhotoDetailsPage photo={selectedPhoto} onBack={handleBackToGallery}  />}/> 
          }
        </Routes>
{/*       
      {!selectedPhoto && <UploadPage onUpload={handleUpload} />}
      {!selectedPhoto && <GalleryPage photos={photos} onPhotoClick={handlePhotoClick} />}
     */}
     {selectedPhoto && <PhotoDetailsPage photo={selectedPhoto} onBack={handleBackToGallery} />} 
    </div>
  );
};

export default App;
