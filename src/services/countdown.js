function getRemainTime (deadline) {
  const now = new Date()
  const remainTime = (new Date(deadline) - now + 1000) / 1000
  const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
  const remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2)
  const remainHours = ('0' + Math.floor(remainTime / 3600 % 60)).slice(-2)
  const remainDays = Math.floor(remainTime / (3600 * 24))

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  }
}

export const countDown = (deadline, element, callbackFunction = () => {}) => {
  const timerUpdate = setInterval(() => {
    const t = getRemainTime(deadline)
    element.innerHTML = `${t.remainDays}D:${t.remainHours}H:${t.remainMinutes}M:${t.remainSeconds}S`

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate)
      callbackFunction()
    }
  }, 1000)
}
