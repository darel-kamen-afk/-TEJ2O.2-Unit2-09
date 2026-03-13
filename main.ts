/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on: March 2026
 * This program will play rock paper Scissors
*/

// Initialize the score variable
let hand = 0
let score = 0

// 1. When you shake the Micro:Bit
input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 2)

    // Using ONLY if statements (No else!)
    if (hand == 0) {
        basic.showIcon(IconNames.SmallSquare) // Rock
    }
    if (hand == 1) {
        basic.showIcon(IconNames.Square) // Paper
    }
    if (hand == 2) {
        basic.showIcon(IconNames.Scissors) // Scissors
    }

    // Stay on screen for 5 seconds (5000ms)
    basic.pause(5000)
    basic.clearScreen()
})

// 2. Hit "A" button to add 1 to score
input.onButtonPressed(Button.A, function () {
    score += 1
    basic.showString("+1")
    basic.clearScreen()
})

// 3. Hit "B" button to tell you the score
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
})