import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { day1 } from './days';
import './Countries.css';

function renderColumn({ type, content, key }) {
  if (type === 'image') {
    return (
      <Grid.Column key={key}>
        <Image src={content} />
      </Grid.Column>
    );
  } else {
    return (
      <Grid.Column key={key} className="text">
        {content}
      </Grid.Column>
    );
  }
}

function InformationGrid() {
  return (
    <Grid stackable>
     <Grid.Row className="dates">19 Apr - 5 May</Grid.Row>
        <Grid.Row className="day-title">Day 1</Grid.Row>
        <Grid.Row className="day-subtitle">
          Flight to Narita airport & Asakusabashi & Akihabara
        </Grid.Row>
      {day1.map(row => {
        return (
          <Grid.Row key={row.key} columns={row.columnCount} >
            {row.columns.map(column => {
              return renderColumn(column);
            })}
          </Grid.Row>
        );
      })}
    </Grid>
  );
}

function InfoItem({day, info}) {
  return (
    <div>
       <div className="info-column-day">{day}</div>
       <div className="info-column-text"> {info}</div>
    </div>
  )
}
export function Japan() {
  return (
    <div className="country-container">
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="country-title">Japan</div>
          </Grid.Column>
          <Grid.Column>
            <div className="close-column">
              <Link to="/travels" className="close-icon">
                X
              </Link>
            </div>
          </Grid.Column>
        </Grid.Row>
        
        </Grid>
        <Grid reversed='mobile' stackable>
        <Grid.Row columns={2} >
          <Grid.Column>
            <InformationGrid />
          </Grid.Column>
          <Grid.Column className="info-column">
            <InfoItem day='Day 1' info='Flight to Narita airport & Asakusabashi & Akihabara'/>
            <InfoItem day='Day 2' info='Yoyogi park & Harajuku & Samurai Musem & Shinjuku & Senso-ji Temple'/>
            <InfoItem day='Day 3' info='Odabara & TheLab borderless & Ginza Street & Golden Gai'/>
            <InfoItem day='Day 4' info='The East Gardens of The Imperial Palace & Meiji Jingu & Tokyo Metropolitan & Shibuya Crossing'/>
            <InfoItem day='Day 5' info='Hakone & Traditional Japanese dinner'/>
            <InfoItem day='Day 6 & Day 7' info='Takayama'/>
            <InfoItem day='Day 8 & Day 9' info='Shiragawa-go & Kanazawa'/>
            <InfoItem day='Day 10' info='Tenryu-ji Temple & Arashiyama forest'/>
            <InfoItem day='Day 11' info='Kinkaku-ji & Kyoto Districts & Kiyomizu-dera'/>
            <InfoItem day='Day 12' info='Fushimi Inari & Drink at bar in Kyoto'/>
            <InfoItem day='Day 13' info='Trip to Koyasan & Meditation with monks & Tour in Koyasan semetary'/>
            <InfoItem day='Day 14' info='Morning Bhudist rituals & Trip back to Tokyo'/>
            <InfoItem day='Day 15' info='Akihabara & Hair Saloon &  Takeshita Street & Nakano'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
