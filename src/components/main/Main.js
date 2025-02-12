import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import "./Main.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Main = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-content",
          start: "top top",
          end: "90% top",
          scrub: true,
          pinSpacing: false,
        },
      })
      .to(".title1", {
        scale: 0.2,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".title1", {
        x: "-180",
        y: "-190",
        duration: 1,
        ease: "power2.inOut",
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".title-container",
          start: "top top",
          end: "800% top",
          scrub: true,
          pinSpacing: false,
        },
      })
      .fromTo(
        ".title2",
        { x: "30vw", y: 0 },
        { x: "-100vw", opacity: 1, duration: 15, ease: "power1.inOut" },
        "+=13"
      )
      .to(
        ".title2",
        {
          opacity: 1,
          duration: 5,
          ease: "power1.inOut",
        },
        "-=14"
      )
      .to(
        ".title2",
        {
          opacity: 0,
          duration: 5,
          ease: "power1.inOut",
        },
        "-=10"
      )
      .fromTo(
        ".title4",
        { x: "30vw", y: 200 },
        { x: "-100vw", opacity: 1, duration: 15, ease: "power1.inOut" },
        "-=15"
      )
      .to(
        ".title4",
        {
          opacity: 1,
          duration: 5,
          ease: "power1.inOut",
        },
        "-=14"
      )
      .to(
        ".title4",
        {
          opacity: 0,
          duration: 5,
          ease: "power1.inOut",
        },
        "-=10"
      )
      .fromTo(
        ".title3",
        { x: "-30vw", y: 100 },
        { x: "100vw", opacity: 1, duration: 15, ease: "power1.inOut" },
        "-=15"
      )
      .to(
        ".title3",
        {
          opacity: 1,
          duration: 5,
          ease: "power1.inOut",
        },
        "-=14"
      )
      .to(
        ".title3",
        {
          opacity: 0,
          duration: 5,
          ease: "power1.inOut",
        },
        "-=10"
      )
      .to(
        ".title1",
        {
          x: "100vw",
          opacity: 0,
          duration: 6,
          ease: "power1.inOut",
        },
        "-=10"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-content2",
          start: "top+=10% top",
          end: "bottom+=50% top",
          scrub: 2,
          pinSpacing: true,
        },
      })
      .fromTo(
        ".main-content2 .logo1",
        { opacity: 0 },
        { opacity: 1, duration: 5, ease: "power2.inOut" }
      )
      .to(".main-content2 .logo1", {
        opacity: 0,
        duration: 5,
        ease: "power2.inOut",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-content3",
          start: "top+=5% top",
          end: "bottom+=70% top",
          scrub: 2,
          pinSpacing: true,
        },
      })
      .fromTo(
        ".main-content3 .title5",
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1, duration: 4, ease: "power2.inOut" }
      )
      .to(".main-content3 .title5", {
        scale: 10,
        duration: 4,
        ease: "power2.inOut",
      })
      .to(".main-content3 .title5", {
        opacity: 0,
        duration: 4,
        ease: "power2.inOut",
      });

    gsap.set(".main-content4", { opacity: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-content4",
          start: "top+=50% center",
          end: "+=155%",
          scrub: 2,
          pinSpacing: false,
        },
      })
      .fromTo(
        ".main-content4 .title6",
        { opacity: 0 },
        { opacity: 1, duration: 15, ease: "power1.inOut" }
      )
      .fromTo(
        ".main-content4 .title7",
        { opacity: 0 },
        { opacity: 1, duration: 15, ease: "power1.inOut" },
        "+=15"
      )
      .fromTo(
        ".main-content4 .button1",
        { opacity: 0 },
        { opacity: 1, duration: 15, ease: "power1.inOut" },
        "+=5"
      )
      .fromTo(
        ".main-content4 .button2",
        { opacity: 0 },
        { opacity: 1, duration: 15, ease: "power1.inOut" },
        "+=5"
      );

    window.addEventListener("resize", ScrollTrigger.update);
    const videoElement = document.getElementById("background-video");
    const videos = [
      `https://videos.pexels.com/video-files/11584395/11584395-uhd_2560_1440_60fps.mp4`,
      `https://videos.pexels.com/video-files/10532470/10532470-uhd_2560_1440_30fps.mp4`,
    ];

    let currentVideoIndex = 0;

    const playVideo = () => {
      if (videoElement.paused) {
        videoElement.play().catch((error) => {
          console.log("Playback error:", error);
        });
      }
    };

    videoElement.addEventListener("ended", function () {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      videoElement.src = videos[currentVideoIndex];
      videoElement.load();
      playVideo();
    });
    playVideo();
    // 하단 고정된 화살표 버튼 클릭 시 즉시 맨 아래로 이동
  }, []);
  const handleArrowClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "auto", // 즉시 이동
    });
  };
  return (
    <div>
      <div className="video-background">
        <video autoPlay muted playsInline id="background-video">
          <source
            src="https://videos.pexels.com/video-files/11584395/11584395-uhd_2560_1440_60fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="video-overlay"></div>

      {/* 하단에 고정된 버튼 */}
      <div className="arrow-down">
        <button className="arrow-button" onClick={handleArrowClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="main-content">
        <div className="title-container">
          <span className="title1">PortFolio</span>
          <span className="title2">Yang's</span>
          <span className="title3">Innovator</span>
          <span className="title4">Developer</span>
        </div>
      </div>

      <div className="main-content2">
        <span className="logo1">Visionary Developer</span>
      </div>

      <div className="main-content3">
        <span className="title5">비전을 현실로, 혁신을 미래로</span>
      </div>

      <div className="main-content4">
        <div className="content">
          <span className="title6">
            "혁신적인 기술로 세상을 변화시키다"
            <br />
            저의 개발은 단순한 코드 그 이상입니다.
            <br />
          </span>
          <span className="title7">
            비전 있는 개발자가 만드는 차이는 분명합니다.
            <br />
            강력한 로직, 견고한 아키텍처, 그리고 최적화된 시스템.
            <br />
            기술과 혁신을 결합하여 한계를 넘어서고,
            <br />더 빠르고 효율적인 세상을 만들어 갑니다.
          </span>
          <div className="main-button">
            <Link to="/menu">
              <button className="button1">
                <section className="main-body">
                  <div className="hero-container">
                    <div className="environment"></div>
                    <h2 className="hero glitch layers" data-text="보러가기">
                      <span>보러가기</span>
                    </h2>
                  </div>
                </section>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
