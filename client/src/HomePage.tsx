import Carousel from './Carousel';
import Header from './Header';

export default function HomePage() {
  const carouselImages = [
    './hiking-carousel-1.jpeg',
    './hiking-carousel-2.jpeg',
    './hiking-carousel-3.jpeg',
    './hiking-carousel-4.jpeg',
    './hiking-carousel-5.jpeg',
  ];

  return (
    <div>
      <Header />
      <Carousel carouselImages={carouselImages} />
    </div>
  );
}
