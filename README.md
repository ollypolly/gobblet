# What is Gobblet?

[Play Gobblet](https://gobblet.olly.live)

Gobblet is an abstract game played on a 4x4 grid with each of the two players having twelve pieces that can nest on top of one another to create three stacks of four pieces.

View more information on [BoardGameGeek](https://boardgamegeek.com/boardgame/2266/gobblet).

# Tech Stack

## Monorepo

We use a Turborepo monorepo containing both the frontend, backend, and any shared models.

## apps/web - Gobblet frontend

Next.js, Typescript, Redux Toolkit, React DnD

## apps/api - Gobblet backend

[TBD]

# Roadmap

## MVP

- React DND Board component
- Redux toolkit state and game logic
- Real-time pub/sub of moves using ably
- AI opponent

## Stretch Goals

- Account system
- Multiplayer
- three.js and gsap animation lib, convert board and pieces into 3d models with animations.
- Rating system
- Chat system
- Move replays

# Game Model

## Board

ob = "off-board"
ob1, ob2, ob3 belong to Player 1, ob4, ob5, ob6 belong to Player 2.

ob1 ob2 ob3

a1 b1 c1 d1

a2 b2 c2 d2

a3 b3 c3 d3

a4 b4 c4 d4

ob4 ob5 ob6

## Pieces

Each piece would have three properties:

- size: denotes the order the pieces can be stacked (0 - 3)
- colour: 0/1 (player 1 or player 2)
- space: the board square it currently occupies (ob1, c4, etc)

## Moves

Various validation must take place on moving a piece:

- A move attempts to change a pieces space property to the current hovered square, and validation takes place if the size of the current piece in the square <= to size of the piece moving then it rejects it
- Move a piece from ob to a location that must not have a piece on it already, you cannot gobble from off the board
- Must be "touch a piece, move a piece", as it reveals the underlying goblet

## Win condition

A game is won when one player has a line of 4 pieces in a row, be it diagonally, horizontally, or vertically. A win can be revealed by the opposing player, so a move must be started on drag.
