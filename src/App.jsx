import React from "react"
import { FaGithub } from "react-icons/fa";

function App() {

  function handleContactScroll() {
    const element = document.getElementById('contact');
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

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
          <p className='second_left_desc'></p>
        </div>
        <div className="second_right">
          <div className="second_right_title">
            <p className="second_right_title_why">WHY</p>
            <p className="second_right_title_me">ME?</p>
          </div>
        </div>
        <div className="third">
          <div className="third_left">
            <div className="third_left_title">
              <p className='third_left_title_some'></p>
              <p className="third_left_title_ofmy"></p>
              <p className="third_left_title_work"></p>
            </div>
            <div className="third_right">
              <div className="third_right_showcase"></div>
            </div>
          </div>
        </div>
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
      </div>
    </>
  )
}

export default App
