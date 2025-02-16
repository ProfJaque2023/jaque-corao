basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showIcon(IconNames.Square)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.InBackground)
})
