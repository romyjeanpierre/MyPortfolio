import React from 'react';
import bootstrapCards from '../assets/portfolio/bootstrapCards.png';
import connect4 from '../assets/portfolio/connect4.png';
import CryptoCurrencies from '../assets/portfolio/CryptoCurrencies.png';
import StarWarsReact from '../assets/portfolio/StarWarsReact.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1, 
      src: bootstrapCards
    }, 
    {
      id: 2, 
      src: connect4
    },
    {
      id: 3, 
      src: CryptoCurrencies
    },
    /*{
      id: 4, 
      src: StarWarsReact
    },*/
   
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Portfolio
          </p>
          <p className="py-6">Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-2xl shadow-white-200 hover:shadow-cyan-500">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;