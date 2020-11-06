import React, { Fragment } from 'react';
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import GlobalStyle from "../sidebar/styles";

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };


  const variants1 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


export default function Navigation() {
    return (
       <Fragment>
       <GlobalStyle />
       <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }} variants={variants}>
          {items.map(item => (
            <Item key={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
      </Fragment>
    );
  }


function Item() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
        <Fragment>
      <motion.li layout  initial={{ borderRadius: 5 }} variants={variants1}>
        <motion.div layout className="divLi">
        <motion.button onClick={toggleOpen}><FiChevronDown/></motion.button>
         
        </motion.div>
        <motion.div layout  initial={{ borderRadius: 5 }}>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.div>
        
        </motion.li>

       
        </Fragment>
    );
  }
  
  function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row" />
        <div className="row" />
        <div className="row" />
      </motion.div>
    );
  }
  
  const items = [0, 1, 2, 3];


