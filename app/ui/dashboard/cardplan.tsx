'use client';
import Image from 'next/image';
import { getPlans } from './interfaces/api/api';
import { useEffect, useState } from 'react';
import { PlanesInterface } from './interfaces/userlist';

export default  function CardPlan() {
  const [dataPlanes, setDataPlanes] = useState<PlanesInterface[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlans();
      setDataPlanes(response.data);
    };
    fetchData();
  }, []);
  return dataPlanes.map((plan) => (
    <div  key={plan.name} className="max-w-xs rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="relative h-48 w-full">
        <img
         src={plan.image}
         alt='imagen'
          layout="fill" objectFit="cover" className="rounded-t-lg"/>
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
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-green-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Seleccionar
            <svg
              className="ml-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  ));
}
