import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateEvent = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './create-event')
);

const Events = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/forms`} />
      <Route
        path={`${match.url}/add`}
        render={(props) => <CreateEvent {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Events;