import React from 'react';
import Image from 'next/image';
import CardPlan from '@/app/ui/dashboard/cardplan';

export default function PlansPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
      <CardPlan />
  </div>
  );
}

