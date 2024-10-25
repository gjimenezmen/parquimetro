import React from 'react';
import { Car } from 'lucide-react';

interface HeaderProps {
  ratePerHour: number;
}

export function Header({ ratePerHour }: HeaderProps) {
  return (
    <div className="bg-indigo-600 p-6 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Parquímetro Digital</h1>
        <Car className="w-8 h-8" />
      </div>
      <p className="mt-2 opacity-90">Tarifa: ${ratePerHour.toFixed(2)}/hora</p>
    </div>
  );
}