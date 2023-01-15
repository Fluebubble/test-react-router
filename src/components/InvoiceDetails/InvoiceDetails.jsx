import { getInvoicesById } from 'fakeApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const InvoiceDetails = () => {
  const params = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvoicesById(params.invoiceId).then(setInvoice);
  }, [params.invoiceId]);
  if (!invoice) {
    return;
  }

  return (
    <>
      <div>
        <NavLink to='/sales/invoices' >back to main</NavLink>
        <p>Recipient: {invoice.recipient}</p>
        <p>Account number: {invoice.account}</p>
        <p>Total amount: {invoice.total}</p>
        <p>Expire date: {new Date(invoice.date).toLocaleDateString()}</p>
      </div>
    </>
  );
};
