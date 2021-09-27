input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    serial.writeValue("s", 0)
    collect = 1
    radio.sendString("start")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    serial.writeValue("s", 0)
})
radio.onReceivedString(function (receivedString) {
    if (collect == 1) {
        serial.writeLine(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    serial.writeValue("s", 0)
    collect = 0
})
let collect = 0
radio.setGroup(1)
collect = 0
