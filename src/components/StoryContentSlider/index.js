import React, { Component } from "react";
import Slider from "react-slick";

export default class StoryContentSlider extends Component {
    render() {
        const sliderSettings = {
            dots: true,
            arrow: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true
        };

        return (
            <div>
                <Slider {...sliderSettings}>
                    <div className="slick-content first">
                        <div className="content-left">
                            <div className="content-image">
                                <img src={require("../../assets/images/kakao-dialog.png")} />
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="text-group">
                                <div className="title">만남의 계기</div>
                                <div className="separator" />
                                <div className="description">
                                    모든건 그 짧은 대화로부터 시작되었습니다.<br />
                                    <a href="https://www.facebook.com/tjalwlst" target="_blank">그분</a>의 소개가 운명이 될줄은<br />
                                    그때까지만해도 몰랐죠..
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-content second">
                        <div className="content-image">
                            <img src={require("../../assets/images/first-meet.png")} />
                        </div>
                        <div className="text-group">
                            <div className="title">첫만남.</div>
                            <div className="separator" />
                            <div className="description">
                                초록 원피스에 까만눈을 가진 그녀가 등장!<br />
                                첫눈에 반해 숨이 멎을뻔 했지만,<br />
                                그 설렘을 안고 새벽 3시까지 술로 달림!
                            </div>
                        </div>
                    </div>
                    <div className="slick-content third">
                        <div className="content-image">
                            <img src={require("../../assets/images/dumulmeori.png")} />
                        </div>
                        <div className="text-group">
                            <div className="title">첫 데이트!</div>
                            <div className="separator" />
                            <div className="description">
                                두번째 만남에 스쿠터타고 양평 두물머리 데이트. <br/>
                                만난지 얼마나 되었다고, 혁우는 새롬이한테 반하고.. 설레 죽을뻔 함. <br />
                                손잡고 싶어 미치는줄..
                            </div>                            
                        </div>
                    </div>
                    <div className="slick-content fourth">
                        <div className="content-left">
                            <div className="content-image">
                                <img src={require("../../assets/images/apeach-kiss.gif")} />
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="text-group">
                                <div className="title">첫 뽀뽀</div>
                                <div className="separator" />
                                <div className="description">
                                    수 차례 데이트 후, 새롬이에게 고백을 했으나 <br />
                                    매몰차게 거절당함. <br />
                                    <br />
                                    그래서 그냥 그날 뽀뽀해버림. 후후훗.
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="slick-content fifth">
                        <div className="content-left">
                            <div className="content-image">
                                <img src={require("../../assets/images/love-start.png")} />
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="text-group">
                                <div className="title">사랑의 시작!</div>
                                <div className="separator" />
                                <div className="description">
                                    몇일 후, 다시 용기내어 새롬이에게 고백!<br />
                                    드디어 승낙! ㅋㅋ <br/>
                                    <br/>
                                    2017년 6월 15일,<br />
                                    이렇게 연인으로써의 하루가 시작되었죠.
                                </div>                                
                            </div>
                        </div>
                    </div>                  
                </Slider>
            </div>
        )
    }
}