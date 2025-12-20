import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

function Carousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
  };

  return (
    <Slider className={styles.sliderContainer} {...settings}>
      <div className={styles.imgContainer}>
        <img alt="Hamburger" src="../../public/recipe-images/burger.jpg" />
      </div>
      <div className={styles.imgContainer}>
        <img
          alt="Spaghetti Bolognese"
          src="../../public/recipe-images/spaghetti.jpg"
        />
      </div>
      <div className={styles.imgContainer}>
        <img
          alt="Chicken Parmesan"
          src="../../public/recipe-images/chicken-parmesan.jpg"
        />
      </div>
      <div className={styles.imgContainer}>
        <img alt="Oatmeal" src="../../public/recipe-images/oatmeal.jpg" />
      </div>
      <div className={styles.imgContainer}>
        <img alt="Steak" src="../../public/recipe-images/steak.jpg" />
      </div>
    </Slider>
  );
}

export default Carousel;
