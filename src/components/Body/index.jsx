// Body.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";
import { motion } from "framer-motion";
import { CalendarDays, Boxes, Zap, Globe } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <CalendarDays size={24} />,
    value: "3+",
    label: "Years Experience",
    color: "purple",
  },
  {
    icon: <Boxes size={24} />,
    value: "10+",
    label: "Modules Delivered",
    color: "green",
  },
  {
    icon: <Zap size={24} />,
    value: "40%",
    label: "Performance Improvement",
    color: "yellow",
  },
  {
    icon: <Globe size={24} />,
    value: "Open to Global Opportunities",
    label: "Based in Bangalore ",
    color: "pink",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const Body = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const emailLink = isMobile ? "mailto:chandanasuresh.1310@gmail.com" : "https://mail.google.com/mail/?view=cm&to=chandanasuresh.1310@gmail.com";

  return (
    <section className="hero">
      ¯¸
      <div className="hero__container">
        {/* RIGHT */}
        <div className="hero__image-container">
          <img src="/images/CHANDANA-IMAGE.png" alt="Chandana" className="hero__image"></img>
        </div>
        {/* LEFT */}
        <div className="hero__content">
          <h1>
            Hi, I'm <span className="gradient">Chandana</span> 👋
          </h1>

          <p>
            Frontend Developer with 3+ years of experience building scalable web applications using React.js, Next.js, and TypeScript. I enjoy transforming complex problems into
            seamless, intuitive user experiences.
          </p>

          <p>
            Specialized in responsive interfaces, performance optimization, API integrations, and maintainable frontend architecture. Passionate about building products that matter
            and collaborating with teams that value quality, ownership, and innovation.
          </p>

          {/* STATS */}
          <div className="stats">
            {stats.map((item, index) => (
              <motion.div key={index} className="stat__card" variants={fadeUp} initial="hidden" animate="visible" custom={index} whileHover={{ y: -5, scale: 1.03 }}>
                <div className={`stat__icon ${item.color}`}>{item.icon}</div>

                <div className="stat__info">
                  <h5>{item.value}</h5>
                  <span>{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="hero__actions ">
            <div className="">
              <a href="https://linkedin.com/in/chandana-trilok-236ab7209" target="_blank" className="download">
                <span>
                  <FaLinkedin className="icon mx-1" />
                </span>
                LinkedIn
              </a>
              <a href={emailLink} target={isMobile ? "_self" : "_blank"} rel="noreferrer" className="contact">
                <span>
                  <MdEmail className="icon me-2" />
                </span>
                Contact Me
              </a>
              <a href="https://github.com/chandanabs13" target="_blank" className="contact">
                <span>
                  <FaGithub className="icon me-2" />
                </span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="skills">
        <a className="skill_container" href="https://react.dev/" target="_blank" rel="noreferrer">
          {" "}
          <div>
            <img src="/images/1.png" width={40} height={40}></img>
          </div>
          <div>React.js</div>
        </a>
        <a className="skill_container" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          <div>
            <img src="/images/2.webp" width={40} height={40}></img>
          </div>
          <div>Next.js</div>
        </a>
        <a className="skill_container" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">
          <div>
            <img src="/images/3.png" width={40} height={40}></img>
          </div>
          <div>TypeScript</div>
        </a>
        <a className="skill_container" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <div>
            <img src="/images/4.png" width={40} height={40}></img>
          </div>
          <div>JavaScript</div>
        </a>
        <a className="skill_container" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <div>
            <img src="/images/5.png" width={40} height={40}></img>
          </div>
          <div>Tailwinf CSS</div>
        </a>
        <a className="skill_container" href="https://redux.js.org/" target="_blank" rel="noreferrer">
          {" "}
          <div>
            <img src="/images/6.png" width={40} height={40}></img>
          </div>
          <div>Redux Toolkit</div>
        </a>
        <a className="skill_container" href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noreferrer">
          <div>
            <img src="/images/7.png" width={40} height={40}></img>
          </div>
          <div>Node.js</div>
        </a>
        <a className="skill_container" href="https://git-scm.com/docs" target="_blank" rel="noreferrer">
          <div>
            <img src="/images/8.png" width={40} height={40}></img>
          </div>
          <div>Git</div>
        </a>
      </div>
    </section>
  );
};

export default Body;
