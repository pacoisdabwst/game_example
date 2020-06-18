enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    jewel
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    jewel,
    rock
}
function new_level () {
    mySprite2.destroy()
    mysprite3.destroy()
    levelnum += 1
    effects.confetti.endScreenEffect()
    if (levelnum == 2) {
        speed = 6000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 9 b b b b b b 9 b b b b b 9 7 
2 4 4 4 b b 4 4 4 4 b b 4 4 4 7 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b 9 b b b b b 7 
2 b b 4 4 4 b b 4 4 4 4 4 b b 7 
2 b b b b b b b b b b b b b b 7 
2 9 b b b b b b 9 b b b b b 9 7 
2 4 4 4 b b 4 4 4 4 4 4 b b 4 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b f 
2 4 4 4 4 4 4 b b 4 4 4 4 4 4 7 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b 9 b b 3 b b b b 7 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 3) {
        speed = 5000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b 9 b b b b b b b b 9 b b 7 
2 4 4 4 b b b b b b b b 4 4 4 7 
2 b b 4 b b b 9 3 b b b 4 b b 7 
2 b b 4 b b 4 4 4 4 b b 4 b b 7 
2 b 9 4 b b b b b b b b 4 9 b 7 
2 b 4 4 b b b b b b b b 4 4 b 7 
2 b b 4 4 b b b b b b 4 4 b b 7 
2 b b b b b b b 9 b b b b b b 7 
2 4 b b b b b 4 4 b b b b b 4 7 
2 b b 9 b b b b b b b b 9 b b 7 
2 b b 4 b b 4 b b 4 b b 4 b b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 4) {
        speed = 4000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 9 b b b b b b b b b b b b 9 7 
2 4 b b b b b 9 3 b b b b b 4 7 
2 b 4 b b b b 4 4 b b b b 4 b 7 
2 b b 4 b b b b b b b b 4 b b 7 
2 b b b 4 b b b 9 b b 4 b b b 7 
2 b b b b 4 b b b b 4 b b b b 7 
2 9 b b b b 4 b b 4 b b b b 9 7 
2 4 b b b b b b b b b b b b 4 7 
2 b b b b b b b 9 b b b b b b 7 
2 b b b b 4 4 4 4 4 4 b b b b 7 
2 b b 4 4 b b b b b b 4 4 b b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b 9 b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 5) {
        speed = 4000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 b 4 4 4 4 4 9 b 4 4 4 4 4 b 7 
2 b b b b b 4 b b 4 b b b b b 7 
2 9 b b b b 4 b 9 4 b b b b 9 7 
2 4 4 b b b 4 b b 4 b b b 4 4 7 
2 b b b b b 4 9 b 4 b b b b b 7 
2 b b b b 9 4 b b 4 9 b b b b 7 
2 b b b 4 4 4 b 9 4 4 4 b b b 7 
2 b b b b b 4 b b 4 b b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 4 4 b b b b b b b b b b 4 4 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b 3 b b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 6) {
        speed = 3000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 b 9 9 b b b b b b b 9 9 b b 7 
2 b 4 4 b b b b b b b 4 4 b b 7 
2 b b b b b b b b b b b b b b 7 
2 b b b b 9 b b b 9 b b b b b 7 
2 b b b 4 4 b b b 4 4 b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 b b 9 b b b b b b b b 9 b b 7 
2 b b 4 b b 4 b b 4 b b 4 b b 7 
2 b b b b b b b b b b b b b b 7 
2 4 b b b b b 3 b b b b b b 4 7 
2 b b b b b b 4 4 b b b b b b 7 
f b b b b b b 4 4 b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 7) {
        speed = 3000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 b b b b b 9 b b 9 b b b b b 7 
2 b 4 4 4 4 4 b b 4 4 4 4 b b 7 
2 b b b b 4 9 b b 9 4 b b b b 7 
2 b b b b 4 4 b b 4 4 b b b b 7 
2 4 b b b b b b b b b b b b 4 7 
2 9 b b b b b 3 b b b b b b 9 7 
2 4 4 4 b b b 4 4 b b b 4 4 4 7 
2 b b 4 b b b b b b b b 4 b b 7 
2 b 9 4 b b b b b b b b 4 9 b 7 
2 b 4 4 b b 4 4 4 4 b b 4 4 b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 8) {
        speed = 2000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b b b b 9 b b 7 
2 b 4 4 4 4 4 b 9 b 4 4 4 b b 7 
2 b b b b 9 4 b b b 4 b b b b 7 
2 9 b b b b 4 b b b 4 b b b 9 7 
2 4 b b b b b b b b b b b b 4 7 
2 b b b b b b b 3 b b b b b b 7 
2 b b 9 b 4 4 4 4 4 4 b 9 b b 7 
2 b b b b b b b b b b b b b b 7 
2 4 b b b b b 9 b b b b b b 4 7 
2 b b b b b b 4 4 b b b b b b 7 
2 b b 4 b b b b b b b b 4 b b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 9) {
        speed = 2000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 b 9 b b b b 9 b b b b 9 b b 7 
2 b b b b b b b b b b b b b b 7 
2 4 9 b b b b 9 b b b b 9 b 4 7 
2 b b b b b b b b b b b b b b 7 
2 b 9 b b b b b b b b b 9 b b 7 
2 b 4 4 4 4 4 4 4 4 4 4 4 b b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b f 
2 4 4 b b b b b b b b b b 4 4 7 
2 b b b b 4 b b b b 4 b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b 3 b b b b b b 7 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 10) {
        speed = 1000
        scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b b b b b b b b b b b b b 7 
2 9 b b b b b b b 3 b b b 9 b 7 
2 4 b b b 4 b b b 4 b b b 4 b 7 
2 b b 9 b b b 9 b b b 9 b b b 7 
2 b b 4 b b b 4 b b b 4 b b b 7 
2 b b b b b b b b b b b b b b 7 
2 4 b b b 4 b b b 4 b b b 4 b 7 
2 b b 9 b b b 9 b b b 9 b b b 7 
2 b b 4 b b b 4 b b b 4 b b b 7 
2 b b b b b b b b b b b b b b 7 
2 4 b b b 4 b b b 4 b b b 4 b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b f 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    }
    if (levelnum == 11) {
        game.over(true)
    }
    spawn_player()
    spawn_jewels()
    rockanim()
    jewelanim()
    jewelnum = 0
    lvlcomplete = 0
    open = 0
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    mySprite2.destroy()
    mysprite3.destroy()
    otherSprite.destroy()
    mySprite.startEffect(effects.disintegrate)
    releaserock = 0
    info.changeLifeBy(-1)
    music.powerDown.play()
    pause(2000)
    spawn_player()
})
function spawn_rock2 () {
    mysprite3 = sprites.create(img`
. . . . . . . d d d . . . . . . 
. . . . d d d d d d d d . . . . 
. . d d d d d d d e d d d d . . 
. d d d d d d d d d d d d d d . 
. d d d e e e e d d d d d d d . 
d d d e d d d d d d d d d d d d 
d d d e d d d d d d e d d d d d 
d d d d d d d d d d e e e d e d 
d e d d d d d e d d d d e d d d 
d d d d d d d d d d d d e d d d 
d d d d e d d d d d d e e d d d 
. d d d e e e e d d d e d d d . 
. d d d d d d d d d d d d d d . 
. . d d d d d d d d d d d d . . 
. . . d d d d d e d d d d . . . 
. . . . . d d d d d d . . . . . 
`, SpriteKindLegacy.Enemy)
    mysprite3.setPosition(195, 5)
    mysprite3.ay = 200
    animation.attachAnimation(mysprite3, rockanim2)
    animation.setAction(mysprite3, ActionKind.rock)
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.jewel, function (sprite, otherSprite) {
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    jewelnum += 1
    otherSprite.destroy(effects.trail, 100)
    otherSprite.y += -3
})
function rockanim () {
    rockanim2 = animation.createAnimation(ActionKind.rock, 200)
    rockanim2.addAnimationFrame(img`
. . . . . f f f f f f . . . . . 
. . . f f d d d d d d f f . . . 
. . f d d d d d d e d d d f . . 
. f d d d d d d d d d d d d f . 
. f d d d d e e e e d d d d f . 
f d d d d d d d d e e e d d d f 
f d d d d d d d d d d d d d d f 
f d d e d d d d d d d d d d d f 
f d d d d d d d e d d d d d d f 
f d d d d d d d d d d d e e d f 
f d d d e e d d d d d d e d d f 
. f d d d e e d d d d e e d f . 
. f d d d d e e d d d d d d f . 
. . f d d d d d d d d d d f . . 
. . . f f d d d d e d f f . . . 
. . . . . f f f f f f . . . . . 
`)
    rockanim2.addAnimationFrame(img`
. . . . . f f f f f f . . . . . 
. . . f f d d d d d d f f . . . 
. . f d d d d d d d d d d f . . 
. f d d d d e d d d d d d d f . 
. f d d d e e d d d d d e d f . 
f d d d e e d d d d d d e d d f 
f d d d e d d d d d d d e d d f 
f d d e d d d d d d d d e d e f 
f d d d d d d d e d d e e d d f 
f d d d d d d d d d d e d d d f 
f d d d d d d e d d d e d d d f 
. f d e d d d e e e d d d d f . 
. f d d d d d d d e d d d d f . 
. . f d d d d d d d d d d f . . 
. . . f f d d d d d d f f . . . 
. . . . . f f f f f f . . . . . 
`)
}
function spawn_player () {
    mySprite = sprites.create(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 d d d 5 d d 5 f f . 
. . f 5 5 d 1 d d d d 1 d f . . 
. f f 5 d d f d d d d f d f . . 
f 5 f d d d d d d d d d d f . . 
f 5 f d d d d d d d d d d f . . 
. f f d d d d d d f d d f f . . 
f 5 4 f d d d d d d d f 4 . . . 
. f d f f f f f f f f f d f . . 
. . f f 4 4 4 4 4 4 4 f f . . . 
. . . f e e e f e e e f . . . . 
. . f e e e e f e e e e f . . . 
. . . f f f f . f f f f . . . . 
`, SpriteKindLegacy.Player)
    mySprite.setPosition(30, 230)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
}
scene.onHitTile(SpriteKindLegacy.Player, 3, function (sprite) {
    lvlcomplete = 1
})
function spawn_jewels () {
    for (let value of scene.getTilesByType(9)) {
        jewel = sprites.create(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`, SpriteKindLegacy.jewel)
        value.place(jewel)
        animation.attachAnimation(jewel, jewelanim2)
        animation.setAction(jewel, ActionKind.jewel)
    }
}
scene.onHitTile(SpriteKindLegacy.Enemy, 4, function (sprite) {
    mySprite2.vx = 50
    mysprite3.vx = -50
})
scene.onHitTile(SpriteKindLegacy.Enemy, 15, function (sprite) {
    sprite.destroy(effects.ashes, 500)
})
function spawn_rocks () {
    mySprite2 = sprites.create(img`
. . . . . . . d d d . . . . . . 
. . . . d d d d d d d d . . . . 
. . d d d d d d d e d d d d . . 
. d d d d d d d d d d d d d d . 
. d d d e e e e d d d d d d d . 
d d d e d d d d d d d d d d d d 
d d d e d d d d d d e d d d d d 
d d d d d d d d d d e e e d e d 
d e d d d d d e d d d d e d d d 
d d d d d d d d d d d d e d d d 
d d d d e d d d d d d e e d d d 
. d d d e e e e d d d e d d d . 
. d d d d d d d d d d d d d d . 
. . d d d d d d d d d d d d . . 
. . . d d d d d e d d d d . . . 
. . . . . d d d d d d . . . . . 
`, SpriteKindLegacy.Enemy)
    mySprite2.setPosition(40, 5)
    mySprite2.ay = 200
    animation.attachAnimation(mySprite2, rockanim2)
    animation.setAction(mySprite2, ActionKind.rock)
}
function jewelanim () {
    jewelanim2 = animation.createAnimation(ActionKind.jewel, 100)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 1 1 1 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
    jewelanim2.addAnimationFrame(img`
. . . . . f f f f f . . . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 1 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . f 9 9 9 9 9 9 9 9 9 f . . . 
. . . f 9 9 9 9 9 9 9 f . . . . 
. . . . f 9 9 9 9 9 f . . . . . 
. . . . . f f f f f . . . . . . 
`)
}
function music2 () {
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Double))
}
info.onLifeZero(function () {
    game.over(false)
})
let right = 0
let jewelanim2: animation.Animation = null
let jewel: Sprite = null
let rockanim2: animation.Animation = null
let releaserock = 0
let mySprite: Sprite = null
let open = 0
let lvlcomplete = 0
let mysprite3: Sprite = null
let mySprite2: Sprite = null
let speed = 0
let jewelnum = 0
let levelnum = 0
game.showLongText("BOGEY MAN:THANKS FOR PLAYING MY GAMES! here a reward!", DialogLayout.Bottom)
music.setVolume(255)
scene.setBackgroundImage(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c 9 9 9 9 9 6 c c c c c c d d d d d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d d d d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d d d d d d d b c c c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c 
c c 9 9 9 9 9 9 9 6 c c c c c d d d d d d d d b c d d d d d d d d d b b c d d d d b c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d d d d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d d d d d d d b c c c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c 
c c 9 9 9 1 9 9 9 6 c c c c c d d d d d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d d d d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d d d d d d d d b b c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c 
c c 9 9 9 1 9 9 9 6 c c c c c d d d d d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d b b d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d d d d d d d d d b c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c 
c c 9 9 1 1 1 9 9 6 c c c c c b b b b d d d d b c d d d d b b b b b b b c d d d d b c c c c c c c d d d d b c d d d d b b b b b b b c d d d d b c c c c c c c c c c c c c d d d d b b b d d d d b c d d d d b b b d d d d b c d d d d b c d d d d b b b b d d d d b c d d d d b b b b b b b c d d d d b b b d d d d b c c c c c 
c c 9 9 1 1 1 9 9 6 c c c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d b c c d d d d b c d d d d b c c d d d d b c d d d d b c d d d d b c c c d d d d b c d d d d d d d d d d b c d d d d b c c d d d d b c c c c c 
c c 9 9 1 1 1 9 9 6 c c c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c d d d d b c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d d d d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d b c c c d d d d b c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c 
c c 9 9 1 1 1 9 9 6 c c c c c c c c c d d d d b c d d d d d d d d d d b c d d d d b c d d d d b c d d d d b c d d d d d d d d d d b c d d d d b c c c c c c c c c c c c c d d d d d d d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d b c c c d d d d b c d d d d d d d d d b b c d d d d d d d d d d d b c c c c c 
c c 9 9 9 1 9 9 9 6 c c c c c c c c c d d d d b c d d d d d d d d d b b c d d d d d d d d d d d d d d d d b c d d d d d d d b d b b c d d d d b c c c c c c c c c c c c c d d d d d d d d d d d b c d d d d d d d d d d d b c d d d d b c d d d d b c c c d d d d b c d d d d d d d b d b b c d d d d d d d d d d b b c c c c c 
c c 9 9 9 1 9 9 9 6 c c c c c c c c c d d d d b c d d d d b b b b b b b c d d d d d d d d d d d d d d d d b c d d d d b b b b b b b c d d d d b c c c c c c c c c c c c c d d d d b c c d d d b c c d d d d d d d d d d d b c d d d d b c d d d d b c c c d d d d b c d d d d b b b b b b b c d d d d b b b d d d b c c c c c c 
c c 9 9 9 9 9 9 9 6 c c c c c c c c c d d d d b c d d d d c c c c c c c c d d d d d d d d d d d d d d d d b c d d d d c c c c c c c c d d d d b c c c c c c c c c c c c c d d d d b c c d d d d b c d d d d b c c d d d d b c d d d d b c d d d b d d d d d d d d b c d d d d b c c c c c c c d d d d b c c d d d d b c c c c c 
c c 6 9 9 9 9 9 6 c c d d d d d d d d d d d b b c d d d d d d d d d d b c d d d d d d d d d d d d d d d b b c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c c d d d d b c c d d d d b c d d d d b c c d d d d b c d d d d b c d d d d d d d d d d d b b c d d d d d d d d d d b c d d d d b c c d d d d b c c c c c 
c c c 6 9 9 9 6 c c c d d d d d d d d d d d d b c d d d d d d d d d d b c d d d d d d d b c d d d d d d d b c d d d d d d d d d d b c d d d d d d d d d d d b c c c c c c d d d d b c c d d d d b c d d d d b c c d d d b b c d d d b b c d d d d d d d d d d d b b c d d d d d d d d d d b c d d d d b c c d d d d b c c c c c 
c c c c 6 9 6 c c c c d d d d d d d d d d d b b c d d d d d d d d d d b c d d d d d d b b c d d d d d d b b c d d d d d d d d b b b c d d d d d d d d d d b b c c c c c c d d d b b c c d d d b b b d d d d b c c d d d d b c d d d d b c d d d d d d d d d b b b b c d d d d d d d d d b b c d d d b b c c d d d d b c c c c c 
c c c c c 6 c c c c c d d d d d d d d b b b b b c d d d d b d d d b b b c d d d d b b b b c b b b d d b b b c d d d d d d b b b b b c d d d d d d d b d b b b c c c c c c d b d b b c c d d b b b c b b b b b c c d d b b b b d d b b b c d d d d d d d d b b b c c c d d d d d d b b d b b c d d b b b c c d d d b b c c c c c 
c c c c c c c c c c c b b b b b b b b b b b b b c b b b b b b b b b b b c b b b b b c c c c c c c b b b b b c b b b b b b b b b b b c b b b b b b b b b b b b c c c c c c b b b b b c c b b b b b c b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b c c c b b b b b b b b b b b c b b b b b c c b b b b b c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d b d d d d d d d d d d b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d b d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d b d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c d d b b d d d d d b b b b d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d b d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d b d d d d d d d d d b d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d b d d d d d d d d d b b d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d b d d d d d d d d d d d b b b b d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d b d d d d d d d d d d d d b d b b d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e c c c c c c c c c c c c c c c c c c c c c 9 9 9 1 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d b d d d d d d d d d d d d d b d d d d d d b b d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 c c 4 4 4 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 d d d d d d c c c c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 d d d d d d d c c c c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 c 5 d d d d 1 d d 1 d c d d c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d c c c 5 d d d d f d d f d c d d c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d b b d d d d d d d d d d d d b d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d c c 5 d d d d d d d d d c e 4 c c c c c c c c c c c c c c c c c 9 9 9 1 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d b b d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 e c c d d d d d d d f d d c e 4 c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d b b d b b d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 e c d d d d d d d d d d e 4 4 c c c c c c c c c c c c c c c c c 6 9 9 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d d b b b d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 e e e e e e e e e e e 4 4 4 c c c c c c c c c c c c c c c c c c 6 9 9 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d d d b b d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 4 4 4 4 4 4 4 e e e 4 4 c c c c c c c c c c c c c c c c c c c c 6 9 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d d d d d d d d d d b d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 e e 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 e e 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d d d d d d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c b b d d d d d d d d d d d d d d d d d d d d b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 4 4 4 e e 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d b d d d d d d d d d b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d d d d d d d d d b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b d d d d d d d d d d b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f e e e e c c e e e e f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f e e c c c c e f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c 
c c c f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d f c c c c c c 
c c c f d d d e d d e e d d e e d d e d d f d e d d e e e d e e e d d e e d e e f d d d e d e e e d d e d d e d e d f d e d d e e e d d d e e d e e d d f d e e e e d d d d d d d e d d d e e f d d d d e e d e e e d d e d d e e f e d d d e d e e d d e d d e e d e d d e f e d d e e d e e e d d e d e e d d d f c c c c c c 
c c c f e e e e e e e e e e e e e d e e e f e e e e e e e e e e e e e e e e e e f e d d e e e e e e e e e e e e e e f e e e e e e e e e d e e e e e e e f e e e e e d e e e e d e e e e e e e f e d e e e e e e e e e e e e e e e f e d e e e e e e e e e e e e e e e d e e f e d e e e e e e e e d e e e e d e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e 5 e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e 5 e e e e e e e e e e e e e f e e 5 e e e e e e e e e e e e 5 e e f e e e e e e e e e e e e e e e e e f e e 5 e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e 5 e e e e f c c c c c c 
c c c f e e e e e e e e e e 5 e e e e e e f e e e e e e e 5 e e e e e e 5 e e e f e e e e e e 5 e e e e e e e e e e f e e e e e e e e e e e 5 e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e 5 e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e 5 e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e 5 e e e e e e f e e e 5 e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e 5 f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e 5 e e e e e e e e e f e e e e e e e e e e e e e 5 e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e 5 e e e e e e e e e e e f e e e 5 e e e e e e e e e e e e e e f e e e 5 e e e e e e e e e e e e e f e e e e 5 e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e 5 e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e 5 e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e 5 e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e 5 e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e 5 e e e e e e 5 e e f e e e e e e e e e e e e 5 e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e 5 e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e 5 e e e e e e e e e e f e e e e e 5 e e e e e e 5 e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e 5 e e e e e e e e e e e e e e f e e 5 e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e 5 e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e 5 e e e e e e e e e e e e e 5 e e f e e e e e 5 e e e e e e e e e 5 e e f c c c c c c 
c c c f e e e 5 e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e 5 e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e 5 e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e 5 e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f c c c c c c 
c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`)
music2()
game.showLongText("Journey through 10 acion packed levels collecting all the jewels in each. Press A to start", DialogLayout.Bottom)
info.setLife(3)
levelnum = 1
jewelnum = 0
let jump = 0
speed = 7000
scene.setBackgroundImage(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
scene.setTileMap(img`
1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
2 b b b b b b b b b b b b b b 7 
2 b b 9 b b b b b b b b 9 b 3 7 
2 b 4 4 4 b b b b b b b 4 4 4 7 
2 b b 4 b b b b b b b b b b b 7 
2 b b 4 b 9 b b b 4 4 4 b b b 7 
2 b b 4 4 4 b b b b b b b b b 7 
2 b b b b 9 b b b b b b b b b 7 
2 b b b b 4 4 4 b b b 9 b b b 7 
2 b b b b b b b b b b 4 b b b 7 
2 b b b b b b b b b b b b b 9 7 
2 b b b 9 b b b b b b b b b b 7 
2 b b 4 4 b b b b 4 4 4 4 b b 7 
2 b b b b b b b b b b b b b b 7 
f b b b b b b b b b 9 b b b b f 
1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 
`)
scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f d d d d d d d d d d d d d d f 
f d e d e d d e e d d e d d d f 
f e e e e d e 5 e e e e e d e f 
f e e e e e e e e e e e e e e f 
f 5 5 e e e e e e e e e e 5 e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e 5 e e e e e 5 e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e 5 e f 
f e e e e e 5 e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
f f f f f f f f f f f f f f f f 
f d e 5 e e e e e e e e e d d f 
f d e e e e e e e e e e e e d f 
f d e e e e e 5 e e e e e e d f 
f d e e e e e e e e e e e d d f 
f d 5 e e e e e e e e e d d d f 
f d d e e e e e e e e e e e d f 
f d e e e e e e e e e e e d d f 
f d e e e e e e e e e e d d d f 
f d e e 5 e e e e e 5 e e e d f 
f d d e e e e e e e e e e d d f 
f d e e e e e e e e e e e d d f 
f d e e e e e e e e e e d d d f 
f d e e e e 5 e e e e e e e d f 
f d e e e e e e e e e e e d d f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f d d 5 e e e e e e e e e e d f 
f d e e e e e e e e e e e e d f 
f d d e e e e 5 e e e e e e d f 
f d d d e e e e e e e e e e d f 
f d d e e e e e e e e 5 e d d f 
f d e e e e e e e e e e e e d f 
f d d e e e e e e e e e e e d f 
f d d e e e e e e e e e e e d f 
f d e e 5 e e e e e 5 e e e d f 
f d d e e e e e e e e e e e d f 
f d d d d e e e e e e e e d d f 
f d d d d e e e e e e e e 5 d f 
f d d e e e 5 e e e e e e e d f 
f d d e e e e e e e e e e e d f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f e e 5 e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e 5 e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e 5 e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e 5 e e e e e 5 e e e e f 
f e e e e e e e e e e e e e e f 
f e d e e e e e e e e e e e e f 
f e d e e e d d e e e e d d e f 
f e d d d d d d e d d e d d e f 
f d d d d d d d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(1, img`
f f f f f f f f f f f f f f f f 
f e e 5 e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e 5 e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e 5 e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e 5 e e e e e 5 e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e 5 e e e e e e e f 
f e e e e e e e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f d e e e e e e e e e e e e d f 
f d e e e e e e e 5 e e e e d f 
f d e e e e e e e e e e e d d f 
f d e e e 5 e e e e e e e d d f 
f d d e e e e e e e e e e e d f 
f d e e e e e e e e e e e e d f 
f d e e e e e e e 5 e e e d d f 
f d 5 e e e e e e e e e e d d f 
f d e e e e e e e e e e e e d f 
f d e e e e e e e e e e e e d f 
f d d e e e e e e e e e e e d f 
f d d e e 5 e e e e e e e d d f 
f d e e e e e e e e e e e e d f 
f d e e e e e e e e e e e e d f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(3, img`
. . . . f f f f f f f f . . . . 
. . . f 4 4 4 4 4 4 4 4 f . . . 
. . f 4 4 4 5 5 5 5 4 4 4 f . . 
. f 4 4 4 5 5 f f 5 5 4 4 4 f . 
f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
f d 4 4 4 5 f f f f 5 4 4 4 d f 
f d d 4 4 5 f f f f 5 4 4 d d f 
f 4 d d d 5 5 f f 5 5 d d d 4 f 
f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
f 4 4 4 4 5 5 f f 5 5 4 4 4 4 f 
f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
f 4 4 d d 4 5 5 5 5 4 d d 4 4 f 
f d d d 4 4 4 4 4 4 4 4 d d d f 
f f f f f f f f f f f f f f f f 
`, false)
scene.setTile(11, img`
b b b b b b b b c b b b b b b b 
b b b c b b b b b b b b b c b b 
b b b c b b b b b b b c c c b b 
b b b c b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b c b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b c c b b 
b b b c b b b b b b b b b b b b 
b b b c b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b c c b b 
b b b b b b b b b b b b b c b b 
b b b b b b b b b b b b b b b b 
`, false)
scene.setTile(6, img`
b b b b b b b b c b b b b b b b 
b b b c b b b b b b b b b c b b 
b b b c b b b b b b b c c c b b 
b b b c b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b c b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b c c b b 
b b b c b b b b b b b b b b b b 
b b b c b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b c c b b 
b b b b b b b b b b b b b c b b 
b b b b b b b b b b b b b b b b 
`, false)
scene.setTile(9, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c . . . . 
. . . . . . . . . . . c . . . . 
. . . c c . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c . . . . . . . . . 
. . . . . . c . . . . . . . c . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
jewelanim()
rockanim()
spawn_jewels()
spawn_rocks()
spawn_rock2()
spawn_player()
forever(function () {
    if (mySprite.vx > 0 && mySprite.vy > 0) {
        right = 0
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 5 d 1 d d d d 1 d f . . 
. f f 5 d d f d d d d f d f . . 
f 5 f 5 d d d d d d d d d f . . 
f 5 f 5 d d d d d d d d d f . . 
. f f 5 d d d d d f d d f f . . 
f 5 4 f d d d d d d d f 4 f . . 
. f d f f f f f f f f f f d f . 
. . f f 4 4 4 4 4 4 4 f f f . . 
. . . f e e e f e e e f . . . . 
. . . f f f f f e e e e f . . . 
. . . . . . . . f f f f . . . . 
`)
        pause(100)
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 5 d 1 d d d d 1 d f . . 
. f f 5 d d f d d d d f d f . . 
f 5 f 5 d d d d d d d d d f . . 
f 5 f 5 d d d d d d d d d f . . 
. f f 5 d d d d d f d d f f . . 
f 5 4 f d d d d d d d f 4 f . . 
f d f f f f f f f f f f d f . . 
f f f f 4 4 4 4 4 4 4 f f f . . 
. . . f e e e f e e e f . . . . 
. . f e e e e f f f f f . . . . 
. . . f f f f . . . . . . . . . 
`)
        pause(100)
    }
    if (mySprite.vx == 0 && right == 0) {
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 5 d 1 d d d d 1 d f . . 
. f f 5 d d f d d d d f d f . . 
f 5 f 5 d d d d d d d d d f . . 
f 5 f 5 d d d d d d d d d f . . 
. f f 5 d d d d d f d d f f . . 
f 5 4 f d d d d d d d f 4 . . . 
. f d f f f f f f f f f d f . . 
. . f f 4 4 4 4 4 4 4 f f . . . 
. . . f e e e f e e e f . . . . 
. . f e e e e f e e e e f . . . 
. . . f f f f . f f f f . . . . 
`)
    }
    if (mySprite.vx < 0) {
        right = 1
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 1 d d d d 1 d d d f . . 
. . f 5 f d d d d f d d d f f . 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d f d d d d d f f f . 
. f 4 f f d d d d d d f 4 f 5 f 
. f d f f f f f f f f f f d f . 
. . f f 4 4 4 4 4 4 4 f f f . . 
. . . f e e e f e e e f . . . . 
. . . f f f f f e e e e f . . . 
. . . . . . . . f f f f . . . . 
`)
        pause(100)
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 1 d d d d 1 d d d f . . 
. . f 5 f d d d d f d d d f f . 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d f d d d d d f f f . 
. f 4 f f d d d d d d f 4 f 5 f 
f d f 4 f f f f f f f f d f f . 
f f f f 4 4 4 4 4 4 4 f f . . . 
. . . f e e e f e e e f . . . . 
. . f e e e e f f f f f . . . . 
. . . f f f f f . . . . . . . . 
`)
        pause(100)
    }
    if (mySprite.vx == 0 && right == 1) {
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 1 d d d d 1 d d d f . . 
. . f 5 f d d d d f d d d f f . 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d f d d d d d f f f . 
. f 4 f f d d d d d d f 4 f 5 f 
. f d f f f f f f f f f d f f . 
. . f f 4 4 4 4 4 4 4 f f f . . 
. . . f e e e f e e e f . . . . 
. . f e e e e f e e e e f . . . 
. . . f f f f f f f f f . . . . 
`)
    }
})
forever(function () {
    if (jump == 0) {
        mySprite.ay = 350
    } else {
        mySprite.vy = -200
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            jump = 0
            mySprite.vy = 100
        }
    }
})
forever(function () {
    if (mySprite2.x < 5 || mySprite2.x > 247) {
        mySprite2.destroy()
    }
    if (mysprite3.x < 10 || mysprite3.x > 247) {
        mysprite3.destroy()
    }
})
forever(function () {
    if (open == 1) {
        music.magicWand.play()
        pause(20000)
    }
})
forever(function () {
    if (lvlcomplete == 0) {
        if (jewelnum == 8) {
            open = 1
        }
        if (open == 1) {
            scene.setTile(3, img`
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
. . f 4 f f f f f f f f 4 f . . 
. f 4 4 f f f f f f f f 4 4 f . 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, true)
        } else {
            scene.setTile(3, img`
. . . . f f f f f f f f . . . . 
. . . f 4 4 4 4 4 4 4 4 f . . . 
. . f 4 4 4 5 5 5 5 4 4 4 f . . 
. f 4 4 4 5 5 f f 5 5 4 4 4 f . 
f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
f d 4 4 4 5 f f f f 5 4 4 4 d f 
f d d 4 4 5 f f f f 5 4 4 d d f 
f 4 d d d 5 5 f f 5 5 d d d 4 f 
f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
f 4 4 4 4 5 5 f f 5 5 4 4 4 4 f 
f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
f 4 4 d d 4 5 5 5 5 4 d d 4 4 f 
f d d d 4 4 4 4 4 4 4 4 d d d f 
f f f f f f f f f f f f f f f f 
`, false)
        }
    } else {
        music.powerUp.play()
        effects.confetti.startScreenEffect()
        mySprite.destroy()
        mySprite2.destroy()
        mysprite3.destroy()
        scene.setTile(3, img`
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
. . f 4 f f e e e e f f 4 f . . 
. f 4 4 f e e e e e e f 4 4 f . 
f 4 4 4 e e e e e e e e 4 4 4 f 
f 4 4 4 f 5 5 5 5 5 5 f 4 4 4 f 
f 4 4 4 f 5 5 5 5 5 5 f 4 4 4 f 
f 4 4 4 f 5 5 5 5 5 5 f 4 4 4 f 
f 4 4 4 f f f 5 5 f f f 4 4 4 f 
f 4 4 4 f f 5 4 4 5 f f 4 4 4 f 
f 4 4 4 f 4 4 4 4 4 4 f 4 4 4 f 
f 4 4 4 d 4 4 4 4 4 4 d 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f e e f f e e f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, true)
        pause(1000)
        scene.setTile(3, img`
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
. . f 4 f f f f f f f f 4 f . . 
. f 4 4 f f f f f f f f 4 4 f . 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f 4 4 4 f f f f f f f f 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, true)
        pause(1000)
        scene.setTile(3, img`
. . . . f f f f f f f f . . . . 
. . . f f 4 4 4 4 4 4 f f . . . 
. . f 4 4 4 4 4 4 4 4 4 4 f . . 
. f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 5 4 4 5 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, true)
        pause(2000)
        new_level()
    }
})
forever(function () {
    if (releaserock == 2) {
        pause(2000)
        spawn_rock2()
        releaserock = 0
    }
})
forever(function () {
    if (releaserock == 1) {
        spawn_rocks()
        releaserock = 2
    }
})
forever(function () {
    if (controller.A.isPressed() && jump == 0 && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        music.playTone(587, music.beat(BeatFraction.Sixteenth))
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        jump = 1
        pause(200)
        jump = 0
    }
})
forever(function () {
    if (mySprite.vy < 10 && right == 1) {
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 1 d d d d 1 d d d f . . 
. . f 5 f d d d d f d d d f f . 
. . f 5 d d d d d d d d d f 5 f 
. . f 5 d d d d d d d d d f 5 f 
. f f 5 d d f d d d d d f f f . 
f d 4 f f d d d d d d f 4 d 5 f 
. f f f f f f f f f f f f f f . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . f e e e f e e e f . . . . 
. . . f f e e f f e e f . . . . 
. . . . f f f f f f f f . . . . 
`)
    }
    if (mySprite.vy < 10 && right == 0) {
        mySprite.setImage(img`
. . . . f f f f f f f f f . . . 
. . . f e e e e e e e e e f . . 
. f f f e e e e e e e e e f f . 
f e e e e e e e e e e e e e e f 
. f f 5 5 5 5 d d 5 d d 5 f f . 
. . f 5 5 d 1 d d d d 1 d f . . 
. f f 5 d d f d d d d f d f . . 
f 5 f 5 d d d d d d d d d f . . 
f 5 f 5 d d d d d d d d d f . . 
. f f 5 d d d d d f d d f f . . 
f d 4 f d d d d d d d f 4 d . . 
. f f f f f f f f f f f f f . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . f e e e f e e e f . . . . 
. . . f e e f f e e f . . . . . 
. . . f f f . f f f . . . . . . 
`)
    }
})
forever(function () {
    if (releaserock == 0) {
        pause(speed)
        releaserock = 1
    }
})
