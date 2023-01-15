import { lazy } from 'react';
// import { CustomerDetails } from 'Pages/CustomerDetails';
// import { Customers } from 'Pages/Customers';
// import { Sales } from 'Pages/Sales';
import { Navigate, Route, Routes } from 'react-router-dom';
import { InvoiceDetails } from './InvoiceDetails/InvoiceDetails';
// import { Invoices } from './Invoices/Invoices';
import { Layout } from './Layout/Layout';

const Sales = lazy(() => import('../Pages/Sales'));
const Customers = lazy(() => import('../Pages/Customers'));
const CustomerDetails = lazy(() => import('../Pages/CustomerDetails'));
const Invoices = lazy(() => import('../components/Invoices/Invoices'));

export const App = () => {
  return (
    <>
      {/* <p>kek</p> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index page</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposites" element={<div>Deposites</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
    </>
  );
};
