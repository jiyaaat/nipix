import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Main.css';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const numberOfCycles = Math.ceil(3 * window.innerWidth / window.innerHeight);
    gsap.timeline({
      scrollTrigger: {
        trigger: '.page',
        scrub: true,
        start: '0% 0%',
        end: '100% 100%',
      },
    })
      .to(arrowRef.current, { duration: 0.05, opacity: 0 }, 0)
      .fromTo(contentRef.current, { xPercent: 0 }, { xPercent: -50, ease: 'none' }, 0);

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
    };
  }, []);

  return (
    <div className="MainPage">
      <div className="page"></div>
      <div className="content" ref={contentRef}>
        <div className="content-section">
          <div>
            <h1>Nipix Tech</h1>
          </div>
        </div>
        <div className="content-section">
          <div>
            <h1>What's this?</h1>
            <p>
              That's <a href="https://twitter.com/uuuuuulala" target="_top">me</a> learning
              the basic walk cycle animation and playing with the GSAP implementation&nbsp;of&nbsp;it.
            </p>
          </div>
        </div>
        <div className="content-section">
          <div>
            <h1>So what?</h1>
            <p>
              You can use this code and design concept for your project.
              The animation parameters are easy to tweak, graphic elements can be replaced.
            </p>
            <p>
              You can also give me a follow on <a href="https://www.linkedin.com/in/ksenia-kondrashova/" target="_blank">linkedin</a>, <a href="https://codepen.io/ksenia-k" target="_blank">codepen</a> and <a href="https://twitter.com/uuuuuulala" target="_top">twitter</a> :)
            </p>
          </div>
        </div>
        <div className="content-section"></div>
      </div>
    </div>
  );
};

export default Main;
