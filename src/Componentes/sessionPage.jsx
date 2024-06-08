import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

const SuccessPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const qrInfo = JSON.parse(decodeURIComponent(searchParams.get('qrInfo')));

  const [ticketUsed, setTicketUsed] = useState(false);

  useEffect(() => {
    const scanQRCode = setTimeout(() => {
      setTicketUsed(true);
    }, 10000); 

    return () => clearTimeout(scanQRCode);
  }, []); 

  return (
    <div>
      <QRCode value={JSON.stringify(qrInfo)} />
      {ticketUsed && <p>¡El boleto ha sido utilizado!</p>}
    </div>
  );
};

export default SuccessPage;
