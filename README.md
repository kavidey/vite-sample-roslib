# vite-sample-roslib

# Instructions

### To see the error in dev mode
1. Clone this repo
2. `cd` into local clone of repo
3. Run `npm install`
4. Run `npm run dev`
5. Open a web browser and go to `localhost:3000`
6. Open the console
7. You should see that `ReferenceError: Can't find variable: Buffer`

### To see it working in Production mode
1. Follow the instructions above
2. Run `npm run build`
3. Run `npm run preview`
4. Open a web browser and go to `localhost:3000`
5. Open the console
6. There shouldn't be any error, instead the ROSLIB object should be logged as intended
