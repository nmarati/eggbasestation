input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    collect = 1
    radio.sendString("start")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedString(function (receivedString) {
    if (collect == 1) {
        serial.writeLine(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    collect = 0
})
let collect = 0
radio.setGroup(1)
collect = 0
