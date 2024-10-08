import { AiFillLock, AiOutlineShoppingCart } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";

function ArticleDetail({ article, setVisible }) {
    return (
        <div className="space-y-4 md:space-y-6 border-2 border-transparent dark:bg-white bg-transparent p-5  pb-16">
            <div className="relative  overflow-hidden bg-cover bg-no-repeat bg-light w-fit m-auto rounded-2xl">
                <img className="rounded-2xl " src={article.image} alt="" />
                <NavLink to={`/food/${article._id}`}>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white/10 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </NavLink>
            </div>
            <div className="p-3">
                <h3 className="mb-2 font-bold leading-tight">{article.title}</h3>
                <p className="mb-4 text-lg">{article.description}</p>
            </div>

            <div className="dark:bg-light bg-dark p-2 rounded-lg pb-10">
                <h2 className="font-bold py-2">Extrait gratuit de la formation</h2>
                <iframe
                    className="h-auto md:h-96 m-auto w-full md:w-1/2 rounded-xl"
                    src="https://www.youtube-nocookie.com/embed/g_CG397SRIY?si=61Det2QnY1Va1So7&amp;controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>

                <div className="h-36 my-5 dark:bg-slate-300 opacity-80 bg-tertiary md:w-1/2 m-auto rounded-2xl flex justify-center items-center">
                    <AiFillLock className="text-3xl" />
                </div>
                <div className="h-10 my-5 dark:bg-slate-300 opacity-50 bg-tertiary md:w-1/2 m-auto rounded-2xl flex justify-center items-center">
                    <AiFillLock className="text-2xl" />
                </div>

                <div className="flex">
                    <button className="btn m-auto">Debloquer la formation<AiOutlineShoppingCart className="ml-2 text-xl" /></button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h5 className="font-medium leading-tight">
                    <a onClick={() => setVisible(false)} href="#" className="text-red-500 hover:underline flex items-center">Fermer <CgClose /></a>
                </h5>
            </div>
        </div>
    );
}

export default ArticleDetail;
