// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import Link from '../_modules/link/link';


$(() => {
  new Link(); // Activate Link modules logic
  console.log('quiero to Yeogurt!');
  ScrollReveal().reveal('h1');
});
