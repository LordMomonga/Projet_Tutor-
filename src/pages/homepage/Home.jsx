import React, { Suspense } from 'react'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer';
import AboutSection from '../../components/AboutSection';
import { articles } from '../../articles';
import ArticleCard from '../../components/ArticleCard';
import { useScrollTo } from '../../components/useScrollTo';
import { TbArrowLeft } from 'react-icons/tb';
import { TbArrowRight } from 'react-icons/tb';
import { Canvas } from '@react-three/fiber';
import { Bus } from '../../../public/Bus';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  {Taxi} from '../../../public/Taxi';
import {motion} from "framer-motion"
const Bos = () =>{
  const ref = useRef()
    
    useFrame((state, delta) =>{
      ref.current.rotation.y += delta/2
    
    })
  return(
    <motion.mesh
    initial={{ opacity:0, y: -20}}
      animate={{ 
        x:0,
        y:-20,
        opacity:1, }}
      transition={{
        type:"spring",
        duration: 1.5}}
    position={[1, 0, 0]} size ={[0.5, 0.5, 0.5]} ref={ref} >
          <Bus />

          </motion.mesh>
  )
}
const Toxi = () =>{
  const ref = useRef()
    useFrame((state, delta) =>{
      ref.current.rotation.y += delta/2
    
    })
  return(
    <motion.mesh
    initial={{ opacity:0, y: -20}}
      animate={{ opacity:1, y: 0,
        x:0,
        opacity:1,}}
      transition={{
        type:"spring",

        duration: 0.8}}
    position={[1, -15, 0]} size ={[10, 10, 10]} scale={40} ref={ref} >
          <Taxi />

          </motion.mesh>
  )
}
const Home = () => {

  const [slide, setSlide] = useState(0)
  const models = [{
    model:<Bos />,
    description:"",
    Title:"Transport public"
}, {
  model:<Toxi />,
  description:"",
  Title:"Transport privée"
}]

  useEffect(() =>{
    if(slide > 1){  
      setSlide(0)
    }
    if(slide < 0){
      setSlide(1)
    }
  })
    const { t, i18n } = useTranslation();
    
    useScrollTo()
  
  return (
    <div className="text-center flex w-full flex-col justify-center items-center h-fit pt-20 md:pt-72">

    <div
      className='bg-gray-200 flex h-64 md:h-96 w-full absolute items-center justify-center gap-5 capitalize top-0 !bg-no-repeat !bg-cover'
      
    >
       <div className='relative mt-[30%] text-tertiary md:text-primary md:mt-[10%]'>
      <Canvas camera={{ position: [0, 20, 150]}}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false}/>
        
        <Suspense fallback={null}>
{ models[slide].model
}        </Suspense>
        <ContactShadows scale={210} blur={1} far={10} resolution={256} color="#007FF0"/>
        
      </Canvas>
      <div className=' flex justify-between absolute z-10 bottom-[25%] w-full'>
      <div className='bg-tertiary px-2 py-1 text-white rounded-xl cursor-pointer'
      onClick={() => {
        if (slide > 0)
        setSlide(slide - 1)
      else 
      setSlide(1)
      }}
      ><TbArrowLeft /></div>
      <div className='bg-tertiary px-2 py-1 text-white rounded-xl cursor-pointer'
       onClick={() => {
        if(slide < 1)
        setSlide(slide + 1)
        else setSlide(0)
       }}> <TbArrowRight /></div>
      </div>
      <div className='absolute top-[59%] left-[40%] text-gray-500'>
      <motion.h1
      initial={{ opacity:0, y: -20}}
      animate={{ opacity:1, y: 0}}
      transition={{duration: 0.8}}
      className='bold'> {models[slide].Title} <span className='text-2xl text-primary'>personnalisé</span> </motion.h1> 
      </div>

      <p className="text-4xl  text-tertiary md:text-gray-600 font-bold tracking-widest absolute top-[15%] z-10 left-[30%] ">BIENVENUE CHEZ <span className='text-5xl text-primary'>MOV</span> </p>

      </div>
      
    </div>
    

    <div className="flex flex-col gap-4 mt-24">
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-light bg-dark max-w-7xl">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold dark:text-dark text-white sm:text-[40px]/[48px]">
                  TRANSFORMER VOTRE EXPERIENCE DE TRANSPORT               
                  </h2>
                <p className='text-gray-500'>
En tant que pionier de la digitalisation dans le domaine du transport, nous nous engageons a fournir des solutions innovantes, fiables et adaptéés aux besoins de nos 
client.Avec notre application, transformez votre maniere de concevoir et de gerer le transport, pour un avenir plus efficace              </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className=" mb-5 flex flex-col gap-4 md:flex-row justify-center items-center">
              {articles.filter((_element, index) => index < 2).map((article, key) => <ArticleCard key={key} article={article} />)}
</div>
              <NavLink to="/formations" className="btn-secondary m-auto mt-8 text-white ">
                Affichez plus →
              </NavLink>
            </div>

          </div>
        </div>
      </section>
    </div>

      <AboutSection />
     
      <Footer />
  </div>
  )
}

export default Home
