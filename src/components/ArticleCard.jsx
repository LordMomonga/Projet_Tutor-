import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import ArticleDetail from "./ArticleDetail"
import ModalScreen from "./ModalScreen";
import { motion } from "framer-motion";
export default function ArticleCard(props) {
    const { article } = props;
    const [visible, setVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false); 
     
    

    return (
        <motion.div
        initial={{ opacity:0, y: -20}}
        animate={{ 
          x:-20,
          y:0,
          opacity:1, }}
        transition={{
          type:"spring",
          duration: 2}}
          // Adjust the duration as needed// Adjust the duration as needed
        className="w-[90vw] text-left z-10 sm:w-70  block shadow-card dark:shadow-none rounded-2xl dark:bg-white bg-tertiary">
            <div className="relative overflow-hidden bg-cover bg-no-repeat bg-light rounded-2xl ">
                <img
                    className="rounded-2xl "
                    src={article.image}
                    alt=""
                />
                <span onClick={() => setVisible(true)}>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white/10 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </span>
            </div>
            <div className="p-3">
                <h3 className="mb-2 font-bold leading-tight text-white">
                    {article.title}
                </h3>
                <p className="mb-4 text-lg line-clamp-2 text-gray-500">{article.description}</p>
                <div className="flex justify-between items-center">
                    <h5 className="font-medium leading-tight">
                    <span onClick={(e) => {
                        e.preventDefault()
                        setVisible(true)}}  className="text-primary hover:underline">Voir plus →</span>
                    </h5>
                   
                </div>
            </div>

            {visible && (
                <ModalScreen setVisible={setVisible}>
                    <div>
                        <div className="flex items-center px-5 mb-10 bg-white dark:bg-tertiary py-4">
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setVisible(false); // Close the modal and trigger exit animation
                                }}
                                className="mr-5 btn-secondary !py-0 !px-2"
                            >
                                <BiChevronLeft className="text-3xl" />
                            </div>
                            <h2 className="text-lg">Ajouter un plat</h2>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <ArticleDetail setVisible={setVisible} article={article} />
                        </div>
                    </div>
                </ModalScreen>
           
            )}
        </motion.div>
    );
}
