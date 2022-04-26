import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Routers from "./config/routers";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
class App extends React.Component {
  showRoter = (Routers) => {
    return Routers.map((item, index) => {
      return <Route key={index} path={item.path} element={item.element} />
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            {this.showRoter(Routers)}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter >
    );
  }
}
export default App;
