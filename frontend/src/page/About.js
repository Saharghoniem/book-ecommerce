import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-w-3xl mx-auto mt-5">
      <Slider {...settings}>
        <div>
          <img
            src="https://res.cloudinary.com/dqvdzugy5/image/upload/v1682128570/book1_clu6xf.jpg"
            alt="Slide"

            className="w-full h-85 object-cover"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqvdzugy5/image/upload/v1682128573/book3_qqsjr1.jpg"
            alt="Slide"
            className="w-full h-85 object-cover"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqvdzugy5/image/upload/v1682128572/book2_zzcbbr.jpg"
            alt="Slid3"
            className="w-full h-85 object-cover"/>
        </div>
      </Slider>

      <div className="my-8">
        <p className="text-lg leading-7 mb-5">
          With a distinguished library book delivery service, patrons can easily request books and have them delivered straight to their doorstep, saving them time and effort.
        </p>
        <p className="text-lg leading-7">
          A distinguished library book delivery service increases accessibility for those who may not be able to physically visit a library, such as those with disabilities or those living in rural areas.
        </p>
        <p className="text-lg leading-7 mb-5">
          By accessing a distinguished library book delivery service, patrons can access a wider range of books and literature than what may be available in their local library.
        </p>
        <p className="text-lg leading-5">
          A distinguished library book delivery service can be a cost-effective solution for libraries looking to expand their services, as it can reduce the need for physical space and staffing.
        </p>
      </div>
    </div>
  );
};

export default About;





