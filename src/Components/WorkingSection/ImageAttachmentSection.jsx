import React, { useState } from 'react';

function ImageAttachmentSection() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <h2>Attach storage image</h2>
      <div className="attach-box" onClick={() => document.getElementById('fileInput').click()}>
        <label htmlFor="fileInput" className="attach-label">
          Click here to <br /> attach a file
        </label>
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileChange}
        />
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
      </div>
      <p className='iamge_p'>Attach.pdfs,.docx,with size less than 25mb.</p>
    </>

  )
}

export default ImageAttachmentSection