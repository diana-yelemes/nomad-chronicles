import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { FigureContext } from '../context/FigureContext';
import Item from './Item';

const PopularFigures = () => {
  const { figures } = useContext(FigureContext); // Use figures from context
  const [popularFigures, setPopularFigures] = useState([]);

  useEffect(() => {
    if (Array.isArray(figures)) {
      const data = figures.filter((item) => item.popular);
      setPopularFigures(data.slice(0, 5));
    }
  }, [figures]);

  return (
    <section className="max-padd-container py-16 bg-white">
      <Title
        title1="Popular"
        title2=" Figures"
        titleStyles="pb-10"
        paraStyles="!block"
        para="The most commonly studied figures!"
      />
      {/* Container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {popularFigures.map((figure) => (
          <div key={figure._id}>
            <Item figure={figure} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFigures;
