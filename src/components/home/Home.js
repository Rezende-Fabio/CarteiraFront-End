import SideBar from "./Sidebar";
import Body from './Body';
import './css/styleHome.css';

function Home(){
    return(
        <div className="container">
            <SideBar />
            <Body />
        </div>
    );
}

export default Home;