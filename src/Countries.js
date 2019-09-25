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
      <Grid.Row className="day-title">Day 1</Grid.Row>
      <Grid.Row className="day-subtitle">
        Flight to Narita airport & Asakusabashi & Akihabara
      </Grid.Row>
      {day1.map(row => {
        return (
          <Grid.Row key={row.key} columns={row.columnCount}>
            {row.columns.map(column => {
              return renderColumn(column);
            })}
          </Grid.Row>
        );
      })}
    </Grid>
  );
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
        <Grid.Row className="dates">19 Apr - 5 May</Grid.Row>
        <Grid.Row columns={2}>
        <Grid.Column>
          <InformationGrid />

        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  );
}
