const express = require ("express");
const callculateSum=(n)=>{
  let ans = 0; 
  for (let i= 0; i<n; i++){
    ans = ans +i;
  }
  return ans ;

}
const app = express();
app.get("/",(req, res)=>{
  const n = req.quary.n;
  const ans = callculateSum(n)
  res.send(ans.toString());


})
app.listen(3000);


