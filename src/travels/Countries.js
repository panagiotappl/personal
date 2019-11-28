import React from 'react';
import { Container, Grid, Image, Header, List } from 'semantic-ui-react';
import MyBreadcrumbs from '../Breadcrumbs';
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
    <List className="list">
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
    <Container text>
      <MyBreadcrumbs path={path} />
      <Header size="huge" className="country-title">
        {title}
        <Header.Subheader as="h2">{subTitle}</Header.Subheader>
      </Header>
    </Container>
  );
}

function CountrySummary({ summary }) {
  return <SummaryList summary={summary} />;
}

function CountryDay({ day }) {
  return (
    <>
      <h2 className="day-title">{day.title}</h2>
      <InformationGrid day={day.content} />
    </>
  );
}

function CountryBody({ summary, days }) {
  return (
    <Container text>
      <CountrySummary summary={summary} />
      {days.map(day => (
        <CountryDay key={day.title} day={day} />
      ))}
    </Container>
  );
}

export function Country({ title, subTitle, summary, days, location }) {
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
