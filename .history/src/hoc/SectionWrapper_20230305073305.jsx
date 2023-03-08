import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section variants={staggerContainer} initial='hidden' animate>
        <Component />
      </motion.section>
    )
  }
}

export default SectionWrapper
