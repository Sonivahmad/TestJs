function pattern(){
    let n = 5;
    
    for(let i=1; i<=n; i++) {
      let stars = ''
      for(let j=i; j<=n; j++) {
        stars += j
      }
      for(let k=1; k<i; k++) {
        stars += k
      }
      console.log(stars)
    }
  }
  
  
  pattern()