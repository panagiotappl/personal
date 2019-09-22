import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Countries.css';

export function Japan() {
  return (
    <div className="country-container">
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="country-title">Japan</div>
          </Grid.Column>
          <Grid.Column>
            <div className="close-column">
              <Link to="/travels" className="close-icon">X</Link>
            </div>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </div>
  );
}
