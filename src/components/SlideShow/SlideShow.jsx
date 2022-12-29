import React, {useState} from 'react';
import './_slideShow.scss'


const SLIDES = [
    {
        id: 1,
        url: `../../slide_1.png`,
        active: true,
    },
    {
        id: 2,
        url: `../../slide_2.png`,
        active: false,
    },
    {
        id: 3,
        url: `../../slide_3.png`,
        active: false,
    }
]

const SlideShow = () => {
    const [slides, setSlides] = useState(SLIDES);
    const activeSlide = (id) => {
        const flag = [...slides]
        flag.forEach((item) => {
            item.active = false
        })
        const currentIndex = flag.findIndex((item) => item.id === id)
        if (currentIndex === -1) return
        flag[currentIndex].active = true
        setSlides(flag)
    }

    const isConDitionStop = (current = 0) => {
        return current < 0 || current > slides.length
    }

    const plusSlides = (n) => {
        const flag = [...slides]
        let currentIndex = flag.findIndex((item) => item.active === true)
        if (isConDitionStop(currentIndex)) return
        currentIndex += n
        if (flag[currentIndex]?.id) {
            activeSlide(flag[currentIndex].id)
        }
    }


    return (
        <>
            <div className="slideshow-container">
                {slides.map((slide) => {
                    return <div className={`${slide.active ? 'active' : 'mySlides'} fade`}><img src={slide.url} alt=""/>
                    </div>
                })}
                <span className="prev" onClick={() => {
                    plusSlides(-1)
                }}>❮</span>
                <span className="next" onClick={() => {
                    plusSlides(1)
                }}>❯</span>
            </div>
            <div style={{textAlign: 'center', marginTop: '1rem'}}>
                {slides.map((slide) => {
                    return <span className={`dot ${slide.active ? 'active' : ''}`} onClick={() => {
                        activeSlide(slide.id)
                    }}></span>
                })}
            </div>
        </>
    );
};

export default SlideShow;
