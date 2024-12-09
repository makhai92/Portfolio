import React, { useEffect, useRef, useState } from "react";
import "./menu.css";
import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLinux,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiEclipseide,
  SiJquery,
  SiSpring,
  SiApachemaven,
  SiApachetomcat,
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsDatabaseCheck } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { ReactTyped as Typed } from "react-typed";

/*  */

/*  */

function Menu() {
  const [selectedTab, setSelectedTab] = useState("menu");
  // 상태 관리
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const imgBxRefs = useRef([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const [hoveredContentIndex, setHoveredContentIndex] = useState(null); // 항목별 호버 상태 관리

  const projects = [
    {
      id: 1,
      title: "Calorie_Bus",
      content: ["로고", "메인페이지", "뉴스게시판", "이벤트게시판(출첵,룰렛)"],
      description: [
        "1. Header - 메뉴베이게이션에 마우스를 가져다 놓으면 밑에 소메뉴들이 뜨고 클릭하면 각 게시판으로 들어감<br />" +
          "맨 위에는 공지사항으로 관리자가 알림메시지를 띄우는 기능 구현<br /><br/>" +
          "2. 배너, 컨텐츠 구현 - 컨텐츠 상단에 큰 배너로 어떤 사이트인지 알 수 있도록 관련 이미지 배치<br />" +
          "밑에는 현재 진행 중인 공구서비스와 칼로리버스의 소개글, 칼로리버스와 함께 한 셀럽을 홍보하기 위한 게시물을 Swiper기능으로 구현",

        "1. 로그인 상태에 따른 글쓰기 버튼 활성화 - 관리자로 로그인하면 글쓰기 버튼이 활성화되고 그외 이용자들은 활성화 안 되는 기능<br/>" +
          "2. 게시물 검색 기능 - 검색할 텍스트를 입력하면 그 텍스트가 들어간 게시물이 나오는 기능 <br/>" +
          "3. 게시글 위치에 따라 애니메이션 효과 - 마우스가 위치하는 게시글에 따라 회색블록과 중앙에서부터 좌우로 퍼지는 밑줄 효과<br/>" +
          "4. 페이지 네비게이션 - 게시글 10개당 1페이지씩 생성되어 최대 5개까지 나오게 하는 기능<br/>" +
          "5. 뉴스 제목 애니메이션 - 다른 페이지에서 뉴스레터 게시판에 들어오면 제목이 천천히 내려오는 효과 <br/>" +
          "1. 게시글 작성 구현 - 썸머노트로 게시글작성과 파일 업로드 기능 구현<br/>" +
          "1. 게시글 수정 구현 - 이미 작성된 게시글을 수정 가능하게 기능구현<br/>" +
          "2. 파일 업로드 구현 - 이전 파일을 없애거나, 새로운 파일을 추가로 업로드 할 수 있도록 수정 기능구현<br/>" +
          "1. 게시글 수정 삭제 구현 - 게시글을 수정 삭제 가능하게끔 기능 구현<br/>" +
          "2. 댓글과 대댓글 구현 -  게시물에 대한 이용자들의 자유로운 의견을 달 수 있도록 댓글과 대댓글 기능을 구현<br/>" +
          "3. 댓글, 대댓글 좋아요 수정, 삭제 - 댓글과 대댓글에 대한 좋아요와 수정, 삭제 기능 구현 게시글의 좋아요처럼 엄지가 위아래 바뀌는 기능구현<br/>" +
          "4. 게시글 좋아요 기능 구현 - 좋아요 버튼을 누르면 옆에 좋아요 숫자가 누적되고 한번 더 누르면 취소되면서 엄지가 밑으로 내려가는 기능 구현",

        "Swiper 기능을 통한 텍스트와 이미지 디자인 구현 - 페이지에 들어오면 글씨가 천천히 올라오고 이미지는 오른쪽에서 서로 다르게 나타나는 기능구현<br/>" +
          "달력과 버튼디자인 구현 - 달력 디자인과 달력에 비활성화된 이미지를 넣고 체크하기 버튼을 누르면 빨간색으로 활성화된 이미지가 나오면서 활성화가 되는 기능 구현<br/>" +
          "10회 달성 시 이벤트권한 부여 구현 - 출석체크 10회 달성 시 룰렛을 돌릴 수 있도록 티켓을 부여함 <br/>" +
          "티켓부여 시 모달창으로 알림창이 뜨고 룰렛 버튼이 활성화됨<br/>" +
          "하루에 한번만 누를 수 있으며 여러 번 누를 시 하루에 한번만 가능하다는 알림창 기능 구현<br/>" +
          "룰렛과 디자인 구현 - 돌아가기 버튼을 누르면 룰렛이 돌아가고 상품에 당첨되면 당첨되었다는 모달창 띄우는 기능<br/>" +
          "swiper기능을 통한 텍스트 디자인과 이미지 디자인 구현 - 스크롤을 내려서 텍스트에어리어에 들어오면 글씨가 천천히 내려오면서 기대감을 유발하고 지난 주 상품부터 이미지를 순차적으로 떠오르게 하는 기능 구현<br/>" +
          "관리자와 회원(권한부여가 된)만 룰렛을 돌릴 수 있는 권한 부여 - 관리자와 회원(출석체크 10회를 달성하여 룰렛돌릴 수 있는 티켓을 가진 회원)만 누르면 돌아가게 권한제한, 그외 회원이나 티켓을 소진한 회원은 권한이 없다고 메세지창 띄우는 기능",
      ],
      images: [
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: 2,
          j: 0,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: 1,
          j: 1,
        },
        {
          src: "/img/file.jpg",
          i: 0,
          j: 2,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: -1,
          j: 3,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: -2,
          j: 4,
        },
      ],
      labels: ["after", "innerHTML", "before", "background", "content"],
    },
    {
      id: 2,
      title: "Spoon & Smiles",
      content: [
        "로고",
        "메인페이지",
        "유저메인페이지",
        "점주메인페이지",
        "점주매장페이지",
        "관리자통계",
        "통계관리",
        "예약관리",
      ],
      description: [
        "메인페이지상세설명",
        "유저메인페이지상세설명",
        "점주메인페이지상세설명",
        "점주매장페이지상세설명",
        "관리자통계상세설명",
        "통계관리상세설명",
        "예약관리상세설명",
      ],
      images: [
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: 2,
          j: 0,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: 1,
          j: 1,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: 0,
          j: 2,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: -1,
          j: 3,
        },
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: -2,
          j: 4,
        },
      ],
      labels: ["after", "innerHTML", "before", "background", "content"],
    },
    // 프로젝트가 더 추가될 수 있습니다.
  ];

  // 폼 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  /*  
  const handleMouseEnter = (index) => {
    if (imgBxRefs.current[index]) {
      imgBxRefs.current[index].classList.add("hovered");
    }
  };

  const handleMouseLeave = (index) => {
    if (imgBxRefs.current[index]) {
      imgBxRefs.current[index].classList.remove("hovered");
    }
  };
  */
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };
  /*  */
  const handleProjectHover = (projectIndex, contentIndex, hoverState) => {
    setHoveredProject(hoverState ? projectIndex : null);
    setHoveredContentIndex(hoverState ? contentIndex : null);
  };

  const handleContentHover = (contentIndex, hoverState) => {
    console.log("Hovered content index:", contentIndex);
    setHoveredContentIndex(hoverState ? contentIndex : null);
  };
  /*  */
  return (
    <div className="port-home">
      <form>
        <input
          type="radio"
          name="tab"
          id="menu"
          checked={selectedTab === "menu"}
          onChange={() => setSelectedTab("menu")}
        />
        <div className="container">
          <input
            type="radio"
            name="tab"
            id="About"
            checked={selectedTab === "About"}
            onChange={() => setSelectedTab("About")}
          />
          <section
            className={`About ${selectedTab === "Skills" ? "scrollable" : ""}`}
          >
            <h1>About Me</h1>
            <div className="about-content">
              <div className="info"></div>
              <div className="typing">
                <Typed
                  strings={["안녕하세요 주니어 Frontend 개발자 양창모입니다."]}
                  typeSpeed={50}
                  backSpeed={25}
                  loop={true}
                />
              </div>
              <p>
                저는 게임도 좋아하지만 게임내에 설정된 코드를 바꾸며 저에게 맞게
                설정하는 그과정이 재미있어 개발자란 직업을 선택하였습니다.
                <br />
                대학교도 새로다니며 코딩에 흥미가 생겼고, 국비지원학원도 추가로
                <br />
                다니며 이것저것 시도해보면서 자연스럽게 프론트엔드 개발자를
                꿈꾸게 되었습니다.
                <br /> 다양한 기술 스택을 쌓아 적재적소에 알맞은 기술을 적용하여
                최고의 UI,UX를 제공할 수 있는 프론트엔드 개발자가 되고 싶습니다.
              </p>
              <div className="profile-section">
                <div className="profile-image">
                  <img src="img/profile.jpeg" alt="Profile" />
                </div>
                <div className="info">
                  <p>
                    <i class="fa-solid fa-user"></i>양창모
                  </p>
                  <p>
                    <i class="fa-solid fa-cake-candles"></i> 1992. 10. 11
                  </p>
                  <p>
                    <i class="fa-solid fa-house-chimney"></i> 서울 강서구
                  </p>
                  <p>
                    <i class="fa-solid fa-envelope"></i> makkai9210@gmail.com
                  </p>
                  <p>
                    <i class="fa-solid fa-graduation-cap"></i> 방송통신대학교
                    (컴퓨터과학부)
                  </p>
                  <div className="links">
                    <a href="https://github.com/makhai92/">
                      <i class="fa-solid fa-link"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="About"></label>
          </section>

          <input
            type="radio"
            name="tab"
            id="Skills"
            checked={selectedTab === "Skills"}
            onChange={() => setSelectedTab("Skills")}
          />
          <section
            className={`Skills ${selectedTab === "Skills" ? "scrollable" : ""}`}
          >
            <h1>Skills</h1>
            <div className="skill">
              <div className="skill-front">
                <h2>Frontend</h2>
                <ul>
                  <li>
                    <a href="#">
                      <FaHtml5 />
                      <span> - HTML5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaCss3Alt />
                      <span> - CSS3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaReact />
                      <span> - React</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaJs />
                      <span> - JavaScript</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiJquery />
                      <span> - Jquery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/img/ajax.png"
                        alt="Ajax Logo"
                        className="ajax-icon"
                      />
                      <span> - Ajax</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="skill-back">
                <h2>Backend</h2>
                <ul>
                  <li>
                    <a href="#">
                      <FaJava />
                      <span> - Java</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiEclipseide />
                      <span> - Eclipse</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/img/servlet.png"
                        alt="servlet Logo"
                        className="servlet-icon"
                      />
                      <span> - Jsp&Servlet</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="framework">
                <h2>FrameWork & Library</h2>
                <ul>
                  <li>
                    <a href="#">
                      <SiSpring />
                      <span> - Spring</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BiLogoSpringBoot />
                      <span> - SpringBoot</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        width="96"
                        height="96"
                        src="https://img.icons8.com/material/96/mybatis.png"
                        alt="mybatis"
                        className="mybatis"
                      />

                      <span> - Mybatis</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiApachemaven />
                      <span> - Maven</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="db">
                <h2>DataBase</h2>
                <ul>
                  <li>
                    <a href="#">
                      <BsDatabaseCheck />
                      <span> - Oracle</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tool">
                <h2>Tools</h2>
                <ul>
                  <li>
                    <a href="#">
                      <VscVscode />
                      <span> - VS Code</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BiLogoSpringBoot />
                      <span> - STS</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="etc">
                <h2>ETC</h2>
                <ul>
                  <li>
                    <a href="#">
                      <FaLinux />
                      <span> - Linux</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiApachetomcat />
                      <span> - </span>
                      <span className="tomcat">
                        Apache <br />
                        Tomcat
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaAws />
                      <span> - AWS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGithub />
                      <span> - GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        width="96"
                        height="96"
                        src="https://img.icons8.com/material/96/api-settings.png"
                        alt="api-settings"
                        className="API"
                      />
                      <span> - REST API</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <label htmlFor="Skills" className="click-label"></label>
          </section>

          <input
            type="radio"
            name="tab"
            id="Project"
            checked={selectedTab === "Project"}
            onChange={() => setSelectedTab("Project")}
          />
          <section
            className={`Project ${
              selectedTab === "Project" ? "scrollable" : ""
            }`}
          >
            <h1>Project</h1>
            <div className="project-body">
              <div className="project-container">
                {projects.map((project, projectIndex) => (
                  <div key={project.id} className="project-set">
                    <div className="my-element">
                      <div className="aug-glow" aria-hidden="true">
                        <div
                          data-augmented-ui="tl-clip br-2-clip-xy tr-round border"
                          className="my-augborder"
                        ></div>
                      </div>
                      <h2 className="project-title">{project.title}</h2>
                      <p className="project-content">
                        {Array.isArray(project.content)
                          ? project.content.map((item, itemIndex) => (
                              <React.Fragment key={itemIndex}>
                                <span
                                  className="project-item"
                                  onMouseEnter={() =>
                                    handleProjectHover(
                                      projectIndex,
                                      itemIndex,
                                      true
                                    )
                                  }
                                  onMouseLeave={() =>
                                    handleProjectHover(
                                      projectIndex,
                                      itemIndex,
                                      false
                                    )
                                  }
                                >
                                  {item}
                                </span>
                                <br />
                              </React.Fragment>
                            ))
                          : project.content}
                      </p>
                    </div>
                    {/*  */}

                    <div
                      className={`border-container ${
                        hoveredProject === projectIndex &&
                        hoveredContentIndex !== null
                          ? "visible"
                          : "hidden"
                      }`}
                    >
                      <div className="corner top-left"></div>
                      <div className="corner top-right"></div>
                      <div className="corner bottom-left"></div>
                      <div className="corner bottom-right"></div>
                      <div className="detail-description">
                        {hoveredContentIndex !== null &&
                        project.description &&
                        hoveredContentIndex < project.description.length ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: project.description[hoveredContentIndex],
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                    {/*  */}
                    <div className="hover-container">
                      <div
                        className="imgBx"
                        ref={(el) => (imgBxRefs.current[projectIndex] = el)}
                      >
                        {hoveredProject === projectIndex &&
                        hoveredContentIndex !== null ? (
                          <img
                            key={hoveredContentIndex}
                            src={
                              project.images[hoveredContentIndex + 1] &&
                              hoveredContentIndex + 1 < project.images.length
                                ? project.images[hoveredContentIndex + 1]?.src
                                : project.images[1]?.src ||
                                  project.images[0]?.src
                            }
                            style={{
                              "--i":
                                project.images[hoveredContentIndex + 1] &&
                                hoveredContentIndex + 1 < project.images.length
                                  ? project.images[hoveredContentIndex + 1]?.i
                                  : project.images[1]?.i ||
                                    project.images[0]?.i,
                              "--j":
                                project.images[hoveredContentIndex + 1] &&
                                hoveredContentIndex + 1 < project.images.length
                                  ? project.images[hoveredContentIndex + 1]?.j
                                  : project.images[1]?.j ||
                                    project.images[0]?.j,
                            }}
                            alt={`img${hoveredContentIndex}`}
                          />
                        ) : (
                          project.images.map((img, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={img.src}
                              style={{ "--i": img.i, "--j": img.j }}
                              alt={`img${imgIndex}`}
                            />
                          ))
                        )}
                      </div>
                      <div className="labels-container">
                        {project.labels.map((label, labelIndex) => (
                          <div
                            key={labelIndex}
                            className={`label label-${label}`}
                          >
                            <span>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <label htmlFor="Project"></label>
          </section>

          <input
            type="radio"
            name="tab"
            id="contact"
            checked={selectedTab === "contact"}
            onChange={() => setSelectedTab("contact")}
          />
          <section
            className={`contact ${
              selectedTab === "contact" ? "scrollable" : ""
            }`}
          >
            <div className="contact-body">
              <h1>Contact</h1>
              <div className="contact-wrapper">
                <form id="contact-form" className="form-horizontal" role="form">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="NAME"
                        name="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="EMAIL"
                        name="email"
                        required
                      />
                    </div>
                  </div>

                  <textarea
                    className="form-control"
                    rows="10"
                    placeholder="MESSAGE"
                    name="message"
                    required
                  ></textarea>

                  <div className="matrix-button">
                    <div className="matrix-button-body">
                      <iframe
                        src={`${process.env.PUBLIC_URL}/test111.html`}
                        title="External HTML"
                        width="100%"
                        height="400px"
                        style={{ border: "none" }}
                      ></iframe>
                    </div>
                  </div>
                </form>

                <div className="direct-contact-container">
                  <ul className="contact-list">
                    <li className="list-item">
                      <i class="fa-solid fa-location-dot">
                        <span className="contact-text place">
                          서울 강서구 화곡동
                        </span>
                      </i>
                    </li>
                    <li className="list-item">
                      <i class="fa-solid fa-phone">
                        <span className="contact-text phone">
                          <a href="tel:1-212-555-5555" title="Give me a call">
                            010-2338-6026
                          </a>
                        </span>
                      </i>
                    </li>
                    <li className="list-item">
                      <i class="fa-solid fa-envelope">
                        <span className="contact-text gmail">
                          <a href="mailto:#" title="Send me an email">
                            makkai9210@gmail.com
                          </a>
                        </span>
                      </i>
                    </li>
                  </ul>

                  <hr />
                  <ul className="social-media-list">
                    <li>
                      <a href="#" target="_blank" className="contact-icon">
                        <i
                          className="fa-brands fa-github"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" className="contact-icon">
                        <i
                          className="fa-brands fa-codepen"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" className="contact-icon">
                        <i
                          className="fa-brands fa-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" className="contact-icon">
                        <i
                          className="fa-brands fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                  <hr />

                  <div className="copyright">
                    &copy; YANG'S PORTFOLIO OF THE RIGHTS RESERVED
                  </div>
                </div>
              </div>
            </div>

            <label htmlFor="contact"></label>
          </section>
        </div>

        <div className="menu">
          <div>
            <label htmlFor="menu"></label>
            <label htmlFor="home"></label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Menu;
