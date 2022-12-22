function enough(cap, on, wait) {
    // your code here
    if(cap -(on + wait) >=0) return 0;
    return (on + wait) - cap
  }