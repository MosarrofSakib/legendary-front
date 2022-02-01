import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateEvent = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './create-event')
);

const ViewEvents = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './view-events')
);

const ReportsEvents = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './report-events')
);

const DetailsEvents = React.lazy(() =>
  import(/* webpackChunkName: "ui-forms" */ './details-event')
);


const Events = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/forms`} />
      <Route
        path={`${match.url}/add`}
        render={(props) => <CreateEvent {...props} />}
      />
      <Route
        path={`${match.url}/view`}
        render={(props) => <ViewEvents {...props} />}
      />
      <Route
        path={`${match.url}/reports`}
        render={(props) => <ReportsEvents {...props} />}
      />
      <Route
        path={`${match.url}/details`}
        render={(props) => <DetailsEvents {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Events;