const ImageItem = ({ imageDetails, setRandomImage, checkingImage }) => {
  const { thumbnailUrl, imageUrl } = imageDetails;

  return (
    <li className="thumbnail-container">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="thumbnail-image"
        onClick={() => {
          checkingImage(imageUrl);
        }}
      />
    </li>
  );
};

export default ImageItem;
