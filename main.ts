input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    sum = num + num2
    basic.showNumber(sum)
    product = num * 2
    basic.showNumber(product)
    power = num ** 2
    basic.showNumber(power)
    random = randint(0, 10)
    basic.showNumber(random)
})
input.onButtonPressed(Button.B, function () {
    num2 += 1
    basic.showNumber(num2)
})
let random = 0
let power = 0
let product = 0
let sum = 0
let num2 = 0
let num = 0
num = 1
num2 = 0
basic.forever(function () {
    basic.showNumber(0)
})
