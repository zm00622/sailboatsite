import '../Slider.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

function Gallery() {
  return <ImageSlider slides={SliderData} />;
}

export default Gallery;

