import React, { Component } from "react";
import Slider from "react-slick";

export default class ImageGallerySlider extends Component {
    render() {
        const sliderSettings = {
            dots: true,
            arrow: true,
            infinite: false,
            slidesToShow: 1,
            // slidesToScroll: 1,
            // centerMode: true,
            draggable: true,
            infinite: true
        };

        return (
            <div className="image-gallery-slider">
                <Slider {...sliderSettings}>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery0.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery1.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery2.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery3.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery4.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery5.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery6.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery7.jpg")} />
                    </div>
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery8.jpg")} />
                    </div>             
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery9.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery10.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery11.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery12.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery13.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery14.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery15.jpg")} />
                    </div>    
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery16.jpg")} />
                    </div>  
                    <div className="gallery-slider">
                        <img src={require("../../assets/images/gallery/gallery17.jpg")} />
                    </div>  

                </Slider>
            </div>
        )
    }
}