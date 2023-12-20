import "./App.css";
import Sidebar from "./components/layouts/SideBar/Sidebar";
import MainPage from "./components/layouts/MainPage/MainPage";
import Header from "./components/layouts/Header/Header";
import MiniSideBar from "./components/MiniSideBar/MiniSideBar";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container className="app">
      <div className="main_interface">
        <div className="layout">
          <div className="interface_header">
            <Header />
          </div>
          <div className="main_interfacePage">
            <div className="interface">
              <Sidebar />
              <MainPage />
            </div>
          </div>
        </div>
        <div className="miniSidebar_interface">
          <MiniSideBar />
        </div>
      </div>
    </Container>
  );
}

export default App;
