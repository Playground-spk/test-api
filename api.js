const axios = require('axios');



const getDate = async()=>{
    const result1 = await axios.post(" https://api.dev.farmbook.co/mbapi/test",{"fn":"nodeJS"})
     if(result1.data&&result1.data.data) console.log(result1.data.data)

     const result2 = await axios.post(" https://api.dev.farmbook.co/mbapi/test",{"fn":"nodeJS"})
     if(result2.data&&result2.data.data) console.log(result2.data.data)

     const result3 = await axios.post(" https://api.dev.farmbook.co/mbapi/test",{"fn":"nodeJS"})
     if(result3.data&&result3.data.data) console.log(result3.data.data)

     const result4 = await axios.post(" https://api.dev.farmbook.co/mbapi/test",{"fn":"nodeJS"})
     if(result4.data&&result4.data.data) console.log(result4.data.data)

     const result5 = await axios.post(" https://api.dev.farmbook.co/mbapi/test",{"fn":"nodeJS"})
     if(result5.data&&result5.data.data) console.log(result5.data.data)

}


getDate()