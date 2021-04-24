> A Melodic Trainer featuring multiple instrument sounds.

# Project Name
"Musician's Ear Trainer"

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Todo List](#todo-list)
* [Known Issues](#known-issues)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General Info
This is a music ear-training application. Requires audio enabled. Relative Pitch memory trainer. Includes a music generator with classically voiced SATB four part harmony.

## Technologies
* HTML5
* CSS3
* ES6

## Features
* In progress

## To-do List:
* Create Melodic Dictation Trainer.
* Implement local storage for generator default values.
* Add 'Tonic Start' and 'Accidental Mode' to score history.
* Add user interaction on generator 
* Add percussion bank.
* Add Violin and Contrabass to generator.
## Known Issues
* Windows 95 feel UI
* Generator: undefined value occuring occasionally for unknown reason in alto voice. Does not interrupt playback. Seems to only happen in alto, perhaps surrounding times where the voice drifts from it's initial range. Adding individual voice range suppport may solve issue. 
* Generator: When the voice drifts out of it's given range due to voice-leading considerations, the associated gainNode cannot mute previous note, and overlap can occur, producing unwanted dissonance. Most likely happening during resolution direction or chord member check functions.


## Status
Project is: _in development_.

## Inspiration
I built a memory game during my career transition that inspired me to connect the old and the new. Synesthesia and color hearing both led me to include color choice options. 

## Contact
Created by Ashley Thomas (https://www.ashthomasweb.com/) - feel free to contact me!