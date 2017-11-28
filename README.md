# hondaHackathon17

## About this app

The purpose of this application is to address the challenges that the Los
Angeles faces transitioning into a smart city.

## How to run this application

From the command line

```
npm install
```

to launch the node server

```
npm start
```

to launch developers server that instantly updates

```
npm run dev
```

## About the Current File Structure

```
{ root }
    |----{ client }
    |----{ test }
    |----{ server }
            |----{ controllers }
            |----{ routes }
            |----index.js server file
            |----sampleModel python file
```

## Current Implementation: The End-Result

!(assets/Honda Hackathon 2017 Current Implementation.pdf)

## Top-Level Overview: The Strategy Implemented

The intent of this project is to train a machine learning python script that is
trained with a collision dataset maintained by the city. The independent
variables of time of day, weather, and street intersections. Are utilized by our
algorithm to determine whether the current location of the car has a high risk
collision induced injuries. We can forsee in the future of taking into account
major public events as independent variables as well.

This algorithm is cached in our server to be utilized when an HTTP request is
sent to our node server, and updated on a daily basises. Ideally, the UI will
track the geolocation on set intervals, and query our server to determine in
real time the risk of the cars location, while the application is in use.
