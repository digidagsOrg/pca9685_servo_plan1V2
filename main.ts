function fliege_nach_rechts () {
    if (rechts == 0) {
        // 180Servo Rakete
        Servo.Servonum(0, 50)
        basic.pause(2000)
        // 180Servo Rakete
        Servo.Servonum(0, 90)
        // 180Servo Rakete
        Servo.Servonum(1, 0)
        rechts = 1
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playTone(196, music.beat(BeatFraction.Whole))
    fliege_nach_links()
})
function fliege_nach_links () {
    if (rechts == 1) {
        // 180Servo Rakete
        Servo.Servonum(0, 140)
        basic.pause(2000)
        // 180Servo Rakete
        Servo.Servonum(0, 90)
        // 180Servo Rakete
        Servo.Servonum(1, 180)
        rechts = 0
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(784, music.beat(BeatFraction.Whole))
    fliege_nach_rechts()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "nach links" && rechts == 1) {
        fliege_nach_links()
    }
    if (receivedString == "nach rechts" && rechts == 0) {
        fliege_nach_rechts()
    }
})
let rechts = 0
music.playTone(262, music.beat(BeatFraction.Whole))
radio.setGroup(1)
rechts = 1
// Lego350Servo Arm
Servo.Servonum(0, 90)
// 180Servo Rakete
Servo.Servonum(1, 0)
loops.everyInterval(4000, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
	
})
