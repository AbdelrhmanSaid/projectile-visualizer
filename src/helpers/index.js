export const toRad = (deg) => {
  return (deg * Math.PI) / 180
}

export const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const drawPoint = (ctx, x, y, color = '#dc3545') => {
  ctx.beginPath()
  ctx.arc(x, y, 1, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}
