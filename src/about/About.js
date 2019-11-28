import React from 'react';
import { Container, Icon, Image } from 'semantic-ui-react';
import {useWindowSize} from '../hooks';
import Avatar from '../images/avatar.png';
import './About.css';

export default function About() {
  let [width] = useWindowSize();
  const isMobile = width <= 600;
  return (
    <Container text>
        <div className="about-me">
          <Image src={Avatar} size={isMobile ? "small" : "medium"}/>
          <div>
            <div className="me-info">
              <Icon name="computer" />
              Software Developer CERN // indico
            </div>
            <div className="me-info">
              <Icon name="map marker alternate" />
              Currently in Geneva, Switzerland
            </div>
            <div className="me-info">
              <Icon name="mail outline" />
              panagiotappl@gmail.com
            </div>
            <div className='icon-row'>
              <Icon name='instagram' />
              <Icon name='twitter' />
              <Icon name='github' />

            </div>
          </div>
        </div>
    </Container>
  );
}
