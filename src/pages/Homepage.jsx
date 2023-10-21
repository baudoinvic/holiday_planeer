import React from 'react'
import Intro from '../container/Intro';
import Aboutus from '../container/Aboutus';
import Gallery from '../container/Gallery';
import Testimony from '../container/Testimony';
import Home from '../container/Home';

const Homepage = () => {
  return (
    <>
      <Home />
      <Aboutus />
      <Intro />
      <Gallery />
      <Testimony />
    </>
  );
}

export default Homepage