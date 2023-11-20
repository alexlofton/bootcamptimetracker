# Work Day & Time Management Planner
This simple application was made for a user to utilize as a way to plan out daily tasks and track time management. 

## Deployed Link
https://alexlofton.github.io/bootcamptimetracker/

## Overview
<img width="956" alt="11 20 1" src="https://github.com/alexlofton/bootcamptimetracker/assets/147463152/dde9b8fb-fdb9-4ca0-86a2-d04eb428850d"><br>
<center>When the user enters data into the text box it is saved to localStorage. The user refreshes the page and the data that was stored is retrieved from localStorage and loaded into textbox.<br>
<img width="917" alt="11 20 2" src="https://github.com/alexlofton/bootcamptimetracker/assets/147463152/3c39257c-c49e-44b9-9a95-cb149c4efc75"><br>
The time box is color cordinated based on past, present, and future. All past boxes will be grey, current box is red, and future boxes will be green.<br>
<img width="909" alt="11 20" src="https://github.com/alexlofton/bootcamptimetracker/assets/147463152/92f6b835-a454-437f-9b78-e754cae7ef3d"><br>

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
