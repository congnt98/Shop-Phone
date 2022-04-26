import React from "react";
import Discount from "./section/content/discount";
import SliderShow from "./section/sliderhow/sliderShow";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <section className="homepage">
                    <SliderShow />
                    <Discount />
                </section>
            </>
        )
    }
}
export default HomePage