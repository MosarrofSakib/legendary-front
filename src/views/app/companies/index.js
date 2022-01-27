import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateCompanie = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './create-companie')
);

const UI = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/forms`} />
      <Route
        path={`${match.url}/add`}
        render={(props) => <CreateCompanie {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default UI;
