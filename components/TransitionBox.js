import { motion, useEffect } from "framer-motion";
import { useVariants } from "./useVariants";
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { getTitle } from "./getTitle";
import { useRouter } from "next/router";

const TransitionBox = ({ children }) => {
  const { pageVariant, variantProps } = useVariants();
  // get currrent path
  const { pathname } = useRouter();

  const docTitle = getTitle(pathname);

  return (
    <>
      <Head>
        <title> {docTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div variants={pageVariant(0.5, 0)} {...variantProps}>
        {children}
      </motion.div>
    </>
  );
};

TransitionBox.propTypes = {
  children: PropTypes.object,
};

export default TransitionBox;

/*
Custom component to do page transitions.

see the file with this same name in portfolio for 
The reason for moving <Head> template</Head>
here !

*/
