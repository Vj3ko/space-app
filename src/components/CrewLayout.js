import { motion } from "framer-motion";
import { useState } from "react";

import "../styles/crew.scss";

//import data
import data from "../data.json";
//import crew data from local json
const crews = data.crew;

export default function CrewLayout() {
  const [crewMembers] = useState(crews);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crewMembers[value];

  return (
    <>
      <div className='container'>
        <motion.div
          key={3}
          className='wrapper c max-width'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <main className='hero__wrapper'>
            <div className='hero__flex-wrapper'>
              <span className='hero__number'>02</span>
              <span className='hero__subtitle'>Meet your crew</span>
            </div>

            <div className='article__c-wrapper'>
              <article className='article__crew'>
                <span className='article__crew_role'>{role}</span>
                <h2 className='article__crew_name'>{name}</h2>
                <p className='article__crew_bio'>{bio}</p>
                <div className='article__crew_btns--container'>
                  {crewMembers.map((_, index) => {
                    return (
                      <button
                        className={`crew-btn ${
                          index === value ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => setValue(index)}
                      ></button>
                    );
                  })}
                </div>
              </article>
              <div className='img_wrapper'>
                <img src={images.png} alt={name} />
              </div>
            </div>
          </main>
        </motion.div>
      </div>
    </>
  );
}
