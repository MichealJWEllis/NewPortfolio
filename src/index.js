import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage'
import Resume from './pages/Resume';
import Portfolio from "./pages/Portfolio";
import CssBaseline from '@material-ui/core/CssBaseline'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route exact path="/NewPortfolio" element={<HomePage />} />
      <Route path="resume" element={<Portfolio />} />
      <Route path="portfolio" element={<Resume />} />
      <Route path="*" element={
        <main style={{ padding: "1rem", backgroundColor: "black" }}>
          <section class="notFound">
            <div class="img">
              <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
              <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
            </div>
            <div class="notfound">
              <h1>404</h1>
              <h2>PAGE NOT FOUND</h2>
              <h3>BACK TO HOME?</h3>
              <a href="/" class="yes">YES</a>
              <br></br>
              <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
            </div>
          </section>
        </main>
      } />
    </Routes>
  </BrowserRouter >,
  rootElement
);