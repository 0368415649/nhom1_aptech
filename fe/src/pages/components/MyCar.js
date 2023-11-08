import React, { useEffect, useState } from 'react';

import CarRow from './CarRow';

import './styles/MyCar.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const MyCar = () => {
  const { user } = useUserContext();
  const [cars, setCars] = useState([]);
  console.log('>> Check | cars:', cars);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/get_all_my_car', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setCars(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);
  return (
    <div className="Tab-content MyCar">
      {cars.map((car, k) => (
        <CarRow car={car} key={k} />
      ))}
    </div>
  );
};

export default MyCar;
