import { TbPlant2 } from "react-icons/tb";
import { TbBus } from "react-icons/tb";
import Logo from "./logoDC.jpeg"
export default function Footer() {
    return (
        <footer className="bg-gray-50 rounded-lg shadow  m-4 mt-28 md:w-full md:-mb-24">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="text-red-700 flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                       <img src={Logo} alt="" className="h-10 w-10 rounded-md shadow-md shadow-gray-500"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white tracking-widest">D&C</span>
                    </a>
                    <ul className="flex flex-wrap items-center md:justify-start justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 bg-white sm:text-center dark:text-gray-400 dark:bg-tertiary">© 2024 <a href="#" className="hover:underline">D&C</a>. All Rights D&C.</span>
            </div>
        </footer>


    )
}
