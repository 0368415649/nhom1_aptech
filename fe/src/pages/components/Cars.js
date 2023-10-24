import React, { useEffect, useState } from 'react';

import './styles/Cars.scss';
import CarCard from './CarCard';
import http from '../../utils/http';

const Cars = ({ filter }) => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await http.get('/get_all_car_search', {
          params: {
            typeCar: filter.type || '',
            brand: filter.automaker || '',
            order_by_price:
              filter.price === 1 ? 'ASC' : filter.price === 2 ? 'DESC' : '',
            name: filter.search || '',
          },
        });
        setCars(data);
      } catch (error) {
        console.log('>> Check | error:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filter]);
  return (
    <div className="Cars">
      {cars.map((car) => (
        <CarCard key={car?.car_id} car={car} />
      ))}
      {cars.length === 0 && 'NO ITEM'}
    </div>
  );
};

export default Cars;
