import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import useScrollProgress from '@/hooks/useScrollProgress';

interface TemplateProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template: React.FC<TemplateProps> = ({ children }) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main variants={variants} initial="hidden" animate="enter" transition={{ type: 'tween', delay: 0.5, duration: 0.6 }}>
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
