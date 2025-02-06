
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import AddAuction from './components/AddAuction';
import EditAuction from './components/EditAuction';
import AllAuctionsToEdit from './components/AllAuctionsToEdit';
import {Route,Routes} from 'react-router-dom';
import ListSingularAuction from './components/ListSingularAuction';
import Login from './components/AdminLoginHardCode';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import DeletePage from './components/DeletePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Page1/>}/>
        <Route path='/page1' element ={<Page1/>}/>
        <Route path='/page2' element ={<Page2/>}/>
        <Route path ='/ListSingularAuction/:item_id' element = {<ListSingularAuction/>}/>
        <Route path='/AddAuction' element = {<AddAuction/>}/>
        <Route path='/EditAuction/:item_id' element = {<EditAuction/>}/>
        <Route path='/AllAuctionsToEdit' element = {<AllAuctionsToEdit/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/DeletePage' element = {<DeletePage/>}/>
      </Routes>   

    </div>
  );
}


export default App;
