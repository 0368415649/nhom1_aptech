import React, { useEffect, useState } from 'react';

import CarRow from './CarRow';

import './styles/Favorite.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const Favorite = () => {
  const [cars, setCars] = useState([]);
  console.log('>> Check | cars:', cars);
  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/get_favorite_car', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setCars(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);
  return (
    <div className="Tab-content Favorite">
      {Array(3)
        .fill(null)
        .map((i, k) => (
          <CarRow key={k} />
        ))}
    </div>
  );
};

export default Favorite;
