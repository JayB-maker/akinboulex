import { LazyLoadImage } from "react-lazy-load-image-component";

interface ILazyLoadProps {
  alt?: string;
  imagesrc: string;
  height?: string;
  width?: string;
}
const LazyLoad = (props: ILazyLoadProps) => {
  const { imagesrc, alt, height, width } = props;
  return (
    <LazyLoadImage
      alt={alt}
      src={imagesrc} // use normal <img> attributes as props
      width={width}
      height={height}
      threshold={100}
      effect="blur"
    />
  );
};

export default LazyLoad;
