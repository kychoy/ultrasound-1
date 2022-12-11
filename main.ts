basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
})
