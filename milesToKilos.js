function converter (mpg) {
    let miler = mpg / (4.54609188 / 1.609344)
    return Number(miler.toFixed(2))
   }