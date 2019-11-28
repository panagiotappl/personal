import React from 'react';
import { Grid, Image, Header, List } from 'semantic-ui-react';
import { japanDays } from './days';
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
        <List.Item key={s}>
          <List.Icon name="marker" />
          {s}
        </List.Item>
      ))}
    </List>
  );
}

function CountryTitle({ path, title, subTitle }) {
  return (
    <Grid container>
      <Grid.Row>
        <MyBreadcrumbs path={path} />
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column width={12}>
          <Header size="huge" className="country-title">
            {title}
            <Header.Subheader as="h2">{subTitle}</Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function CountrySummary({ summary }) {
  return (
    <Grid.Row columns={2}>
      <Grid.Column width={10}>
        <SummaryList summary={summary} />
      </Grid.Column>
    </Grid.Row>
  );
}

function CountryDay({ day }) {
  return (
    <>
      <Grid.Row columns={2}>
        <Grid.Column width={12}>
          <h2 className="day-title">{day.title}</h2>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={12}>
          <InformationGrid day={day.content} />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}

function CountryBody({ summary, days }) {
  return (
    <Grid container stackable>
      <CountrySummary summary={summary} />
      {days.map(day => (
        <CountryDay key={day.title} day={day} />
      ))}
    </Grid>
  );
}

export function Country({title, subTitle, summary, days, location}) {
  return (
    <div className="country-container">
      <CountryTitle
        path={location.pathname}
        title={title}
        subTitle={subTitle}
      />
      <CountryBody summary={summary} days={days} />
    </div>
  );
}
