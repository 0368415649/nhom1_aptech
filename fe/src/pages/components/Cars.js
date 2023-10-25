import React, { useEffect, useState } from 'react';

import porsche from '../../assets/imgs/poscher.jpg';
import avatar from '../../assets/imgs/luffy.jpg';

import './styles/Cars.scss';
import CarCard from './CarCard';
import http from '../../utils/http';

const Cars = ({ filter }) => {
  const [cars, setCars] = useState([]);
  console.log('>> Check | cars:', cars);
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
              filter.automaker === 1
                ? 'ASC'
                : filter.automaker === 2
                ? 'DESC'
                : '',
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
  }, [filter.automaker, filter.search, filter.type]);
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
