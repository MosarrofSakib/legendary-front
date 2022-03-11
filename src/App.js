import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './helpers/Firebase';
import AppLocale from './lang';
import { NotificationContainer } from './components/common/react-notifications';
import {
  adminRoot,
  UserRole,
} from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import { ProtectedRoute } from './helpers/authHelper';

const Login = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './views/user/login')
);
const Register = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './views/user/register')
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/user')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);
const ViewUnauthorized = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/unauthorized')
);

const App = ({ locale }) => {
  const [userLoggued, setUserLoggued] = useState(false);
  const direction = getDirection();
  const currentAppLocale = AppLocale[locale];
  useEffect(() => {
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [direction]);

  const getCookieValue = (name) => (
	document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

  useEffect(()=>{
	const cookie = getCookieValue("lgLegendary");
	if (cookie === "Test") {
		setUserLoggued(true);
		// window.location = "/app/dashboards/default"
	}
  },[])
//   adminRoot = userLoggued ? adminRoot :ç "/login";
  return (
    <div className="h-100">
		<IntlProvider
			locale={currentAppLocale.locale}
			messages={currentAppLocale.messages}
		>
			<>
			<NotificationContainer />
			<Suspense fallback={<div className="loading" />}>
				{!userLoggued && 
					<Router>
						<Switch>
							<Route
								path={`/login`}
								render={(props) => <Login {...props} setUserLoggued={setUserLoggued} />}
							/>
							<Route
								path={`/register`}
								render={(props) => <Register {...props} setUserLoggued={setUserLoggued} />}
							/>
							<Route
								path="/error"
								exact
								render={(props) => <ViewError {...props} />}
							/>
							<Redirect exact from="/" to={"/login"} />
							<Redirect to="/error" />

						</Switch>
					</Router>
				}
				{userLoggued && (
					<Router>
						<Switch>
							<ProtectedRoute
								path={adminRoot}
								component={ViewApp}
								roles={[UserRole.Admin, UserRole.Editor]}
							/>
							<Route
								path="/error"
								exact
								render={(props) => <ViewError {...props} />}
							/>
							<Route
								path="/unauthorized"
								exact
								render={(props) => <ViewUnauthorized {...props} />}
							/>
							<Route
								path="/app"
								exact
								render={(props) => <ViewUser {...props} />}
							/>
							<Redirect exact from="/login" to={adminRoot} />
							
							<Redirect exact from="/" to={adminRoot} />
							
							<Redirect to="/error" />
						</Switch>
					</Router>
				)}
			</Suspense>
			</>
		</IntlProvider>
    </div>
  );
};

const mapStateToProps = ({ authUser, settings }) => {
  const { currentUser } = authUser;
  const { locale } = settings;
  return { currentUser, locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
