import { useEffect, useRef } from "react";
import sc from'../assets/css/ScrollEffect.module.scss';

function ScrollEffect() {
    const mainRef = useRef<HTMLElement>(null);
    const handleScroll = () => {
        const mainElement = mainRef.current;
        if (!mainElement) return;

        const scroll = window.scrollY / (mainElement.offsetHeight - window.innerHeight);
        mainElement.style.setProperty('--scroll', String(scroll));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main ref={mainRef} className={sc.Scroll}>
            <div className={sc.progress}/>
            <div className={sc.cubeWrap}>
                <div className={sc.cube}>
                    <div className={`${sc.side} ${sc.top}`}></div>
                    <div className={`${sc.side} ${sc.bottom}`}></div>
                    <div className={`${sc.side} ${sc.front}`}></div>
                    <div className={`${sc.side} ${sc.back}`}></div>
                    <div className={`${sc.side} ${sc.left}`}></div>
                    <div className={`${sc.side} ${sc.right}`}></div>
                </div>
            </div>
        </main>
    )
}

export default ScrollEffect;