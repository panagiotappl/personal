import React from 'react';
import { Container, Icon, Image, Header } from 'semantic-ui-react';
import Me from '../images/me.jpeg';
import { useWindowSize } from '../hooks';
import './About.css';

export default function About() {
  const [width] = useWindowSize();
  const isMobile = width <= 600;
  const imageSize = isMobile ? 'small' : 'medium';

  return (
    <Container className="container">
      <div className="about-me">
        <Image size="medium" src={Me} circular className="me-image"/>
        <span className="me-text">
          <Header as="h1" className="name-header">
            Panagiota Poulopoulou
            <Header.Subheader className="name-subheader">
              Software Developer @ CERN
            </Header.Subheader>
          </Header>
          <span>
            Likes computers, video games, video editing traveling, cooking and anything
            related to Japanese culture.
          </span>
        </span>
        <div className="socials">
          <Icon size="big" name="github" />
          <Icon size="big" name="twitter" />
          <Icon size="big" name="instagram" />
          <Icon size="big" name="mail outline" />
        </div>
      </div>
    </Container>
  );
}
