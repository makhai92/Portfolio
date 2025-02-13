import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="matrix-container">
      <div className="matrix-enter">
        <div className="matrix-enter-body">
          <div className="matrix-tv-container">
            <div className="matrix-glow"></div>
            <img id="tv" src="/img/tv.png" alt="Old TV" draggable="false" />
            <iframe
              src={`${process.env.PUBLIC_URL}/matrixcode.html`}
              title="Matrix Code"
              className="matrix-iframe"
              frameBorder="0"
            ></iframe>
            <div className="scanlines"></div> {/* 스캔 효과 레이어 */}
          </div>
        </div>
      </div>

      <div className="main-content4">
        <div className="content">
          <span className="title1">
            "혁신적인 기술로 세상을 변화시키다"
            <br />
            저의 개발은 단순한 코드 그 이상입니다.
            <br />
          </span>
          <span className="title2">
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
