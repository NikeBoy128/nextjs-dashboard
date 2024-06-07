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
      <div className="flex flex-wrap justify-center gap-6">
        {dataPlanes.map((plan) => (
          <div key={plan.name} className="w-72 max-w-xs bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <img src={plan.image} alt={plan.name} className="object-cover w-full h-full" />
            </div>
            <div className="p-5 flex flex-col justify-between">
              <div>
                <a href="#" className="block">
                  <h5 className="mb-2 text-xl font-semibold text-gray-900 hover:text-blue-600 transition duration-300">
                    {plan.name}
                  </h5>
                </a>
                <p className="mb-3 text-gray-700">
                  {plan.description}
                </p>
              </div>
              <div className="mt-auto flex justify-center">
                <Formplanmodal id={plan.id} name={plan.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
