import { Container } from "./styles";
import newsapp from "../../assets/newsapp.png";
import ochiImage from "../../assets/ochiIamge.png";
import youtubeClone from "../../assets/youtube.png";
import uberCloneImage from "../../assets/uber.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="">
              <a
                href="https://ochi-flax.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="Website_Image"
                  src={ochiImage}
                  alt="Visit site"
                />
              </a>
            </div>
            <div className="body">
              <h3>OCHI - Presentation Design Agency</h3>
              <ul>
                <li>
                  <strong>Objective:</strong> Improve usability, structure, and
                  visual storytelling.
                </li>
                <li className="ui_list">
                  <strong>Target Users:</strong> Businesses needing presentation
                  design & UI/UX expertise.
                </li>
                <li className="ui_list">
                  <strong>Key Features:</strong>
                </li>
                <ul>
                  <li>✔ Clean, modern, and interactive UI</li>
                  <li>✔ Smooth animations & engaging transitions</li>
                  <li>✔ Portfolio showcase with case studies</li>
                  <li>✔ Clear call-to-actions for lead generation</li>
                </ul>
                <li className="ui_list">
                  <strong>My Role:</strong> UX Designer & Researcher
                </li>
                <ul>
                  <li>🔍 User research & competitive analysis</li>
                  <li>✏ Wireframing & prototyping in Figma</li>
                  <li>👥 Usability testing & design improvements</li>
                </ul>
                <li className="ui_list">
                  <strong>Key Takeaways:</strong>
                </li>
                <ul>
                  <li>✅ Storytelling-driven approach enhanced engagement</li>
                  <li>🚀 Balanced aesthetics with performance</li>
                  <li>🔄 Future: Explore more micro-interactions</li>
                </ul>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Figma</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>GSAP (GreenSock) for Animations</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="">
              <a
                href="https://uber-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="Website_Image"
                  src={uberCloneImage}
                  alt="Visit site"
                />
              </a>
            </div>
            <div className="body">
              <h3>Uber Clone Website</h3>
              <ul>
                <li>
                  <strong>Objective:</strong> Develop a responsive, feature-rich
                  platform with real-time interactions and modern UI.
                </li>
                <li className="ui_list">
                  <strong>Target Users:</strong>
                </li>
                <ul>
                  <li>✔ Riders seeking fast and reliable booking</li>
                  <li>✔ Drivers managing ride requests efficiently</li>
                </ul>
                <li className="ui_list">
                  <strong>Key Features:</strong>
                </li>
                <ul>
                  <li>✔ Intuitive ride-booking interface</li>
                  <li>✔ Animated navigation bar and footer</li>
                  <li>✔ Real-time ride tracking and status updates</li>
                  <li>✔ Seamless user-driver communication</li>
                </ul>
                <li className="ui_list">
                  <strong>My Role:</strong> UI/UX Designer & Developer
                </li>
                <ul>
                  <li>🎨 UI/UX design & prototyping in Figma</li>
                  <li>💻 Animation implementation for nav bar & footer</li>
                  <li>👥 Usability testing & refinement</li>
                </ul>
                <li className="ui_list">
                  <strong>Key Takeaways:</strong>
                </li>
                <ul>
                  <li>
                    ✅ Real-time updates and engaging animations improved user
                    experience
                  </li>
                  <li>🚀 Balanced performance with smooth transitions</li>
                  <li>
                    🔄 Future: Exploring micro-interactions for enhanced
                    engagement
                  </li>
                </ul>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Framer Motion </li>
                <li>Figma Auto Layout </li>
                <li>Figma Variants </li>
                <li>Figma Smart Animate</li>
                <li>Figma Plugins</li>
                <li>Figma Prototype Interaction</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="image-container">
              <a
                href="https://news-app-react-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="Website_Image" src={newsapp} alt="Visit site" />
              </a>
            </div>
            <div className="body">
              <h3>Daily News App</h3>
              <ul>
                <li>
                  <strong>Objective:</strong> Provide users with the latest news
                  updates across multiple categories with an intuitive,
                  real-time interface.
                </li>
                <li className="ui_list">
                  <strong>Target Users:</strong>
                </li>
                <ul>
                  <li>✔ Users looking for quick and reliable news updates</li>
                  <li>
                    ✔ Readers interested in customized content from different
                    sources
                  </li>
                </ul>
                <li className="ui_list">
                  <strong>Key Features:</strong>
                </li>
                <ul>
                  <li>✔ Live news updates from multiple sources</li>
                  <li>
                    ✔ Category-based content filtering (e.g., Tech, Sports,
                    Business)
                  </li>
                  <li>✔ Real-time push notifications for breaking news</li>
                  <li>✔ Personalized user preferences and saved articles</li>
                </ul>
                <li className="ui_list">
                  <strong>My Role:</strong> UI/UX Designer & Developer
                </li>
                <ul>
                  <li>🎨 Designed wireframes & prototypes in Figma</li>
                  <li>
                    💻 Developed and integrated APIs for fetching news content
                  </li>
                  <li>
                    👥 Conducted usability testing to refine user interaction
                  </li>
                </ul>
                <li className="ui_list">
                  <strong>Key Takeaways:</strong>
                </li>
                <ul>
                  <li>
                    ✅ Improved real-time content delivery and user engagement
                  </li>
                  <li>
                    🚀 Enhanced filtering options and optimized search
                    functionality
                  </li>
                  <li>
                    🔄 Future: Adding AI-based article suggestions and voice
                    search
                  </li>
                </ul>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScriptJs</li>
                <li>Search API</li>
                <li>News API API</li>
                <li>TailwindCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="image-container">
              <a
                href="https://view-tube-orpin.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="Website_Image"
                  src={youtubeClone}
                  alt="Visit site"
                />
              </a>
            </div>
            <div className="body">
              <h3>YouTube Clone Project</h3>
              <ul>
                <li>
                  <strong>Objective:</strong> Develop a dynamic video streaming
                  platform that mimics core YouTube functionalities with modern
                  UI/UX.
                </li>
                <li className="ui_list">
                  <strong>Target Users:</strong>
                </li>
                <ul>
                  <li>✔ Users looking for seamless video streaming</li>
                  <li>
                    ✔ Viewers interested in interactive video browsing and
                    search
                  </li>
                </ul>
                <li className="ui_list">
                  <strong>Key Features:</strong>
                </li>
                <ul>
                  <li>✔ Toggle hamburger menu for smooth navigation</li>
                  <li>✔ Real-time search using YouTube API</li>
                  <li>✔ Dynamic video cards displaying live content</li>
                  <li>✔ Nested comments with real-time updates and deletion</li>
                  <li>
                    ✔ API polling with automatic comment removal after a set
                    duration
                  </li>
                </ul>
                <li className="ui_list">
                  <strong>My Role:</strong> Frontend Developer
                </li>
                <ul>
                  <li>
                    💻 Developed key features using React, Redux, and APIs
                  </li>
                  <li>🔍 Optimized search with debouncing and API polling</li>
                  <li>👥 Enhanced user interaction with dynamic UI updates</li>
                </ul>
                <li className="ui_list">
                  <strong>Key Takeaways:</strong>
                </li>
                <ul>
                  <li>✅ Boosted search efficiency and user engagement</li>
                  <li>
                    🚀 Achieved a 40% improvement in application performance
                  </li>
                  <li>🔄 Future: Implement advanced video recommendations</li>
                </ul>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScriptJs</li>
                <li>TMBD API's</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
