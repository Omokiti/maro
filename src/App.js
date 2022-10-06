import './App.css';
import Header from './components/Header';
import TopRes from './components/TopRes';
import Booking from './components/Booking'
import Services from './components/Services';
import Explore from './components/Explore';
import DownloadApp from './components/DownloadApp';
function App() {
  return (
    <div className="App">
    <Header/>
     <TopRes/>
     <Booking/>
     <Services/>
     <Explore/>
     <DownloadApp/>
    </div>
  );
}

export default App;
