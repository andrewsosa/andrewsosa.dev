// Color definitions
const space =  '#0e2430'

const beige =  '#e8d5b7'
const coolBeige =  '#e8d5b9'
const gray = '#e8e8e8'
const darkGray = '#cccccc'
const burntRed = '#992331'
const brightRed =  '#fc3a51'
const gold =  '#f5b349'

const brightBlue = '#8ec9Fa'
const softBlue = '#6887a6'
const mutedBlue = '#76a0d1'
const blue4 = '#7ec1eb'
const blueGray = '#c5e1eb'

const blueWhite = '#ceddf0'
const grayWhite = '#e6e6e6'
const windyGray = '#d8d8d8'
const darkerGray = '#cccccc'
const leafGreen = '#a8c078'
const fallBrown = '#a89048'

//
const height_percent = 0.5

const fontSize = 16

let elements = {
    fire: [
        {
            colors: [gold, burntRed, brightRed],
            glyphs: ['▽', '▾']
        },
        {
            colors: [beige, darkGray],
            glyphs: ['*', '+']
        },
        {
            colors: [blueGray, gray],
            glyphs: ['~', '.', '%']
        }
    ],
    water: [
        {
            colors: [brightBlue, mutedBlue],
            glyphs: ['o', '~', '◟', 'O']
        },
        {
            colors: [blue4, softBlue, mutedBlue],
            glyphs: ['.', '%', '^']
        },
        {
            colors: [gray],
            glyphs: [':', ',', ';', '◦']
        }
    ],
    air: [
        {
            colors: [darkerGray, windyGray],
            glyphs: ['|', ':']
        },
        {
            colors: [windyGray, blueWhite],
            glyphs: ['(', ')', 'v', '◦', '◡', '♤']
        },
        {
            colors: [leafGreen, fallBrown],
            glyphs: ['⋾', '℧', '.']
        }
    ]
}

let pickRandom = function(list) {
    let i = ROT.RNG.getUniform()
    return list[Math.floor(i * i * list.length)]
}

let Particle = function(x, y, element) {
    this.x = x
    this.y = y
    this.velocity = Math.abs(ROT.RNG.getNormal(0, 1)) + 1

    this.range = [0, this.velocity / 5]
    if (this.velocity > 2) {
        this.range[0] = this.range[1] * this.range[1]
    }

    this.opacity = 255

    if (this.velocity < 1.5) {
        this.glyph = pickRandom(element[0].glyphs)
        this.color = pickRandom(element[0].colors)
    } else if (this.velocity < 3) {
        this.glyph = pickRandom(element[1].glyphs)
        this.color = pickRandom(element[1].colors)
    } else {
        this.glyph = pickRandom(element[2].glyphs)
        this.color = pickRandom(element[2].colors)
    }

    this._color = function() {
        let opacity = Math.floor(this.opacity).toString(16)
        if (opacity.length < 2) {
            opacity = '0' + opacity
        }
        return this.color + opacity
    }

    this.draw = function(display) {
        display.draw(this.x, Math.floor(this.y), this.glyph, this._color())
    }

    this.refresh = function(width, height) {
        this.y = Math.abs(ROT.RNG.getNormal(0, 2)) + this.range[0] * height
        if (this.velocity >= 3) {
            this.x = Math.floor(ROT.RNG.getUniform() * width)
        }
    }

    this.update = function(width, height) {
        let min = Math.min(height * this.range[0], this.y)
        let max = this.range[1] * height
        height = max
        this.y = this.y + this.velocity
        this.age += this.velocity
        let scaled_height = (this.y-min)/(max-min)
        this.opacity = 255 * (1 - scaled_height*scaled_height)

        if (this.y >= height) {
            this.refresh(width, height)
        }
    }

    let height = 100
    let max = height * this.range[1]
    let min = height * this.range[0]
}


let Particles = {

    display: null,
    engine: null,
    options: null,
    particles: [],

    _width: function(fontSize) {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width

        return Math.floor(0.99 * width / fontSize)
    },

    _height: function(fontSize) {
        let height = (window.innerHeight > 0) ? window.innerHeight : screen.height
        return Math.floor(height_percent * height / fontSize)
    },

    init: function() {
        console.log('Starting particle system')

        this.options = {
            bg: "#f9f8f7",
            fontSize: fontSize,
            fontFamily: 'IBM Plex Mono, monospace',
            forceSquareRatio: true,
            width: Math.floor(screen.width / fontSize),
            height: Math.floor(screen.height * height_percent / fontSize)
        }

        console.log(this.options)

        this.display = new ROT.Display(this.options)
        this.display.setOptions({
            width: this._width(fontSize),
            height: this._height(fontSize)
        })
        document.getElementById("particles").appendChild(this.display.getContainer())

        let element = ROT.RNG.getItem(
            [elements.fire, elements.water, elements.air]
        )

        let y = 0
        let particle = null
        for (let x = 0; x < this.options.width; x++) {
            for (let i = 0; i < 2; i++) {
                y = ROT.RNG.getUniform() * this.options.height
                particle = new Particle(x, y, element)
                this.particles.push(particle)
            }
        }

        let scheduler = new ROT.Scheduler.Simple()
        scheduler.add(this, true)
        this.engine = new ROT.Engine(scheduler)
        this.engine.start()
    },

    resize: function() {
        this.display.setOptions({
            width: this._width(fontSize),
            height: this._height(fontSize)
        })
    },

    act: function() {
        this.display.clear()
        this.engine.lock()
        let width = this._width(fontSize)
        let height = this._height(fontSize)
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(width, height)
            this.particles[i].draw(this.display)
        }
        setTimeout(() => {this.engine.unlock()}, 60)
    }
}

Particles.init()
window.addEventListener('resize', () => {Particles.resize()})
