import "./css/styleSidebar.css";
import { BiCog, BiHomeAlt, BiLayerPlus, BiLayerMinus, BiLogOut } from "react-icons/bi";

function SideBar() {
    return(
        <aside className="sidebar">
            <div className="top-sidebar">
                <span>Carteira</span>
            </div>
            <div className="body-sidebar">
                <div className="links">
                    <div className="icon-links">
                        <BiHomeAlt />
                    </div>
                    Home
                </div>
                <hr></hr>
                <div className="links">
                    <div className="icon-links">
                        <BiLayerPlus />
                    </div>
                    Entrada
                </div>
                <hr></hr>
                <div className="links">
                    <div className="icon-links">
                        <BiLayerMinus />
                    </div>
                    Saida
                </div>
                <hr></hr>
                <div className="links">
                    <div className="icon-links">
                        <BiCog />
                    </div>
                    Configuração
                </div>
            </div>
            <div className="footer-sidebar">
                <div className="logout">
                    <BiLogOut />
                    Sair
                </div>
            </div>
        </aside>
    );
}

export default SideBar;