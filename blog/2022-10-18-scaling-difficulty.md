---
title: "Speed Snek: Tweaking the Game Difficulty"
tags: [speed snek, front end, javascript, game design]
date: 2022-10-18
---

This is a post about the development of [Speed Snek](https://github.com/thekakkun/speed-snek). The game is intended to be playable on both PC and touchscreen, they provide different experiences due to their input and display hardware.

| Device     | Display              | Input method      |
| :--------- | :------------------- | :---------------- |
| PC         | Large and horizontal | Mouse or touchpad |
| Smartphone | Small and vertical   | Touchscreen       |

A word of warning before going any further. There's no satisfying conclusion to this post. There are a lot of systems at play when comparing gameplay differences between the platforms, and I wasn't able to analyze each of them from the ground-up to logically explain things.

In this blog post, I've just looked into the hardware differences between PC and smartphones that affect the gameplay. The next step might have been to look at the human factors and kinematic differences between the two, but that's a whole other rabbit hole I'm not looking to go into for now.

## Display differences

This one's easy. PCs tend to have large horizontal displays while smartphones have small vertical ones. Since screen orientation doesn't really matter for Speed Snek, the game area is in a fixed 2:3 ratio, and is rotated based on what will best fit the screen.

I've defined the narrow side of the game area to be a maximum of 600px. This is shrunk down in case it doesn't fit, which also scales down the snek dimensions and pellet sizes.

## Input method differences

A touchscreen device is said to provide _direct manipulation_, which means that the user directly interacts with objects shown on a screen. When users are interacting with an element shown on the screen, they can scroll and zoom as if they are interacting with a physical object. In order to preserve this illusion of it being a physical object, there is (generally) a one-to-one relationship between the user's pointer movement and the movement of on-screen elements. In other words, if you drag your finger up one inch, the webpage under your finger also moves up by the same amount. (As a side note, Apple changed the direction of the two finger touchpad scroll in 2011 to match the direct manipulation metaphor. This now seems to be the industry standard.)

In contrast, mouse and touchpad inputs on PC are indirect manipulation methods. You're not directly interacting with the elements on the screen, but instead doing so via the mouse cursor and scroll wheel. There is not one-to-one relationship between the mouse input and objects on the screen, so unlike on a touchscreen, dragging an element one inch using a mouse won't translate to one inch of movement on the screen. And that's okay since you're never given the illusion of interacting with an element directly. However, there might be some gameplay implications there.

### Movement amplification on mice

Note: I'm ignoring mouse acceleration. I'm also ignoring inputs from touchpad. This article is written from the perspective of a mouse user, and those things aren't detectable with JavaScript.

How is a mouse's movement translated to cursor movements? A mouse's sensitivity is defined in _dots per inch_ (DPI). Each time the mouse is moved an inch, a set number of dots are sent to the PC. This value is defined by the capabilities of the mouse hardware, and depending on the mouse, it may be fixed or configurable by the user.

But what the hell are are dots? The next step is to convert that to pixels, which is where scaling comes in. As mentioned previously, some mice have fixed DPIs, but there needs to be a way for users to be able to set mouse sensitivity. Users can configure the scale within software so that each dot from the mouse is translated to more or less cursor movement on the screen.

These numbers are all variable, but looking at some mice from Logitech, it seems like 1000 DPI is the default for both fixed and variable DPI mice. Scaling (I assume) is 1 by default. Therefore, one inch of mouse movement translating to 1000 px on-screen seems like a good starting point.

### Movement on smartphone touchscreens

As mentioned above, 1 inch of finger movement on a touchscreen translates to 1 inch of object (like the snek) movement within the screen. But how does that translate to pixels? The value is measured in _pixels per inch_ (PPI). Like the DPI, PPI is also defined by the hardware and can be calculated by the physical size of the display and its display resolution in pixels. For high density smartphone screens, these display pixels are scaled in software so that multiple display pixels translates to one rendered pixel, so that things don't look tiny.

What's a good value for PPI when there are various phones with a wide range of hardware? I'm choosing to go with 160, which is the nominal value within the [Android developer documentation](https://developer.android.com/training/multiscreen/screendensities).

### So what?

Okay, one inch of movement amounts to 1000 px with mice while it's only 160 px on touchscreens. Does that mean you need to move your hand appriximately 6 times more to reach the same speed within Speed Snek on smartphones compared to PC? That doesn't feel right at all. What gives!? I'm guessing that there are kinematic differences between arm movements on a small touchscreen versus a mouse on a table top. As mentioned at the beginning, I won't be looking into those factors for now.

## And so…

In the end, I ended up scaling the difficulty (i.e. the minimum speed limit) by how much I needed to scale down the game area to fit the screen. It doesn't make logical sense, but it _feels_ right. Granted, I have a limited set of devices to test on, so this setup may not work great for some devices.

I don't believe the gaming industry has solved the problem of scaling game difficulty so that it's fair to play on a wide range of platforms. Cross platform first-person shooters have been around for years, with developers adding aim assist for controller players, but they still don't seem like they're on equal footing with keyboard & mouse players.

For Speed Snek, it's probably not that important. There's no multiplayer or even an online leaderboard. The only thing you can do is compare your score with your own previous best saved on that device. Maybe if I was in a bizzaro parallel universe where Speed Snek becomes a hit, I could get player analytics to see what sorts of scores players are getting depending on their device. But alas, that is not the universe I live in.
