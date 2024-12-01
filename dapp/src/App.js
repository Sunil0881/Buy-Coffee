import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.js"
import TelegramWrapper from "../src/components/TelegramWrapper.js"

function App() {

  return (
    <div>
    <TelegramWrapper>
         <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          </TelegramWrapper>
     
    </div>
  );
}

export default App;
