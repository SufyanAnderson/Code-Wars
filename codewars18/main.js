function isPythagoreanTriple(integers) {
    // Good luck friends!
    const [a,b,c] = integers.sort((a,b) => a -b) 
    
    return a**2 + b**2 === c**2
  }