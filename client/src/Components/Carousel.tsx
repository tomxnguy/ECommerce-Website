import { useCallback, useEffect, useState } from 'react';
import './Carousel.css';

type Props = {
  carouselImages: string[];
};

export default function Carousel({ carouselImages }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextPhoto = useCallback(() => {
    const nextIndex = (activeIndex + 1) % carouselImages.length;
    setActiveIndex(nextIndex);
  }, [carouselImages, activeIndex]);

  useEffect(() => {
    const timeoutHandle = setTimeout(nextPhoto, 3000);
    return () => clearTimeout(timeoutHandle);
  }, [nextPhoto]);

  return (
    <div className="carousel-div flex w-full justify-center">
      <Banner srcimg={carouselImages[activeIndex]} />
    </div>
  );
}

type BannerProp = {
  srcimg: string;
};

function Banner({ srcimg }: BannerProp) {
  return <img className="carousel flex" src={srcimg} />;
}
