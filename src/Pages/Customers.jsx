import { SearchBox } from 'components/SearchBox/SearchBox';
import { getCustomers } from 'fakeApi';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value === '' ? {} : { filter: value });
  };

  const visibleCustomers = useMemo(
    () =>
      customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [customers, filter]
  );

  return (
    <main>
      <SearchBox value={filter} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(customer => (
            <li key={customer.id}>
              <Link to={`${customer.id}`} state={{ from: location }}>
                {customer.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Customers;
