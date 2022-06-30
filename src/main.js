import './assets/style.css'
import { getFlightTime, getPlot } from './projectile'
import { toRad, randomColor, drawPoint } from './helpers'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const startButton = document.querySelector('[data-start]')
const resetButton = document.querySelector('[data-reset]')

const angleField = document.querySelector('[name="angle"]')
const velocityField = document.querySelector('[name="velocity"]')

document.addEventListener('DOMContentLoaded', () => {
  startButton.addEventListener('click', start)
  resetButton.addEventListener('click', reset)
  window.addEventListener('resize', setCanvasSize)
  setCanvasSize()
})

const start = () => {
  const angle = angleField.value
  const velocity = velocityField.value

  if (isNaN(angle) || isNaN(angle)) {
    return alert('Invalid input')
  }

  drawProjectile(angle, velocity)
  startButton.setAttribute('disabled', true)
}

const drawProjectile = (angle, velocity) => {
  const radial = toRad(angle)
  const flightTime = getFlightTime(velocity, radial)

  let time = 0
  const color = randomColor()

  window.interval = setInterval(() => {
    const { x, y } = getPlot(velocity, radial, time)
    drawPoint(ctx, x, canvas.height - y, color)
    time += 0.01

    if (time >= flightTime) {
      clearInterval(window.interval)
      startButton.removeAttribute('disabled')
    }
  }, 10)
}

const reset = () => {
  window.clearInterval(window?.interval)
  startButton.removeAttribute('disabled')
  angleField.value = velocityField.value = ''
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const setCanvasSize = () => {
  canvas.width = window.innerWidth * 0.8
  canvas.height = window.innerHeight / 2
}
