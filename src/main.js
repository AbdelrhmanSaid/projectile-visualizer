import './assets/style.css'
import { toRad, randomColor, drawPoint } from './helpers'
import { getFlightTime, getMaxHeight, getDistance, getPlot } from './projectile'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const startButton = document.querySelector('[data-start]')
const resetButton = document.querySelector('[data-reset]')

const angleField = document.querySelector('[name="angle"]')
const velocityField = document.querySelector('[name="velocity"]')

const resultsField = document.querySelector('[data-results]')
const timeField = resultsField.querySelector('[data-time]')
const heightField = resultsField.querySelector('[data-height]')
const distanceField = resultsField.querySelector('[data-distance]')

document.addEventListener('DOMContentLoaded', () => {
  startButton.addEventListener('click', start)
  resetButton.addEventListener('click', reset)
  window.addEventListener('resize', setCanvasSize)
  setCanvasSize()
  reset()
})

const start = () => {
  const angle = +angleField.value
  const velocity = +velocityField.value

  if (angle > 90 || angle < 0 || velocity < 0) {
    return alert('Invalid input')
  }

  const radial = toRad(angle)
  const flightTime = getFlightTime(velocity, radial)
  const maxHeight = getMaxHeight(velocity, radial)
  const distance = getDistance(velocity, radial)

  timeField.innerHTML = `Flight time: ${flightTime.toFixed(2)}s`
  heightField.innerHTML = `Max height: ${maxHeight.toFixed(2)}m`
  distanceField.innerHTML = `Distance: ${distance.toFixed(2)}m`

  drawProjectile(radial, velocity, flightTime)
  startButton.setAttribute('disabled', true)
}

const drawProjectile = (radial, velocity, flightTime) => {
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

  timeField.innerHTML = 'Flight time: 0.00s'
  heightField.innerHTML = 'Max height: 0.00m'
  distanceField.innerHTML = 'Distance: 0.00m'
}

const setCanvasSize = () => {
  canvas.width = window.innerWidth * 0.8
  canvas.height = window.innerHeight / 2
}
