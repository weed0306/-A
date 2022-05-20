input.onButtonPressed(Button.A, function () {
    PLAYER.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    if (game.isGameOver()) {
        basic.clearScreen()
        PLAYER = game.createSprite(2, 4)
        A = game.createSprite(0, 0)
        B = game.createSprite(1, 0)
        C = game.createSprite(2, 0)
        D = game.createSprite(3, 0)
        E = game.createSprite(4, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    PLAYER.move(1)
})
let SCORE = 0
let PLAYER: game.LedSprite = null
let E: game.LedSprite = null
let D: game.LedSprite = null
let C: game.LedSprite = null
let B: game.LedSprite = null
let A: game.LedSprite = null
basic.showLeds(`
    . # # # .
    . # # # .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    `)
basic.showLeds(`
    # # # # #
    . # . . .
    . . . . .
    . . . . .
    . # . . .
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . # . . .
    . . . . .
    . # . . .
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . # . . .
    . . # . .
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . # # . .
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.clearScreen()
led.plot(0, 0)
led.plot(1, 0)
led.plot(2, 0)
led.plot(3, 0)
led.plot(4, 0)
A = game.createSprite(0, 0)
B = game.createSprite(1, 0)
C = game.createSprite(2, 0)
D = game.createSprite(3, 0)
E = game.createSprite(4, 0)
PLAYER = game.createSprite(2, 4)
loops.everyInterval(1, function () {
    SCORE += 0.001
})
basic.forever(function () {
    if (PLAYER.isTouching(A) || PLAYER.isTouching(B) || PLAYER.isTouching(C) || PLAYER.isTouching(D) || PLAYER.isTouching(E)) {
        game.gameOver()
        basic.showString("YOUR SCORE IS")
        basic.showNumber(SCORE)
        basic.showString("RE TRY?")
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
