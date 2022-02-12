import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ViewCompanies = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './view-companies')
);

const UI = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/forms`} />
      <Route
        path={`${match.url}/view`}
        render={(props) => <ViewCompanies {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default UI;
