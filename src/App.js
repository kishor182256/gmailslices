import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import {BrowserRouter as Router,Switch,Link, Route} from "react-router-dom";
import EmailList from "./Components/EmailList";
import Mail from "./Components/Mail";
import './App.css';
import SendMail from "./Components/SendMail";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Components/Login";

function App() {

  const sendMessageIsOpen = useSelector(state => state.mail.sendMessageIsOpen);
  console.log(sendMessageIsOpen);

  const user = useSelector(state => state.user);

  return (

    

    <Router>
      {!user ?<Login/>:( <div className="app">
     <Header/>
      <div className="app_body">
        <SideBar/>
        <Switch>
          <Route path="/">
            <EmailList/>
          </Route>

          <Route path="/mail">
            <Mail/>
          </Route>
        </Switch>
      </div>
      {sendMessageIsOpen &&<SendMail/>}
    </div>) }
     

    </Router>
  );
}

export default App;
