input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2 && sprite.get(LedSpriteProperty.Y) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
    sprite.delete()
    sprite = game.createSprite(2, 2)
    directionIncrement += 1
    sprite.turn(Direction.Right, directionIncrement * 45)
})
input.onButtonPressed(Button.B, function () {
    game.gameOver()
})
let directionIncrement = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(2)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("GO")
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
})
