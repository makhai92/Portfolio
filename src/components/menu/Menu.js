import React, { useRef, useState, useEffect } from "react";
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
import { ReactTyped } from "react-typed";
import emailjs from "@emailjs/browser";
/*  */

/*  */

function Menu() {
  const [selectedTab, setSelectedTab] = useState("menu");
  // 상태 관리
  const [setName] = useState("");
  const [setEmail] = useState("");
  const [setMessage] = useState("");
  const imgBxRefs = useRef([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const [hoveredContentIndex, setHoveredContentIndex] = useState(null); // 항목별 호버 상태 관리

  const projects = [
    {
      id: 1,
      title: "Calorie_Bus",
      content: ["메인페이지", "뉴스게시판", "출첵게시판", "룰렛게시판"],
      description: [
        "Header: 메뉴에 마우스를 올리면 소메뉴 표시, 클릭 시 해당 게시판 이동. 상단 공지사항 기능 구현.<br /><br/>" +
          "배너 & 컨텐츠: 상단에 큰 배너 배치, Swiper 기능을 활용한 공구 서비스 및 홍보 콘텐츠 구현.<br /><br/>" +
          "사이드 광고: 오른쪽 제휴문의, 왼쪽 QR코드로 인스타그램 연결 기능 추가.<br /><br/>" +
          "Footer: 회사 정보 및 문의센터 연결 기능 구현.",

        "게시글 관리: 관리자 로그인 시 글쓰기 활성화, 게시글 작성·수정·삭제 기능 지원.<br/>" +
          "파일 업로드: 기존 파일 삭제 또는 새로운 파일 추가 가능.<br/><br/>" +
          "검색 및 네비게이션: 게시물 검색 기능, 10개 단위 페이지 네비게이션(최대 5페이지).<br/><br/>" +
          "애니메이션 효과: 게시글 호버 시 스타일 변경, 뉴스 제목 서서히 등장.<br/><br/>" +
          "댓글 시스템: 댓글·대댓글 작성, 수정·삭제·좋아요 기능 제공. <br/><br/>" +
          "좋아요 기능: 게시글·댓글 좋아요 반영 및 취소 가능.<br/>",

        "애니메이션 효과: Swiper 기능으로 텍스트·이미지 등장 애니메이션 구현.<br/><br/>" +
          "출석 체크 시스템: 체크 버튼 클릭 시 이미지 활성화, 10회 달성 시 룰렛 티켓 자동 지급.<br/><br/>" +
          "10회 달성 시 이벤트권한 부여 구현: 출석체크 10회 달성 시 룰렛을 돌릴 수 있도록 티켓을 부여함<br/><br/>" +
          "이벤트 제한: 하루 한 번만 참여 가능, 중복 시 알림창 표시.<br/><br/>" +
          "룰렛 기능: 티켓 보유 시 활성화, 모달창을 통한 당첨 안내.<br/><br/>",

        "룰렛 기능: 버튼 클릭 시 회전, 당첨 시 모달창으로 결과 표시.<br/><br/>" +
          "애니메이션 효과: 텍스트는 서서히 내려오고, 지난 주 상품 이미지는 순차적으로 등장.<br/><br/>" +
          "권한 제한: 관리자 및 10회 출석 체크 완료 회원만 룰렛 사용 가능, 비권한자는 제한 메시지 표시.<br/>",
      ],
      images: [
        {
          src: "/img/caloriebus_logo.png",
          i: 2,
          j: 0,
        },
        {
          src: "/img/calorie_main.png",
          i: 1,
          j: 0,
        },
        {
          src: "/img/calorie_news.png",
          i: 0,
          j: 0,
        },
        {
          src: "/img/calorie_check.png",
          i: -1,
          j: 0,
        },
        {
          src: "/img/calorie_rullet.png",
          i: -2,
          j: 0,
        },
      ],
      labels: ["로고", "메인페이지", "뉴스게시판", "출첵게시판", "룰렛게시판"],
    },
    {
      id: 2,
      title: "Spoon & Smiles",
      content: [
        "메인페이지",
        "유저메인페이지",
        "점주메인페이지",
        "점주매장페이지",
        "리뷰관리",
        "통계관리",
        "예약관리",
      ],
      description: [
        "GSAP ScrollTrigger 활용: 특정 위치에서 다양한 애니메이션 적용, 배경에 영상 재생으로 시각적 효과 극대화.<br/><br/>" +
          "텍스트 애니메이션: 글자가 축소되며 이동, 좌우 등장 및 퇴장 효과. 사이트 이름이 천천히 나타났다 사라짐. 문구가 점차 확대되며 등장. 확대 후 간략한 설명과 로그인 버튼 표시.<br/><br/>" +
          "빠른 이동 기능: 페이지 하단으로 즉시 이동 가능한 스킵 버튼 구현.<br/><br/>",

        "메인 배너: Swiper 기능 적용으로 부드러운 전환 및 마우스 휠 지원, 마지막 배너는 점차 확대 효과 추가.<br/><br/>" +
          "메뉴바: 사이드에 숨기고 버튼 클릭 시 자연스럽게 등장.<br/><br/>" +
          "검색 기능: 돋보기 버튼 클릭 시 검색창 활성화.<br/><br/>" +
          "공지 알림: 관리자가 공지를 확인할 수 있도록 벨 아이콘 기능 구현.<br/><br/>" +
          "UI/UX 개선: 각 카테고리별 이모티콘 활용으로 직관적인 인터페이스 제공.<br/><br/>",

        "점주 로그인을 하면 나오는 점주용 메인페이지 구현(ASUS BIOS환경 디자인에 영감을 받아 디자인)",

        "날씨 정보: API를 활용해 현재 날씨, 최고·최저 기온, 습도, 이모티콘 및 간략한 문장 표시.차트 API로 1주일간 온도 변화 시각화.날씨·시간에 따라 배경 영상 자동 변경.<br/><br/>" +
          "금일 예약 정보: 예약자 이름, 방문 횟수, 방문 여부(완료/예정), 등급(단골·블랙리스트), 노쇼 횟수 표시.예약 목록을 순번·시간·인원·좌석·이름 기준으로 정렬.Swiper 기능으로 5건 이상일 경우 슬라이드 전환(마우스 휠 지원).<br/><br/>" +
          "메뉴 네비게이션: ActiveIndex 적용해 현재 위치 인디케이터 표시, 자연스러운 전환 효과 추가.<br/><br/>",

        "리뷰 관리: 유저의 모든 리뷰를 한눈에 확인 가능.<br/><br/>" +
          "답글 기능: QuillEditor를 활용해 특정 리뷰에만 답글 작성 가능.<br/><br/>" +
          "신고 기능: 신고 버튼 클릭 시 모달창에서 사유 입력 후 관리자에게 전송.<br/><br/>" +
          "리뷰 블러 및 삭제: 점주 신고 시 리뷰 블러 처리, 관리자가 검토 후 승인하면 '관리자에 의해 삭제된 댓글'로 변경.<br/><br/>",

        "예약 통계: 한 달간 예약 건수 및 총 인원 합산, 전월 대비 증감률(%) 표시.<br/><br/>" +
          "점주 정보 연동: 로그인 시 점주 가게명 표시, 예약자 남녀 비율(도넛 차트), 연령대(막대 차트) 시각화.<br/><br/>" +
          "예약 인원 분석: 예약 시 입력된 인원수를 막대 차트로 시각화.<br/><br/>",

        "주간 예약 관리: 일주일간 예약 상태(입금대기, 결제완료, 취소) 및 총 예약 건수 표시.<br/><br/>" +
          "달력 연동: 예약 데이터를 달력에 표시, 상태별 색상 구분 및 3건 이상 시 '더보기' 기능 적용.<br/><br/>" +
          "인원 관리: 매장 내 손님 수 증감 가능.<br/><br/>" +
          "주간 예약 리스트: 날짜, 시간, 입금/예약 상태(색상 구분), 인원, 좌석, 고객명, 노쇼/방문 여부(결제 완료 시 버튼 활성화), 취소 시 삭제 가능.<br/><br/>" +
          "UI/UX 최적화: Swiper 기능 적용하여 가독성 및 사용자 경험 향상.<br/><br/>",
      ],
      images: [
        {
          src: "/img/SAS_logo.png",
          i: 2,
          j: 0,
        },
        {
          src: "https://drive.google.com/file/d/1co7ijUItgWsx49QJ4VGyt0MpoAwh7afq/view?usp=sharing",
          i: 1,
          j: 0,
        },
        {
          src: "https://drive.google.com/file/d/1HdQxSBf7WhcDE6cGbLtouyexYsJKZWTY/view?usp=sharing",
          i: 0,
          j: 0,
        },
        {
          src: "/img/sas_ownermain.png",
          i: -1,
          j: 0,
        },
        {
          src: "/img/sas_ownerhome.png",
          i: -2,
          j: 0,
        },
        {
          src: "/img/sas_review.png",
          i: -3,
          j: 0,
        },
        {
          src: "/img/sas_statistics.png",
          i: -4,
          j: 0,
        },
        {
          src: "/img/sas_reserved.png",
          i: -5,
          j: 0,
        },
      ],
      labels: [
        "로고",
        "메인페이지",
        "유저메인페이지",
        "점주메인페이지",
        "점주매장페이지",
        "리뷰관리",
        "통계관리",
        "예약관리",
      ],
    },
    {
      id: 3,
      title: "GooGoo RandingPage",
      content: ["메인페이지"],
      description: [
        "메인페이지 메인페이지 구조 설계 - 메인페이지 영역 잡기/메인페이지 디자인 ",
      ],
      images: [
        {
          src: "/img/GooGoo.jpeg",
          i: 2,
          j: 0,
        },
        {
          src: "https://drive.google.com/file/d/19E_8E4ykemXXixCdkOwZk243kYcEYD2C/view?usp=sharing",
          i: 1,
          j: 1,
        },
      ],
      labels: ["로고", "메인페이지"],
    },
    {
      id: 4,
      title: "Noble-제작중",
      content: ["메인페이지", "로그인", "게시판", "TODOLIST", "관리자설정"],
      description: [
        "메인페이지설명",
        "로그인설명",
        "게시판설명",
        "TODOLIST설명",
        "관리자설정설명",
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
        {
          src: "https://i.ibb.co/gm7Cv1d/pexels-ivan-samkov-6968810.jpg",
          i: -3,
          j: 4,
        },
      ],
      labels: [
        "로고",
        "메인페이지",
        "로그인",
        "게시판",
        "TODOLIST",
        "관리자설정",
      ],
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
  const [setIsHovered] = useState(false);

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    if (e) e.preventDefault(); // e가 있을 때만 preventDefault 실행

    console.log("Sending email with data:", formData);

    emailjs.send(
      "lucky92", // EmailJS에서 발급된 Service ID
      "template_f02m4h9", // EmailJS에서 발급된 Template ID
      formData,
      "1RNc-JVK21uORNll7" // EmailJS에서 발급된 Public Key
    );

    // 입력값 초기화
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  useEffect(() => {
    const handleMessage = (event) => {
      console.log("Received message from iframe:", event.data);
      if (event.data === "sendEmail") {
        sendEmail(); // 최신 상태로 실행되도록 유지
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [formData]);
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
                <ReactTyped
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
                        src="https://cdn-icons-png.flaticon.com/512/1183/1183741.png"
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
                        src="https://cdn-icons-png.flaticon.com/128/28/28968.png"
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
                <form
                  id="contact-form"
                  className="form-horizontal"
                  role="form"
                  onSubmit={sendEmail}
                >
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="NAME"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <textarea
                    className="form-control"
                    rows="10"
                    placeholder="MESSAGE"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
