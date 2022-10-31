import { motion } from "framer-motion";
import { useState } from "react";

import "../styles/destination.scss";
// import data
import data from "../data.json";
//destination data from local json
const destinations = data.destinations;

export default function DestinationLayout() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <>
      <motion.div
        className='container'
        key={2}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className='wrapper d max-width'>
          <main className='hero__wrapper'>
            <div className='hero__flex-wrapper'>
              <span className='hero__number'>01</span>
              <span className='hero__subtitle'>Pick your destination</span>
            </div>

            <div className='article__d-wrapper'>
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                src={images.png}
                alt={name}
                className='hero__img'
              />
              <article className='article'>
                <div className='btn-container'>
                  {planets.map((item, index) => {
                    return (
                      <button
                        className={`btn-destination ${
                          index === value ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => setValue(index)}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>

                <h1 className='article__title'>{name}</h1>
                <p className='article__description'>{description}</p>

                <div className='article__footer'>
                  <div className='flex-wrapper'>
                    <span>Avg. distance</span>
                    <p>{distance}</p>
                  </div>
                  <div className='flex-wrapper'>
                    <span>Est. travel time</span>
                    <p>{travel}</p>
                  </div>
                </div>
              </article>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}
