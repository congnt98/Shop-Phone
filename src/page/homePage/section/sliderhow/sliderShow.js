import React from "react";
import Slider from "react-slick";
import '../sliderhow/slidershow.scss'
import "slick-carousel/slick/slick.css";
class SliderShow extends React.Component {
    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // speed: 2000,
            // autoplaySpeed: 2000,
            // cssEase: "linear"
        };
        return (
            <>
                <section className="slider-show">
                    <div className="slider-content">
                        <div>
                            <Slider {...settings}>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtIGSourppGumGmslTaLmjF4HKW5I0Edc8Q&usqp=CAU" alt="abc " />
                                </div>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBq2ttIY50hjKX6UgrBmfBHUBCOU4afKAqw&usqp=CAU" alt='d' />                                </div>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9d97zb10w8KacYWNHbrTgS7T-rNNrXauvA&usqp=CAU" alt="aebc" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default SliderShow