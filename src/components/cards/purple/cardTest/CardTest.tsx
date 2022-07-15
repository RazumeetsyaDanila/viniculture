import React from 'react';
import s from './cardTest.module.scss';
import EnologImg from './enolog.png';
import anime from 'animejs';
import { useState, useRef, useEffect } from "react";

const CardTest: React.FC = () => {
    //     var card = document.querySelector(".card");
    // var playing = false;

    // card.addEventListener('click',function() {
    //   if(playing)
    //     return;

    //   playing = true;
    //   anime({
    //     targets: card,
    //     scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    //     rotateY: {value: '+=180', delay: 200},
    //     easing: 'easeInOutSine',
    //     duration: 400,
    //     complete: function(anim){
    //        playing = false;
    //     }
    //   });
    // });
    // function useRef<T = undefined>(): MutableRefObject<T | undefined>;
    // const [playing, setPlaying] = useState(false);

    // const animation = useRef(null) as MutableRefObject<HTMLDivElement>;

    // const handleClick = () => {
    //     playing ? animation.current.pause() : animation.current.play();
    //     setPlaying(!playing);
    // };

    // useEffect(() => {
    //     animation.current = anime.timeline({
    //         scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    //         rotateY: { value: '+=180', delay: 200 },
    //         easing: 'easeInOutSine',
    //         duration: 400,
    //     });


    // }, []);
    return (
        <div className={s.cardContainer}>
            <div className={s.cardContent}>
                <div className={s.cardContentFront}>
                    <div className={s.cardTitle}>
                        Энолог
                    </div>
                    {/* <img className={s.cardImg} src={EnologImg} alt="" /> */}
                    <svg width="50" height="50" viewBox="0 0 512 512">
                        <image className={s.peopleImg} width="512" height="436" xlinkHref="data:img/png;base64,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" />
                    </svg>
                    <div className={s.cardDescription}>
                        Заплатите 3 монеты, чтобы улучшить погреб на 1 уровень.
                    </div>
                    {/* <button onClick={handleClick}>{playing ? "Pause" : "Play"}</button> */}
                </div>

                <div className={s.cardContentBack}>
                    <div className={s.cardTitle}>
                        Сосолог
                    </div>
                    <img className={s.cardImg} src={EnologImg} alt="" />
                    <div className={s.cardDescription}>
                        Заплатите 3 монеты, чтобы улучшить погреб на 1 уровень.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTest;