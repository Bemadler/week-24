
import './App.css';
import './index.css';
import Header from './components/header/Header'; 
import Content from './components/content/Content'; 
import LoginPage from './components/loginpage/LoginPage';

function App() {
  let userLoggedIn = true;

  return (
    <div className="App">
      <Header title="My List" />
      { userLoggedIn
        ? <Content /> 
        : <LoginPage /> 
      }


    </div>
  );
}

export default App;
