import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const InvoicePDF = dynamic(() => import('./pdf'), {
  ssr: false,
});

const View = () => {
  const [, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return <InvoicePDF />;
};

export default View;
