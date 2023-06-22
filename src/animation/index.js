import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const fadeAnimation = () => {
  const classNames = {
    fadeStaggerWrap: '.js-fade-stagger-w',
    fadeStagger: '.js-fade-stagger',
    fadeEl: '.js-fade-el',
    fadeElTanslate: '.js-fade-el-translate',
  };

  const $fadeElems = document.querySelectorAll(classNames.fadeEl);
  const $fadeStaggerWrap = document.querySelectorAll(
    classNames.fadeStaggerWrap
  );
  const $fadeElTranslate = document.querySelectorAll(classNames.fadeElTanslate);
  const allTriggers = [];

  gsap.registerPlugin(ScrollTrigger);

  gsap.context(() => {
    $fadeElems.forEach($el => {
      const tween = gsap.fromTo(
        $el,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'Power1.out',
        }
      );
      const trigger = ScrollTrigger.create({
        trigger: $el,
        animation: tween,
        start: 'top 80%',
      });

      allTriggers.push(trigger);
    });
    $fadeElTranslate.forEach($el => {
      const tween = gsap.fromTo(
        $el,
        {
          opacity: 0,
          yPercent: 15,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'Power1.out',
        }
      );
      const trigger = ScrollTrigger.create({
        trigger: $el,
        animation: tween,
        start: 'top 80%',
      });

      allTriggers.push(trigger);
    });
    $fadeStaggerWrap.forEach($wrap => {
      const $elements = $wrap.querySelectorAll(classNames.fadeStagger);

      const tween = gsap.fromTo(
        $elements,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: $elements.length * 0.3,
          delay: 0.05,
          stagger: {
            each: 0.1,
            ease: 'Power1.in',
          },
        }
      );
      const trigger = ScrollTrigger.create({
        trigger: $wrap,
        animation: tween,
        start: 'top 85%',
      });

      allTriggers.push(trigger);
    });
  });

  return () => {
    allTriggers.forEach(trigger => trigger?.disable() && trigger?.kill());
  };
};

export default fadeAnimation;
