import { useState, useRef } from "react";
import LoadingSpinner2 from "./LoadingSpinner2";
import { uploadImage } from "./uploadImage";

export const PostImage = ({ addImageSuccessful }) => {
  // This code sends an API to a 3rd party library that uploads and serves the image
  // Added a spinner for user-experience and this component returns an image {fileURL}
  // Do not touch any of the code

  const imageInput = useRef();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e) => {
    try {
      const { fileUrl } = await uploadImage.uploadFile(e.target.files[0], {
        onProgress,
      });
      imageInput.current.value = "";
      setImage(fileUrl);
      addImageSuccessful(fileUrl);
    } catch (e) {
      console.warn(`Error: ${e}`);
    }
    setIsLoading(false);
  };
  const onProgress = ({ progress }) => {
    setIsLoading(true);
    console.log(`File uploading: ${progress}% complete.`);
  };

  return (
    <div
      className="image-uploader"
      style={{
        backgroundImage: image ? `url(${image})` : "#f8f9fc",
        backgroundSize: "cover",
      }}
    >
      
      <label
  className={`image-button ${isLoading ? 'loading' : ''}`}
  style={{
    display: image ? 'none' : "block",
    border: isLoading ? 'none' : '#0266FF solid 1px', // Hide the border when isLoading is true
  }}
      >
        {isLoading ? <LoadingSpinner2 className='add-spinner' /> : <span>+ Add Image</span>}
        <input
        className="file"
          type="file"
          name="image_upload"
          onChange={handleImageUpload}
          ref={imageInput}
        />
      </label>
    </div>
  );
};

