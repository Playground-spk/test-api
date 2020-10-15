const axios = require('axios');



const runningDate  = async(num)=>{

    for(let i =0; i < num;i++){
      let result = await axios.post("https://api.dev.farmbook.co/mbapi/test",{"fn":"nodeJS"});
      if(result.data&&result.data.data) console.log(result.data.data)
    }
  

}


runningDate(5)