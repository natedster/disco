input.onButtonPressed(Button.A, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    start = 0
    Kitronik_Move_Motor.stop()
    moveMotorZIP.clear()
    moveMotorZIP.show()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Welcome to the disco.")
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let start = 0
start = 0
let led2 = 0
let green = 0
let note = 0
let blue = 0
let red = 0
let direction = 0
let speed = 0
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
basic.forever(function () {
    while (start == 1) {
        moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
        for (let led3 = 0; led3 <= 3; led3++) {
            blue = randint(0, 255)
            green = randint(0, 255)
            red = randint(0, 255)
            moveMotorZIP.setZipLedColor(led3, Kitronik_Move_Motor.rgb(red, green, blue))
        }
        moveMotorZIP.show()
        note = randint(131, 988)
        music.playTone(note, music.beat(BeatFraction.Quarter))
        speed = randint(0, 100)
        direction = randint(0, 1)
        if (direction == 0) {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed)
            basic.showArrow(ArrowNames.East)
        } else {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed)
            basic.showArrow(ArrowNames.West)
        }
    }
})
