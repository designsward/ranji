import { Container } from "./styles";
import Ranjitha from "../../assets/about.png";
import htmlIcon from "../../assets/html-ico.png";
import cssIcon from "../../assets/css-ico.png";
import linux from "../../assets/ubuntu_5969336.png";
import java from "../../assets/java.png";
import python from "../../assets/python-ico.png";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Ranjitha} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I am an enthusiastic Computer Science student aiming to be a Linux Administrator. I have completed a Linux certification course and am currently pursuing a DevOps AWS certification course at Besant Technologies. I stay updated with industry trends and am eager to apply my skills and contribute to your team. Thank you for considering my application.
          </p>
        </ScrollAnimation>
       
        

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={linux} alt="Linux" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={java} alt="Wordpress" />
            </ScrollAnimation>
          </div>

          

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          
        </div>
      </div>
      
    </Container>
  )
}
