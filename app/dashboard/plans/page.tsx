import React from 'react';
import Image from 'next/image';

export default function PlansPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="relative w-full h-48">
        <Image src="/gymplan3.jpg" alt="Gym Logo" layout="fill" objectFit="cover" className="rounded-t-lg"/>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Plan Básico</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Acceso ilimitado a todas las máquinas y pesas. Horario flexible.</p>
        <div className="flex justify-center">
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300">
          Seleccionar
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="relative w-full h-48">
      <Image src="/gymplan2.jpg" alt="Gym Logo" layout="fill" objectFit="cover" className="rounded-t-lg"/>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Plan Premium</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Incluye clases grupales y acceso a la zona de spa y sauna.</p>
        <div className="flex justify-center">
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Seleccionar
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="relative w-full h-48">
      <Image src="/gymplan1.jpg" alt="Gym Logo" layout="fill" objectFit="cover" className="rounded-t-lg"/>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Plan VIP</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Acceso exclusivo 24/7, entrenador personal y más beneficios VIP.</p>
        <div className="flex justify-center">
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300">
          Seleccionar
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

