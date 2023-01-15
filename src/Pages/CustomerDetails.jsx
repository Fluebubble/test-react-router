import { getCustomerById } from 'fakeApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    getCustomerById(customerId).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return;
  }
  const backLinkHref = location.state?.from ?? '/customers';
  console.log(location.state?.from && 'zalupa');
  return (
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>ID: {customer.id}</p>
      <p>Name: {customer.name}</p>
    </main>
  );
};

export default CustomerDetails;
