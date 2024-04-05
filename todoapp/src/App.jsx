
import './App.css';
import './index.css';
import Header from './components/header/Header'; 
import Content from './components/content/Content'; 
import LoginPage from './components/loginpage/LoginPage';
import NavBar from './components/navbar/NavBar';
import Missing from './components/missing/Missing';
import News from './components/news/News';
import NewsPage from './components/news/NewsPage';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';


function App() {

  const news = [{id: 1, text: "Метод pomodoro для продуктивности"},
                {id: 2, text:"Основы тайм-менеджмента"}, 
                {id: 3, text:"Как успевать больше"}] 

  return (
    <Router>
    <div className="App">
      <Header title="My List" />
      <NavBar />
      <Routes>
        <Route path="/" element={ <Content /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/news" element={<News news={news} /> } />
        <Route path="/news/:id" element={ <NewsPage news={news} /> } />
        <Route path="*" element={ <Missing /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
