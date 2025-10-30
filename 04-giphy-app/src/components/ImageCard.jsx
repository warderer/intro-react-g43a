const ImageCard = ({ url, title }) => {
  return (
    <div className='image-container'>
      <img src={url} alt={title} />
    </div>
  )
}
export default ImageCard
