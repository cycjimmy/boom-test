/**
 *  web init
 */

// component
import headerComponent from '../headerComponent/header.component';
import mainComponent from '../mainComponent/main.component';

export default () => {

  return Promise.all([
    // load header
    new headerComponent().load(),

    // load main
    new mainComponent().load(),
  ])

  .catch(err => console.error('Failed to init', err));
};

