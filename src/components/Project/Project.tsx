import { Container } from "./styles";
import newsapp from "../../assets/newsapp.png";
import ochiImage from "../../assets/ochiIamge.png";
import youtubeClone from "../../assets/youtubeclonec.png";
import uberCloneImage from "../../assets/uber.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="fadeIn">
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
                  {/* <li>✏ Wireframing & prototyping in Figma</li> */}
                  <li>👥 Usability testing & design improvements</li>
                </ul>
                <li className="ui_list">
                  <strong>User Research:</strong>
                </li>
                <ul>
                  <li>📊 Conducted interviews with 5 B2B clients to identify pain points</li>
                  <li>🔎 Analyzed competitor platforms to benchmark design patterns</li>
                  <li>📚 Created personas to define user goals and workflows</li>
                </ul>
                <li className="ui_list">
                  <strong>User Testing:</strong>
                </li>
                <ul>
                  <li>👥 Moderated usability tests with real clients to assess navigation</li>
                  <li>✅ Collected insights to optimize CTAs and improve task completion rate</li>
                  <li>🔄 Iterated designs based on feedback to enhance storytelling</li>
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
                {/* <li>Figma</li> */}
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>GSAP (GreenSock) for Animations</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn">
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
                  <strong>User Research:</strong>
                </li>
                <ul>
                  <li>📊 Analyzed ride-hailing apps to understand user flows</li>
                  <li>🚗 Conducted surveys with 50+ users to identify challenges in booking</li>
                  <li>🔍 Created journey maps to visualize rider and driver interactions</li>
                </ul>
                <li className="ui_list">
                  <strong>User Testing:</strong>
                </li>
                <ul>
                  <li>👥 Performed usability tests with 10 users for real-time booking flow</li>
                  <li>✅ Identified pain points related to navigation and status updates</li>
                  <li>🔄 Refined ride-booking interface based on user feedback</li>
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
                <li>Framer Motion</li>
                <li>Figma Auto Layout</li>
                <li>Figma Variants</li>
                <li>Figma Smart Animate</li>
                <li>Figma Plugins</li>
                <li>Figma Prototype Interaction</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn">
          <div className="project">
            <div className="">
              <a
                href="https://react-youtube-clone-lime.vercel.app/"
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
                  <strong>Objective:</strong> Build a responsive and
                  feature-rich YouTube-like interface with video browsing,
                  playback, and search.
                </li>
                <li className="ui_list">
                  <strong>Target Users:</strong>
                </li>
                <ul>
                  <li>✔ Users looking for video content and personalized recommendations</li>
                  <li>✔ Content creators managing and uploading videos</li>
                </ul>
                <li className="ui_list">
                  <strong>Key Features:</strong>
                </li>
                <ul>
                  <li>✔ Video browsing, playback, and recommendations</li>
                  <li>✔ Search functionality with filtering</li>
                  <li>✔ Responsive layout for mobile and desktop</li>
                  <li>✔ Comments and video interactions</li>
                </ul>
                <li className="ui_list">
                  <strong>My Role:</strong> UI/UX Designer & Developer
                </li>
                <ul>
                  {/* <li>🎨 Designed interactive interfaces in Figma</li> */}
                  <li>💻 Developed key features with React & Vite</li>
                  <li>🔍 Conducted usability testing for smooth video interactions</li>
                </ul>
                <li className="ui_list">
                  <strong>User Research:</strong>
                </li>
                <ul>
                  <li>📊 Analyzed top video streaming platforms for best practices</li>
                  <li>🎥 Interviewed 20+ users to understand expectations around video browsing</li>
                  <li>📚 Created personas to define key user needs and scenarios</li>
                </ul>
                <li className="ui_list">
                  <strong>User Testing:</strong>
                </li>
                <ul>
                  <li>👥 Conducted A/B testing on search & filtering UX</li>
                  <li>✅ Evaluated user satisfaction through video playback tests</li>
                  <li>🔄 Improved video recommendations and navigation experience</li>
                </ul>
                <li className="ui_list">
                  <strong>Key Takeaways:</strong>
                </li>
                <ul>
                  <li>✅ Enhanced search functionality and recommendations</li>
                  <li>🚀 Improved video playback UX with better loading times</li>
                  <li>🔄 Future: Adding playlist management and dark mode support</li>
                </ul>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>React Router</li>
                <li>API Integration (YouTube API)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn">
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
                  {/* <li>🎨 Designed wireframes & prototypes in Figma</li> */}
                  <li>
                    💻 Developed and integrated APIs for fetching news content
                  </li>
                  <li>
                    👥 Conducted usability testing to refine user interaction
                  </li>
                </ul>
                <li className="ui_list">
                  <strong>User Research:</strong>
                </li>
                <ul>
                  <li>📊 Interviewed news consumers to understand content preferences</li>
                  <li>📚 Analyzed popular news apps for feature comparison</li>
                  <li>🔎 Mapped user journeys to refine onboarding flow</li>
                </ul>
                <li className="ui_list">
                  <strong>User Testing:</strong>
                </li>
                <ul>
                  <li>👥 Conducted A/B testing on category filtering</li>
                  <li>✅ Refined notification preferences based on user feedback</li>
                  <li>🔄 Improved search functionality for faster results</li>
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
                <li>JavaScript</li>
                <li>Search API</li>
                <li>News API</li>
                <li>TailwindCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
