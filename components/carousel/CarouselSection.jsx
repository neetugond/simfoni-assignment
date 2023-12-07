import { useState } from 'react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import slide1 from '../../assets/carousel/slide1.jpg';
import slide2 from '../../assets/carousel/slide2.jpg';
import slide3 from '../../assets/carousel/slide3.jpg';
import slide4 from '../../assets/carousel/slide4.jpg';
import slide5 from '../../assets/carousel/slide5.jpg';

function CarouselSection() {
  const images = [slide1, slide2, slide3, slide4, slide5];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-black h-500" style={{ height: '600px' }}>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="d-block w-full h-full"
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
      >
        <GrCaretPrevious />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
      >
        <GrCaretNext />
      </button>
    </div>
  );
}

export default CarouselSection;
