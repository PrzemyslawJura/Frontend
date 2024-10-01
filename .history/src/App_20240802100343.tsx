import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Workers from './pages/Workers/Workers';
import Transactions from './pages/Transactions/Transactions';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <nav className="mb-8">
          <Link to="/" className="mr-4 text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Workers} />
          <Route path="/about" component={Transactions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
