import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div>
      <p className="flex">Customers Page</p>
    </div>
  );
}
