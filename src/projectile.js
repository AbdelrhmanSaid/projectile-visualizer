const GRAVITY = 9.8

export const getFlightTime = (velocity, rad) => {
  return (2 * velocity * Math.sin(rad)) / GRAVITY
}

export const getMaxHeight = (velocity, rad) => {
  return Math.pow(velocity * Math.sin(rad), 2) / (2 * GRAVITY)
}

export const getDistance = (velocity, rad) => {
  return (Math.pow(velocity, 2) / GRAVITY) * Math.sin(rad * 2)
}

export const getPlot = (velocity, rad, time) => {
  return {
    x: velocity * time * Math.cos(rad),
    y: velocity * time * Math.sin(rad) - (GRAVITY * Math.pow(time, 2)) / 2
  }
}
