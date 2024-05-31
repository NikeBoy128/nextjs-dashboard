'use client';

import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { validateLogin } from './dashboard/interfaces/api/api';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AlertComponent from './dashboard/alert';

// Componente de Alerta
const Alert: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="relative bg-white rounded-lg p-8 max-w-md">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Alerta</h3>
          <p className="text-gray-700">{message}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={onClose}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState<{ message: string; code: number } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();

  const handleLogin = async (event: { preventDefault: () => void }) => {
    setAlert(null);
    event.preventDefault();
    //const user = await validateLogin({ email, password });
    //if (user.accessToken) {
      if (email=='admin@40gmail.com' && password=='admin16') {
      setShowAlert(true);
      setTimeout(() => {
        router.push('/dashboard'); // Redirige usando useRouter de next/navigation
      }, 1000);
    
    } else {
      setAlert({ message: 'Credenciales de Acceso Incorrecto', code: 400 });
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <form className="space-y-3" onSubmit={handleLogin}>
      {showAlert && <Alert message="Inicio de sesión exitoso" onClose={closeAlert} />}
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full">
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        {alert && <AlertComponent message={alert.message} code={alert.code} />}
        <div className="flex h-8 items-end space-x-1"></div>
      </div>
    </form>
  );
}
