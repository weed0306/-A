def on_button_pressed_a():
    PLAYER.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global PLAYER, A, B, C, D, E
    basic.clear_screen()
    PLAYER = game.create_sprite(2, 4)
    A = game.create_sprite(0, 0)
    B = game.create_sprite(1, 0)
    C = game.create_sprite(2, 0)
    D = game.create_sprite(3, 0)
    E = game.create_sprite(4, 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    PLAYER.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

PLAYER: game.LedSprite = None
E: game.LedSprite = None
D: game.LedSprite = None
C: game.LedSprite = None
B: game.LedSprite = None
A: game.LedSprite = None
basic.show_leds("""
    . # # # .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
""")
basic.show_leds("""
    . # # # .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    # # # # #
        . . . . .
        . . . . .
        . . . . .
        . # . . .
""")
basic.show_leds("""
    # # # # #
        . # . . .
        . . . . .
        . . . . .
        . # . . .
""")
basic.show_leds("""
    # # # # #
        . . . . .
        . # . . .
        . . . . .
        . # . . .
""")
basic.show_leds("""
    # # # # #
        . . . . .
        . . . . .
        . # . . .
        . . # . .
""")
basic.show_leds("""
    # # # # #
        . . . . .
        . . . . .
        . . . . .
        . # # . .
""")
basic.show_leds("""
    # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . # . .
""")
basic.clear_screen()
led.plot(0, 0)
led.plot(1, 0)
led.plot(2, 0)
led.plot(3, 0)
led.plot(4, 0)
A = game.create_sprite(0, 0)
B = game.create_sprite(1, 0)
C = game.create_sprite(2, 0)
D = game.create_sprite(3, 0)
E = game.create_sprite(4, 0)
PLAYER = game.create_sprite(2, 4)