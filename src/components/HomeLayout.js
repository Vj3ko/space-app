import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/home.scss";

export default function HomeLayout() {
  return (
    <>
      <motion.div
        className='container'
        key={1}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className='wrapper h max-width'>
          <div className='hero'>
            <span className='hero__intro'>So, you want to travel to</span>
            <h1 className='hero__title'>space</h1>
            <p className='hero__description'>
              Let's face it; if you want to go to spacem you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link to='/destination' className='action-btn'>
            Explore
          </Link>
        </div>
      </motion.div>
    </>
  );
}
