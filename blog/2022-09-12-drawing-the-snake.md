---
title: "Speed Snek: Drawing the Snek"
tags: [speed snek, math]
date: 2022-09-12
---

This is a post about the development of [Speed Snek](https://github.com/thekakkun/speed-snek). In the game of Speed Snek, the snek segments are drawn using solid links (like an articulated bus!). I need to figure out how to place these solid line segments along the user's input, which will be a squiggly line drawn using a finger or pointer.

## The general process

Here's how I plan to implement it.

![Model used during calculation of the snek segment placement](/images/blog/snek-segment-1.png)

1. Fix the beginning of the snek segment $c$ to either the user's finger/pointer (for the first segment) or the end of the preceding segment (for all other segments)
2. Go down the user's input path (implemented as a list of canvas coordinates) until it reaches a point on the path that cannot be reached by the current snek segment ($p_2$). The end point of the segment must lie on the line drawn between that point and the previous point $p_1$.
3. Figure out where on the line $(p_1, p_2)$ the end of the segment will lie.
4. Trim the user input path data, so unnecessary path data isn't being stored in memory.

If all goes well, the snek should follow the user's input, with all articulation points falling on the input path like so:

![Sketch of expected outcome, with the solid links of the snek following the user's input](/images/blog/snek-segment-2.png)

## The math

As seen in the figure above, it comes down to figuring out the intersection of the line segment determined by $p_1: (x_1, y_1)$ and $p_2: (x_2, y_2)$ with the circle of radius $r$ centered at $c: (x_c, y_c)$.

The points $(x, y)$ on the segment can be defined parametrically by

$$
\begin{equation}
\begin{cases}
    x &= tx_1 + (1-t)x_2 \\
    y &= ty_1 + (1-t)y_2
\end{cases}
\end{equation}
$$

where $0 \leq t \leq 1$. Since the distance between this point and $c$ must be $r$, we can use the Pythagorean theorem to get the equation

$$
\begin{equation}
\begin{split}
    r^2 = &(tx_1 + (1-t)x_2 - x_c)^2 \\
    &+ (ty_1 + (1-t)y_2 - y_c)^2
\end{split}
\end{equation}
$$

This can be cleaned up into a quadratic equation for $t$

$$
\begin{equation}
\begin{split}
    0 = &((x_1 - x_2)^2 + (y_1 - y_2)^2) t^2 \\
    &+ 2[(x_1 - x_2) (x_2 - x_c) + (y_1 - y_2) (y_2 - y_c)] t \\
    &+ (x_2 - x_c)^2 + (y_2 - y_c)^2 - r^2
\end{split}
\end{equation}
$$

That's the quadratic formula, I know how to solve that! And so...

$$
    t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

where

$$
\begin{align}
    a &= (x_1 - x_2)^2 + (y_1 - y_2)^2 \\
    b &= 2(x_1 - x_2) (x_2 - x_c) + 2(y_1 - y_2) (y_2 - y_c) \\
    c &= (x_2 - x_c)^2 + (y_2 - y_c)^2 - r^2
\end{align}
$$

It's not pretty, but it shouldn't be too difficult to implement. The value of $t$ can then be plugged back into (1) to get the end point for the segment. Of course a quadratic formula can give us two answers, but we only care about cases where $0 \leq t \leq 1$. What about if both values of $t$ match the range? Well, that's a problem for future me.
