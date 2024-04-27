import React, { Suspense } from 'react'
import { Bus } from '../../../public/Bus'
import Sidebar from '../../layout/Sidebar/Sidebar'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import '../../App.css'
import Content from '../../layout/Content/Content'
import Topbar from '../../components/Topbar'
import { BiBus } from 'react-icons/bi'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import L from 'leaflet'
import { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react'



const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Créer une instance de carte Leaflet et la placer dans la div
    mapRef.current = L.map('map').setView([7.3697, 12.3547], 6); // Coordonnées du centre du Cameroun et niveau de zoom
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 5,
    }).addTo(mapRef.current);
    // Nettoyer la carte lors du démontage du composant
    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div id="map" className='md:h-[350px] md:w-[450px] w-[300px] h-[200px]' ></div>
  );
};

const Car = () => {
 
  return (
    <div className='app'>
      <Sidebar />
      
<div className='m-10 relative'>
    <div className='flex text-md md:text-2xl text-center center gap-2 text-gray-500 items-center'> <span className='text-xl md:text-3xl p-2 bg-gray-500 rounded-full text-tertiary'><BiBus /></span> Vehicules</div>
    <div></div>
</div>
<div className='md:fixed absolute top-[10%] mt-[70%] md:mt-[8%] md:h-[40vh] w-[300px] md:w-[50%] z-0 '>
   
<Canvas camera={{ position: [0, 20, 80] }}  className=' '>
       <ambientLight intensity={1} />
       <OrbitControls enableZoom={false}/>
       <Suspense fallback={null}>  

        <mesh position={[1, 0, 0]} scale={0.7} size ={[0.5, 0.5, 0.5]}>
        <Bus />

        </mesh>
           </Suspense>
           <ContactShadows scale={210} blur={1} far={10} resolution={256} color="#007FF0"/>


    
    </Canvas>
</div>
<div className="block gap-5 absolute z-5 top-[15%] md:top-[10%] right-[5%] md:right-[10%] shadow-xl shadow-gray-500 rounded-sm p-2 text-white bg-tertiary ">
  <h1 className='block text-xl md:text-3xl text-white mb-2'>location of vehicule</h1>
  <div className=' z-10 left-[50%]'>
<MapComponent />
</div>
<div className='flex justify-between'>
<button className='p-1 m-5 bg-blue-500 rounded-md '>
  verifier
</button>
<button className='m-5 p-1 bg-red-500 rounded-md'>
  signaler
</button>

</div>

</div>
<div>

</div>

      
    </div>
  )
}

export default Car
