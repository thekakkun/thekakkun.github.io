---
title: "Understanding Pointer Capture"
tags: [speed snek, front end, javascript]
date: 2022-10-03
---

## What is it?

The `PointerEvent` interface can be used to handle events from a wide range of pointer inputs including mice, touchscreen, and pens/styluses, meaning that you no longer need to have different event listeners for mouse and touch.

Pointer capture is one features that comes with the `PointerEvent` interface. When pointer capture is set on an element, events will be retargeted to that element, even if the pointer is no longer directly on top of that element.

### Why is it helpful?

Imagine there's a [range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). Once the user starts interacting with the slider control, it would be annoying if any of the following things happened:

- As the user is interacting with the range slider, the user's finger drifts down and off of the slider, triggering a `pointerleave` event and cancelling the user's interaction. The user must re-tap the slider and make sure their finger doesn't drift off the slider control this time.
- The prior problem has been fixed. The user's finger can drift off the slider and they're still in control. However, their touch input is triggering other controls above and below the slider.

Of course, the scenarios above need to be addressed in terms of using the appropriate input controls and touch target sizes for touch devices. However, technical solutions have also been implemented with JavaScript to help out.

### Setting/releasing pointer capture

A developer can choose to set/release pointer capture on a particular element by calling the `element.setPointerCapture(pointerId)` and `element.releasePointerCapture(pointerId)` methods.

In addition, there are cases in which pointers are captured/released implicitly. For touch and stylus inputs, pointer capture is automatically set on the target element whenever there is a `pointerdown` event. The pointer capture is released automatically on `pointerup` and `pointercancel` events, regardless of input method.

Pointer capture states can be monitored by creating event listeners for `gotpointercaputure` and `lostpointercapture` events.

More information on the nuances of pointer capture behavior can be found in [the W3C documentation](https://www.w3.org/TR/pointerevents3/#pointer-capture).

## Pointer capture gotchas

I ran into a problem regarding pointer captures when coding the 'collided with wall' game over scenario in [Speed Snek](https://github.com/thekakkun/speed-snek). The logic was coded so that it would be a game over once the `pointerleave` event was invoked from the `gameCanvas` element.

This was working fine for mouse inputs, but was not triggering on touchscreens due to the implicit pointer capture behavior outlined above. Once the touch pointer had (unbeknownst to me) been captured by the element:

- [the pointer is always assumed to be within the element](https://w3c.github.io/pointerevents/#the-pointerout-event).
- hit and border condition testing are surpressed, for performance reasons.

The end result is that once a pointer is captured, `pointerover`, `pointerout`, `pointerenter`, and `pointerleave` events **do not fire**. I suppose it makes sense. The entire purpose of pointer capturing is to ignore it when the pointer leaves an element (okay, it's likely more nuanced than that).

### The workaround

We can make sure boundary condition events are invoked by undoing any implicit pointer catpures. For my purposes, it was implemented like so:

```js
element.addEventListener("pointerdown", (event) => {
  element.releasePointerCapture(event.pointerId);
});
```

Why was this causing me so much trouble? Well, it turns out some of the information on MDN's page on [`setPointerCapture()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture) was incorrect (it used to say that boundary condition events are still generated for the capture target). This has led to my first real-world [pull request](https://github.com/mdn/content/pull/21275). Hooray!
