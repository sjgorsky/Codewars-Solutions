function getGrade (s1, s2, s3) {
    // Code here
    let arr = (s1 + s2 + s3) / 3
    if (arr >= 90){
      return('A')
    } else if (arr >= 80){
      return ('B')
    } else if (arr >= 70){
      return ('C')
    } else if (arr >= 60){
      return ('D')
    } else {
      return ('F')
    }
  }
  