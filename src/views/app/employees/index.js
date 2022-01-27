import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateEmployee = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './create-employee')
);

const ViewEmployees = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './view-employee')
);


const UI = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/forms`} />
      <Route
        path={`${match.url}/add`}
        render={(props) => <CreateEmployee {...props} />}
      />
      <Route
        path={`${match.url}/view`}
        render={(props) => <ViewEmployees {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default UI;
