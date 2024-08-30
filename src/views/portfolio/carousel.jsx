import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({data, darkMode}) => {
  var settings = {
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 6000,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: 'div',
    cssEase: 'ease',
  };

  
    return (
      <Slider {...settings}>
        {data.list.map((skill,i) => {
          return (
          <div className="slide flex flexDirectionColumn gp-lg" key={i}>
            <div className="portfolio-sub-title">{skill.title}</div>
            <div className="skill-container gp-sm">
              {skill.skills.map((skills) => {
                return(
                  <div className="skill-list">
                    <div >
                      {skills.title}
                    </div>
                    <div className={`skill-level-track ${darkMode ? 'track-dark': 'track-light'}`}>
                      <div className={`skill-level-fill ${darkMode ? 'fill-dark': 'fill-light'}`} style={{width: skills.level}}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </Slider>
    );
  };

  export default Carousel