import './style.css'

// import 'roslib/build/roslib'
import ROSLIB from './roslib.shim';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

console.log(ROSLIB);
