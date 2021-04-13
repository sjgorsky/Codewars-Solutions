function toTime(seconds) {
    let timeHr = parseInt(Math.floor(seconds / 3600))
    let timeMin = parseInt(Math.floor((seconds % 3600) / 60))
    return `${timeHr} hour(s) and ${timeMin.toFixed(0)} minute(s)`
  
  }