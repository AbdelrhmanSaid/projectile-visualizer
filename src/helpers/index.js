export const toRad = (deg) => {
  return (deg * Math.PI) / 180
}

export const randomColor = () => {
  const MAX_COLORS = 16777215
  return `#${Math.floor(Math.random() * MAX_COLORS).toString(16)}`
}

export const drawPoint = (ctx, x, y, color = '#dc3545') => {
  ctx.beginPath()
  ctx.arc(x, y, 1, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}
