const RandomImage = ({ imagesList, setRandomImage, setCurrent, current }) => {
  const randomIndex = Math.ceil(Math.random() * (imagesList.length - 1));
  setCurrent(imagesList[randomIndex].imageUrl);
  setRandomImage(false);
  return <div className="matchImage-container"></div>;
};

export default RandomImage;
