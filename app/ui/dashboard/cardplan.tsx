'use client';
//import Image from 'next/image';
import Formplanmodal from './formplanmodal';
import { getPlans } from './interfaces/api/api';
import { useEffect, useState } from 'react';
import { PlanesInterface } from './interfaces/userlist';

export default function CardPlan() {
  const [dataPlanes, setDataPlanes] = useState<PlanesInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlans();
      setDataPlanes(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {dataPlanes.map((plan) => (
        <div key={plan.name} className="max-w-xs rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="relative h-48 w-full">
            {/* Aquí puedes agregar contenido como una imagen */}
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {plan.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              {plan.description}
            </p>
            <div className="flex justify-center">
              <Formplanmodal />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
