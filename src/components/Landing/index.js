import React, { Component } from "react";
import StoryContentSlider from "../StoryContentSlider";
import ImageGallerySlider from "../ImageGallerySlider";

export default class Landing extends Component {
    componentDidMount() {
        console.log(window.innerWidth);
        window.addEventListener("resize", () => {
            console.log("resized!")
        });
    }
    render() {
        return (
            <div className="landing-container desktop">
                <div className="landing-content">

                    <div className="content cover">
                        <div className="cover-dim">
                            <div className="title-group">
                                <div className="cover-subtitle">새롬 + 혁우</div>
                                <div className="cover-maintitle">100일간의 이야기</div>
                            </div>
                        </div>
                    </div>

                    <div className="content content-first">
                        <div className="content-wrapper">
                            <div className="content-title">이야기의 시작</div>
                            <div className="content-slider">
                                {/* StoryContentSlider */}
                                <StoryContentSlider />
                            </div>
                        </div>
                    </div>

                    <div className="content content-second">
                        <div className="content-wrapper">
                            <div className="content-title">새롬이는?</div>
                            <div className="subcontent subcontent-first">
                                <div className="subcontent-video">
                                    {/* Video */}
                                    <iframe width="704" height="396" src="https://www.youtube.com/embed/UEYQSfzdd9I?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>       
                                </div>
                                <div className="subcontent-title">도수코급 포즈녀</div>
                                <div className="subcontent-description">다리가 길어보이는 사진을 건지길 좋아하는 새로미. <br /> 카메라 앞에선 다양한 모델포즈로 최고의 컷을 뽑아내죠.</div>
                            </div>

                            <div className="subcontent-separator" />

                            <div className="subcontent subcontent-second">
                                <div className="subcontent-left">
                                    <div className="text-group">
                                        <div className="subcontent-title">볼통통 귀여미</div>
                                        <div className="subcontent-description">언제나 동그란 입술과 볼살로 <br/>남친마음을 녹이는 귀여미죠!</div>
                                    </div>
                                </div>
                                <div className="subcontent-right">
                                    <div className="subcontent-image">
                                        {/* Image Long*/}
                                        <img src={require("../../assets/images/saerom-selfie.jpg")} />                                
                                    </div>
                                </div>
                            </div>

                            <div className="subcontent-separator" />

                            <div className="subcontent subcontent-third">
                                <div className="subcontent-left">
                                    <div className="subcontent-image">
                                        {/* Image Long */}
                                        <img src={require("../../assets/images/motorbike.jpg")} />
                                    </div>                          
                                </div>
                                <div className="subcontent-right">
                                    {/* Image Square */}
                                    <div className="subcontent-image">
                                        <img src={require("../../assets/images/helmet.jpg")} /> 
                                    </div>                                                       
                                    <div className="text-group">
                                        <div className="subcontent-title">스쿠터가 잘 어울리는 그녀</div>
                                        <div className="subcontent-description">쌩쌩달리는 스쿠터 뒤에 앉아<br/> 푸른 하늘을 보며 언제나 "좋다~~"를 외치는<br /> 그녀는 스쿠터 걸!</div>
                                    </div>
                                </div>                            
                            </div>

                            <div className="subcontent-separator" />

                            <div className="subcontent subcontent-fourth">
                                <div className="subcontent-grid">
                                    <div className="subcontent-grid-row">
                                        <div className="subcontent-grid-column">
                                            <div className="text-group">
                                                <div className="subcontent-title">먹방 여신</div>
                                                <div className="subcontent-description">따로 말할 필요 있니? <br /> 넌 먹을때가 제일 예뻐!</div>
                                            </div>
                                        </div>
                                        <div className="subcontent-grid-column">
                                            <div className="subcontent-image">
                                                {/* Image Square */}
                                                <img src={require("../../assets/images/drink.jpg")} />
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                    <div className="subcontent-grid-row">
                                        <div className="subcontent-grid-column">
                                            <div className="subcontent-image">
                                                {/* Image Square */}
                                                <img src={require("../../assets/images/fork.jpg")} />                                        
                                            </div>
                                        </div>
                                        <div className="subcontent-grid-column">
                                            <div className="subcontent-image">
                                                {/* Image Square */}
                                                <img src={require("../../assets/images/wine.jpg")} />
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>

                            <div className="subcontent-separator" />

                            <div className="subcontent subcontent-fifth">
                                <div className="subcontent-image">
                                    <img src={require("../../assets/images/saerom-giphy.gif")} />
                                </div>
                                <div className="text-group">
                                    <div className="subcontent-title">!!??!!??!</div>
                                    <div className="subcontent-description">..깝치지 말자...</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="content content-full content-third">
                        <div className="text-group">
                            <div className="content-full-subtext">새롬이와 함께한</div>
                            <div className="content-full-maintext">행복의 순간들</div>
                        </div>
                        {/* Video */}
                        <div className="content-video">
                            <iframe width="704" height="396" src="https://www.youtube.com/embed/fjfloV_y3PQ?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="content content-fourth">
                        <div className="content-wrapper">
                            <div className="text-group">
                                <div className="section-title">GALLERY</div>
                                <div className="preposition">of</div>
                                <div className="hash-style-name">#saerom {"&"} #hyeokwoo</div>                                
                            </div>
                            <div className="content-slider">
                                {/* ImageGallerySlider */}
                                <ImageGallerySlider />
                            </div>
                        </div>
                    </div>

                    <div className="content content-fifth">
                    </div>
                    <div className="footer">
                        <div className="footer-content">
                            Created by Hyeokwoo Alex Kwon
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}