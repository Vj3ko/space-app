import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "../styles/technology.scss";
//import data
import data from "../data.json";
//get technology data from data
const technologiesArray = data.technology;

export default function TechnologyLayout() {
  const [technologies] = useState(technologiesArray);
  const [value, setValue] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const { name, images, description } = technologies[value];

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  return (
    <>
      <div className='container'>
        <motion.div
          key={4}
          className='wrapper t max-width'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <main className='hero__wrapper'>
            <div className='hero__flex-wrapper'>
              <span className='hero__number'>03</span>
              <span className='hero__subtitle'>Space Launch 101</span>
            </div>

            <div className='article__t-wrapper'>
              <div className='img_t-wrapper'>
                <img
                  src={
                    windowSize.innerWidth > 1024
                      ? images.portrait
                      : images.landscape
                  }
                  alt={name}
                />
              </div>
              <div className='btns--container'>
                {technologies.map((_, index) => {
                  return (
                    <button
                      className={`technology-btn ${
                        index === value ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => setValue(index)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              <article className='article__technology'>
                <span className='article__technology_subtitle'>
                  The terminology ...
                </span>
                <h2 className='article__technology_name'>{name}</h2>
                <p className='article__technology_description'>{description}</p>
              </article>
            </div>
          </main>
        </motion.div>
      </div>
    </>
  );
}
