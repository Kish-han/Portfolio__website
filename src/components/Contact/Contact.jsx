import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      Contact
    </motion.div>
  )
}

export default Contact