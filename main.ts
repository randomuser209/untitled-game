namespace SpriteKind {
    export const npc = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("run away from the enemy he is chasing you")
    game.splash("quick there is no time")
    game.splash("I'll explain later after you escape this stage!")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -300
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    effects.confetti.endScreenEffect()
    game.splash("stage 2")
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite.setPosition(0, 0)
    myEnemy.destroy()
    KIND_SpriteKind = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.npc)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.splash("hello I am the god of this realm")
    game.splash("this is the void")
    game.splash("I need you to do me a favour")
    game.splash("can you help me get Excalibur the sword of holy light?")
    game.splash("it is the only weapon that can destroy the enemy that was following you before")
    game.splash("press a to teleport out of this place")
    game.splash("I would send you back here once you retrieved Excalibur")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy(effects.spray, 500)
})
let KIND_SpriteKind: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    .........................
    .......22222.............
    ......222222222..........
    ......eeeedfd............
    .....ededddfddd..........
    .....edeedddeddd.........
    .....eeddddeeee..........
    .......ddddddd...........
    ......2282282............
    .....222822822...........
    ....22228888222..........
    ....22285885822..........
    ....22288888822..........
    ....118888888811.........
    ....11888.888811.........
    .....888...888...........
    .....eee...eee...........
    ....eeee...eeee..........
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 300, 150)
mySprite.ay = 350
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 1 5 1 5 5 1 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 5 5 1 5 5 5 1 5 5 1 . . . . 
    . . . . d f d d d f d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d f f f d d . . . . . 
    . . d d 2 2 d d 2 2 d d d . . . 
    . . d . 2 2 d d 2 2 . d . . . . 
    . . d . 2 2 d d 2 2 . d . . . . 
    . . d . 2 2 d d 2 2 . d . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . d . . d . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(160, 50)
myEnemy.follow(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
