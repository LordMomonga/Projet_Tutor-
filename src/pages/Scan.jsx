import LoginForm from "../components/LoginForm";
import Topbar from "../components/Topbar";

export default function Scan() {
    return (
        <div>
            <Topbar />
            <div className="min-h-screen w-full flex justify-center items-center gap-5">
             <a href="https://odream.site">  <img src="./images/OD.png" alt="" className="w-20 h-20 rounded-md shadow-md shadow-gray-500 " /></a>
               <span >cliquez pour plus d'information</span>
            </div>
        </div>
    )
}