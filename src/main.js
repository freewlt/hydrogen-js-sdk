console.log('kk')

import bmob from './lib/app'

let Bmob = new bmob()
Bmob.initialize("39ee83f92ff3a195130596a4eaec5ddf","a1223fca87f5d229953817f5c2493446")

var GameScore = Bmob.Object.extend("GameScore");
var query = Bmob.Query(GameScore);
query.get("4edc3f6ee9",{
  success(response){
    console.log(response);
  },
  error(error){
    console.log(error);
  }
})

console.log(Bmob)
