import './style.css'

// import * as ROSLIB from 'roslib';
import 'roslib/build/roslib'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

console.log(ROSLIB);
