import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import beauty from "../images/brand/beauty.jpg";
import fragness from "../images/brand/fragness.jpg";
import game from "../images/brand/gaming.jpg";
import laptop from "../images/brand/laptop.jpg";
import men from "../images/brand/men-fashion.jpg";
import mobile from "../images/brand/mobiles.jpg";
import sport from "../images/brand/sports.jpg";
import toy from "../images/brand/toy.jpg";
import tv from "../images/brand/tv.jpg";

const Brandslider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src={beauty} height="100" width="100"/>
        </div>
        <div>
          <img src={fragness} height="100" width="100"/>
        </div>
        <div>
          <img src={game} height="100" width="100"/>
        </div>
        <div>
          <img src={laptop} height="100" width="100"/>
        </div>
        <div>
          <img src={men} height="100" width="100"/>
        </div>
        <div>
          <img src={sport} height="100" width="100"/>
        </div>
        <div>
          <img src={toy} height="100" width="100"/>
        </div>
        <div>
          <img src={tv} height="100" width="100"/>
        </div>
        <div>
          <img src={mobile} height="100" width="100"/>
        </div>
        <div>
          <img src={toy} height="100" width="100"/>
        </div>
        <div>
          <img src={tv} height="100" width="100"/>
        </div>
        <div>
          <img src={mobile} height="100" width="100"/>
        </div>
      </Carousel>
    </div>
  )
}
export default Brandslider;
