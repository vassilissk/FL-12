function addOne(x) {
    return x + 1;
  }
  function pipe(...args){
      let result=args[0]
      for(let i=0;i<args.length-1;i++){
          result=addOne(result)
      }
      return result
  }
  pipe(1,addOne,addOne)