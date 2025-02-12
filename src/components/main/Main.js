import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import "./Main.css";

// ✅ GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Main = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // ✅ ScrollTrigger 적용 방식 수정 (gsap.to() 사용)
      gsap.to(".title1", {
        scale: 0.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".main-content",
          start: "top top",
          end: "90% top",
          scrub: true,
          pin: true,
          pinSpacing: true,
          toggleActions: "restart pause resume pause",
        },
      });

      gsap.to(".title1", {
        x: "-180",
        y: "-190",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".main-content",
          start: "top top",
          end: "90% top",
          scrub: true,
        },
      });

      gsap.to(".title2", {
        x: "-100vw",
        opacity: 1,
        duration: 15,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".title-container",
          start: "top top",
          end: "800% top",
          scrub: true,
          pin: false,
          pinSpacing: true,
        },
      });

      gsap.to(".title1", {
        x: "100vw",
        opacity: 0,
        duration: 6,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".title-container",
          start: "top top",
          end: "800% top",
          scrub: true,
        },
      });

      gsap.to(window, {
        scrollTo: { y: "max", autoKill: false },
        duration: 0.1,
        scrollTrigger: {
          trigger: ".main-content4",
          start: "top+=50% center",
          end: "+=155%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
        },
      });

      // ✅ GSAP 애니메이션 적용 후 refresh()
      ScrollTrigger.refresh();
    });

    // ✅ Window Resize 이벤트 리스너 추가 & 정리
    const handleResize = () => ScrollTrigger.update();
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert(); // GSAP 애니메이션 정리
      window.removeEventListener("resize", handleResize); // 리스너 정리
    };
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    const videos = [
      "https://videos.pexels.com/video-files/11584395/11584395-uhd_2560_1440_60fps.mp4",
      "https://videos.pexels.com/video-files/10532470/10532470-uhd_2560_1440_30fps.mp4",
    ];

    let currentVideoIndex = 0;

    const playVideo = () => {
      if (videoElement && videoElement.paused) {
        videoElement.play().catch((error) => {
          console.log("Playback error:", error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", function () {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoElement.src = videos[currentVideoIndex];
        videoElement.load();
        playVideo();
      });

      playVideo();
    }
  }, []);

  useEffect(() => {
    // ✅ 화살표 버튼 클릭 시 스크롤 이동
    const handleArrowClick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };

    const arrowButton = document.querySelector(".arrow-down a");
    if (arrowButton) {
      arrowButton.addEventListener("click", handleArrowClick);
    }

    return () => {
      if (arrowButton) {
        arrowButton.removeEventListener("click", handleArrowClick);
      }
    };
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
