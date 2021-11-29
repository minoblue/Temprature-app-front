import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes.js';
import { AuthProvider } from './Context';
import RouteHandler from './Components/RouteHandler';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            {routes.map((route) => (
                <RouteHandler
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    isPrivate={route.isPrivate}
                />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
