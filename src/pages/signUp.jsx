import SignForm from "../components/signup";
import Topbar from "../components/Topbar";

export default function Sign() {
    return (
        <div>
            <Topbar />
            <div className="min-h-screen w-full flex justify-center items-center">
                <SignForm />
            </div>
        </div>
    )
}
