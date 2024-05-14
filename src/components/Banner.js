import { useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/spaceluffy.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer", "Web Developer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
        }


    return (
        <section className="banner" id="home">
            <Container>
                <row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm a "}<span className="wrap">{text}</span></h1>
                        <p>I'm a full-stack developer who blends the technical world of coding with the creative realms of art. Creating art has been a lifelong passion, sharpening my eye for detail and instilling a unique perspective that I bring to crafting digital experiences. Just as an artist carefully applies brushstrokes, I meticulously weave lines of code to deliver visually stunning yet highly functional solutions.</p>
                        <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </row>
            </Container>

        </section>
    )
}