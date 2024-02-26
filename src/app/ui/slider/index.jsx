"use client";

import Image from "next/image";
import "./styles.sass";
import React from "react";
import Item from "../item";

function Slider(props) {
    const sliderList = React.useRef(null);

    function scrollSlider(left = true) {
        sliderList.current.scrollBy({
            left: (left ? "-" : "") + 200,
            behavior: "smooth",
        });
    }

    return (
        <div className="slider">
            <button
                onClick={() => scrollSlider()}
                className="slider__button"
            >
                <Image
                    src="/assets/icons/arrow.svg"
                    alt="Переключение слайдера"
                    width={24}
                    height={24}
                />
            </button>
            <div className="slider__list" ref={sliderList}>
                {props.data.map((item, itemIndex) => {
                    return (
                        <Item item={item} key={"slider" + props.title + itemIndex}/>
                    );
                })}
            </div>
            
            <button
                onClick={() => scrollSlider(false)}
                className="slider__button slider__button__right"
            >
                <Image
                    src="/assets/icons/arrow.svg"
                    alt="Переключение слайдера"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
}

export default Slider;
