import { Template } from 'meteor/templating';
import { Canvas } from './canvas.js';

import './main.html';

Template.canvas.onRendered(function() {
  const canvas = new Canvas('khanvas');
  console.log(canvas);
});