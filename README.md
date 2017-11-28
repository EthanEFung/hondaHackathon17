# hondaHackathon17

## About this app

The purpose of this application is to address the challenges that the Los
Angeles faces transitioning into a smart city.

## How To Run This application

From the command line

```
npm install # install the dependencies
npm start # to launch the node server OR
npm run dev # to launch developers server that instantly updates
```

## About The Current File Structure

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

Currently our implementation receives the coordinates of a car from the
connected mobility sdk. It then sends the coordinate data to our data module
which contains a hash of recent collisions based upon road coordinates. It then
sends a filtered list of recent collisions within the vicinity of the coordinate
given, and the application then pings an alert module to notify the clients
phone to drive carefully near the historically dangerous intersections and
roads. This is accomplished using the Apple Care API.

## Top-Level Overview: The Strategy Moving forward

The intent of this project is to serve a machine learning python script that is
trained with a collision dataset maintained by the city(Vision Zero API, and LA
Open data API). The independent variables of time of day, weather, and street
intersections are utilized by our algorithm to determine whether the current
location of the car has a high risk collision induced injuries. We can forsee in
the future of also considering major public events as variables that influence
traffic.

This algorithm will be cached in our server to be utilized when an HTTP request
is sent to our node server, and updated on a daily basis. Ideally, the UI will
track the geolocation on set intervals, and query our server to determine in
real time the risk of the cars location, while the application is in use.

Check the assets folder for Lucid Charts of the current implementation and
future implementation

## About This Server

The code here written for the server is meant for future use to serve our
Machine Learning Module. A route and controller has been written in order to
communicate with our Machine Learning script which will respond with test
prediction having been trained prior.

## TODOs

* A UI

* Our server will need a way to make REST calls to train our machine learning
  algorithm when our data module receives new collision data from the Vision
  Zero and LA Open APIs. A route and controller will be implemented to execute
  this.

* To scale the application, it will be best to house the ML algorithm on a
  seperate python server.
