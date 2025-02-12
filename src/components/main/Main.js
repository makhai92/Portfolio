import React, { useEffect, useState } from "react";
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
          pin: true,
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
          pin: false,
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
          pin: true,
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
          pin: true,
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
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            gsap.to(window, {
              scrollTo: { y: "max", autoKill: false },
              duration: 0.1,
            });
          },
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
    const handleArrowClick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "auto", // 즉시 이동
      });
    };

    document
      .querySelector(".arrow-down a")
      .addEventListener("click", handleArrowClick);
  }, []);

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
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className="main-content">
        <div className="title-container">
          <span className="title1">PortFolio</span>
          <span className="title2">Yang's</span>
          <span className="title3">Frontend</span>
          <span className="title4">Developer</span>
        </div>
      </div>

      <div className="main-content2">
        <span className="logo1">Frontend Developer</span>
      </div>

      <div className="main-content3">
        <span className="title5">혁신적인 프론트엔드</span>
      </div>

      <div className="main-content4">
        <div className="content">
          <span className="title6">
            "일상을 변화시키는 인터페이스를 만들자"
            <br />
            저의 프론트엔드가 추구하는 목표입니다.
            <br />
          </span>
          <span className="title7">
            최초의 기술 혁신이 생활 방식을 변화시켰던 것처럼,
            <br />
            사용자 중심의 디자인과 부드러운 기능 구현을 통해
            <br />
            일상 속 경험을 한 단계 높이는 작업을 지향합니다.
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
