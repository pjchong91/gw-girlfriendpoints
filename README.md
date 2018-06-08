# Hobby Project #1: Girlfriend Points
* Author: P. Chong, WDP Student 2018 Q2

## Description and Objective: 
- Create a multiview application that allows user to input points, a memo, and provide a sum for points
- Additional features will include Highfives over time, Quotes on Beb (inspo' Quotes on Dev)
- User should be able to add/delete/edit points events[ie. 50 points, June 5th, Dinner with Inlaws]
- This hobby app is built from using "Create-React-App @ https://github.com/facebook/create-react-app" as a base

## Using:
- React.js, Redux

## Questions Encountered and Learning Acquired:
* Tried to pass data across sibling pages
  - After creating multiple static pages that routed to each other, I built up a view (PointsPage.js) that would take an input from one component (AddPoints.js) and then output the point events on another component in the form of a list (PointEvents.js).  
  - I wanted the sum of the points to be displayed on a central hub page (TableofContent.js) and when I directed to that page, it broke because it didnt have access to states of the sibling page (PointsPage.js)
  - I'm going to need redux.

## Currently working on:
* Implementation of redux
  - https://www.youtube.com/watch?v=ZRE6e_0eQeQ&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a&index=6



## Goals for Future Improvement:
- Incorporate data storage
- Create users (Yves & Pam)
