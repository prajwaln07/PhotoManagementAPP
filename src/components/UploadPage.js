import React, { useState } from 'react';
import './styles/uploadPage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.info("File Selected Successfully!");

const UploadPage = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    notify()
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please  Select the File!")
      return;
    }
    // Simulated upload (in a real app, use a backend or external storage service)
;
    const photoData = {
      file,
      title,
      description
    };
    onUpload(photoData);
    // Reset form after upload
    setFile(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="upload-page">
     <div className="form-box">

      <form onSubmit={handleSubmit} className='upload-form'>
              <p className='form-para'>Upload Photo:</p> 
              <div className='center'>

             <label className='file-upload'>
        <input type="file" title=' ddd'  onChange={handleFileChange} id='inputFile'/>
      
        </label>

        </div>
<br></br>
<br></br>
        <label>
        Title:
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <br></br>
        <br></br>
        <label>
        Description:
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </label>
        <button type="submit">Upload</button>
      </form>
</div>
    </div>
  );
};

export default UploadPage;
