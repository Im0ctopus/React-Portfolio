import React, { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";

function App() {

  const [currentWork, setCurrentWork] = useState(1);

  function handleContactScroll() {
    const element = document.getElementById('contact');
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  function handleBallClick(value) {
    setCurrentWork(value);
  }

  function handleArrowClick() {
    switch (currentWork) {
      case 1:
        setCurrentWork(2);
        break;
      case 2:
        setCurrentWork(1);
        break;
    }
  }

  const timer = 5000;
  useEffect(() => {
    const change = setInterval(() => {
      handleArrowClick();
    }, timer);
    return () => clearInterval(change);
  }, [currentWork])

  return (
    <>
      <div className="first">
        <div className="first_left">
          <div className="first_left_title">
            <p className='first_left_tittle_name'>Leo<span>'s</span></p>
            <p className='first_left_title_port'>Portfolio</p>
          </div>
          <div className="first_left_desc">
            <p>🚀 Hello, I'm Leo, a passionate Front-end Engineer dedicated to crafting exceptional user experiences.</p>
            <p>💻 I specialize in turning design concepts into interactive, responsive, and feature-rich web applications. I have experience with UI/UX design principles, ensuring that the end product not only functions flawlessly but looks stunning too.</p>
            <p>🎨 Beyond just coding, I appreciate the art of design. I collaborate seamlessly with designers to transform visions into reality. My design sensibilities allow me to create visually appealing interfaces that engage users and elevate the overall user experience.</p>
            <p>🌐 Languages: HTML5, CSS3, JavaScript</p>
            <p>⚛️ Frameworks: React.js</p>
          </div>
        </div>
        <div className="first_right">
          <div className="first_right_img">
            <img src="/profile.webp" alt="" />
          </div>
          <div className="first_right_socials">
            <a href="https://github.com/Im0ctopus" target="_blank">
              <FaGithub color="white" size={'40px'} />
            </a>
          </div>
          <div className="first_right_button">
            <a onClick={handleContactScroll}>Contact Me</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="second">
        <div className="second_left">
          <div className="second_left_title">
            <div className="text">
              <p className="second_left_title_why">WHY</p>
              <p className="second_left_title_me">ME</p>
            </div>
            <p className="second_left_title_pointer">?</p>
          </div>
        </div>
        <div className="second_right">
          <p><span>Embark on a journey of unparalleled web experiences with me</span>, Leo, your dedicated Front-end Engineer. I bring a fusion of passion, precision, and design finesse to the table. Specializing in transforming design concepts into vibrant, responsive web applications, I seamlessly blend code with creativity.</p>
          <p><span>Craftsmanship:</span> I don't just code; I sculpt digital masterpieces. Every line of code is infused with a dedication to excellence, ensuring your web applications not only function seamlessly but dazzle with visual brilliance.</p>
          <p><span>Collaborative Design:</span> Beyond the realm of programming, I am an artist in the digital space. Collaborating effortlessly with designers, I translate visions into reality, creating interfaces that captivate and elevate user experiences.</p>
          <p><span>User-Centric Approach:</span> My work isn't just about lines of code; it's about people. I prioritize UI/UX design principles to ensure your audience not only navigates effortlessly but enjoys an aesthetically pleasing journey through your digital landscape</p>
          <p><span>Technological Proficiency:</span> Fluent in HTML5, CSS3, and JavaScript, with a stronghold on React.js, I leverage cutting-edge technologies to deliver web solutions that are not just functional but at the forefront of innovation.</p>
          <p><a className="second_right_contact" onClick={handleContactScroll}>Contact Me</a>, and let's embark on a collaborative journey to redefine and elevate your digital presence. Together, we'll create web experiences that leave a lasting impact. 🚀</p>
        </div>
      </div>
      <hr />
      <div className="third">
        <div className="third_left">
          <div className="third_right_showcase">
            <div className={`third_right_showcase_1 ${currentWork == 1 ? 'show' : ""}`}>
              <a href="https://react-music-player-flax.vercel.app/" target="_blank"><img className="left" src="/MuiscPlayer.png" alt="" /></a>
              <a href="https://react-local-spotify.vercel.app/" target="_blank" > <img className="right" src="/Spotify PlayerBar.png" alt="" /></a>
            </div>
            <div className={`third_right_showcase_2 ${currentWork == 2 ? 'show' : ""}`}>
              <a target="_blank" href="https://react-weather-page.vercel.app/"><img className="left" src="/WeatherApp.png" alt="" /></a>
              <a target="_blank" href="https://react-card-quiz.vercel.app/"><img className="right" src="/QuizGame.png" alt="" /></a>
            </div>
          </div>
          <div className="third_left_balls">
            <div onClick={() => handleBallClick(1)} className={`third_left_balls_ball ${currentWork == 1 ? 'currentBall' : ""}`}></div>
            <div onClick={() => handleBallClick(2)} className={`third_left_balls_ball ${currentWork == 2 ? 'currentBall' : ""}`}></div>
          </div>
          <GrNext onClick={handleArrowClick} size={'40px'} style={{ right: '20%' }} className="arrows" />
          <GrPrevious onClick={handleArrowClick} size={'40px'} style={{ left: '20%' }} className="arrows" />
        </div>
        <div className="third_right">
          <div className="third_right_title">
            <p className='third_right_title_some'>Some</p>
            <p className="third_right_title_ofmy">of my</p>
            <p className="third_right_title_work">Work</p>
          </div>
        </div>
      </div>
      <hr />
      <div id="contact" className="fourth">
        <div className="fourth_left">
          <div className="fourth_left_title">
            <p className="fourth_left_title_contact">Contact</p>
            <p className="fourth_left_title_me">Me</p>
          </div>
        </div>
        <div className="fourth_right">
          <div id="contact" className="fourth_right_contcs"></div>
        </div>
      </div>

    </>
  )
}

export default App
