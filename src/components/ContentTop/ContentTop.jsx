import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/sidebarContext";
import { BiMenu } from "react-icons/bi";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler text-2xl text-gray-500" onClick={() => toggleSidebar() }>
                <BiMenu/>
            </button>
            <h3 className="content-top-title text-gray-500">Home</h3>
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
            <button className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop
