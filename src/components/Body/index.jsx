// Body.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";
import { motion } from "framer-motion";
import { CalendarDays, Boxes, Zap, Globe } from "lucide-react";
import { MdEmail } from "react-icons/md";

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
              <a href="https://www.linkedin.com/in/chandana-trilok-236ab7209/" target="_blank" className="download">
                <span>
                  <FaLinkedin className="icon mx-1" />
                </span>
                LinkedIn
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandanasuresh.1310@gmail.com" target="_blank" rel="noreferrer" className="contact">
                <span>
                  <MdEmail className="icon mx-2" />
                </span>
                Contact Me
              </a>
              <a href="https://github.com/settings/profile" target="_blank" className="contact">
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
        <div className="skill_container">
          <div>
            <img src="/images/1.png" width={40} height={40}></img>
          </div>
          <div>React.js</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/2.webp" width={40} height={40}></img>
          </div>
          <div>Next.js</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/3.png" width={40} height={40}></img>
          </div>
          <div>TypeScript</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/4.png" width={40} height={40}></img>
          </div>
          <div>JavaScript</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/5.png" width={40} height={40}></img>
          </div>
          <div>Tailwinf CSS</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/6.png" width={40} height={40}></img>
          </div>
          <div>Redux Toolkit</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/7.png" width={40} height={40}></img>
          </div>
          <div>Node.js</div>
        </div>
        <div className="skill_container">
          <div>
            <img src="/images/8.png" width={40} height={40}></img>
          </div>
          <div>Git</div>
        </div>
      </div>
    </section>
  );
};

export default Body;
