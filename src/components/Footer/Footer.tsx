import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/payalsapariya/" className="logo">
        <span>payal</span>
        <span>sapariya.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/payalsapariya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B15483339685&text=Hello+Payal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  )
}
