# Gratitude: Data Visualization Of individual comparison to world data

## Overview | Live (TBD)
Gratitude is a data visualization tool to those curious on their personal standing in comparison to the world through various data mediums such as food, income, and available leisure time.

## Functionality & MVP 
Gratitude users are able to: 
* Input their own income information to compare to those of other countries. 
* Input caloric intake (a general measure of the availability of food) in countries 
* Input leisure time in order to compare how the rest of the world fares with your current availabilty of leisure. 

In addition, this project contains: 
 * An end of simulation event that will show how you fare in percentage form from other individuals.
 * A closing statement relating back to the title of the project. 

## Data & APIs 
WorldBank hosts an API (free of charge) that carries a large data set regarding different countries from around the globe. 

## WireFrame 
![alt_text](https://i.imgur.com/D5XRXSp.png)

## Design
users bar will load last and have a red or green gradient effect depending on their standing in the world income/food/leisure average.

## Architecture & Technologies 
Gratitude is built with:
Javascript for data retrieval, computation, and DOM manipulation.
D3.js + HTML + SVG + CSS for visualization and interatction 
Webpack and Babel to bundle js files. 

## Bonus Features 
Future implementations will include the ability to sort by individual countries for comparison. 