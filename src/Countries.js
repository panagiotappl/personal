import React from 'react';
import { Grid, Image, Header, List } from 'semantic-ui-react';
import { day1, day2 } from './days';
import { japanSummary } from './summary';
import MyBreadcrumbs from './Breadcrumbs';
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

function InformationGrid({ day }) {
  return (
    <Grid stackable className="info-grid">
      {day.map(row => {
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

function SummaryList({ summary }) {
  return (
    <List celled className="list">
      {summary.map(s => (
        <List.Item>
          <List.Icon name="marker" />
          {s}
        </List.Item>
      ))}
    </List>
  );
}

export function Japan(props) {
  return (
    <div className="country-container">
      <Grid container>
        <Grid.Row>
          <MyBreadcrumbs path={props.location.pathname} />
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={12}>
            <Header size="huge" className="country-title">
              Japan - Two Week Iterinary{' '}
              <Header.Subheader as="h2">19 Apr - 5 May</Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <SummaryList summary={japanSummary} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <h2 className="day-title">
              1. Flight to Narita airport & Asakusabashi & Akihabara
            </h2>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <InformationGrid day={day1} />
          </Grid.Column>
          <Grid.Column className="info-column" width={4}></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <h2 className="day-title">
              2. Shinjuku Gyoen & Samurai Musem & Shinjuku & Senso-ji Temple
            </h2>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <InformationGrid day={day2} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
