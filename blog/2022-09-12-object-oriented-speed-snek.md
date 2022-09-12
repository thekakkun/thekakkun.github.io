---
title: "Developing Speed Snek: Defining the in-Game Objects"
tags: [object oriented programming, speed snek, front end]
date: 2022-09-12
---

## Motivation

I've known about object oriented programming (OOP) for a while, and I've used objects and classes in my code whenever it seemed like a good idea. However, 99% of my code uses functional programming, and I haven't had a good chance to go in-depth with OOP. I figured creating a game would be a good chance to actually use OOP.

## Implementing OOP

At this point, I know the syntax around OOP but not much about implementing it. Going by my best guess, here's how I think it should look like.

### The core objects

- `Game`: Keeps track of the game state such as the score and speed limit.
  - `Snek`: Should have an array of body segments. Checks to make sure it hasn't crashed into the walls or itself.
    - `Path`: The path created by the user's finger or mouse. The snek should follow this path.
  - `Board`: Understands the open areas in the board
    - `Pellet`: Randomly placed in an open location. Eating it will add a segment to the snek.

We shall see how my assumptions play out as I go through developing the game.
