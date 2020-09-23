import Mock from "mockjs";
import axios from "axios"
const Api = {
  GetBannerList(callback){
    Mock.mock("/api/getimages","post",{
      'data|5-10':[{
        "id|+1":1,
        som:"@ctitle(5,10)",
        email:"@email",
        city:"@city",
        img:"@image(800x800)",
        "price|1-5":"@float(20,99,1,2)",
        "url|1":['你是在呢日啊',"我在这儿呢","还有其他的事情吗"],
        "urlImg|1":[require("@/assets/furitImgs/furit1.jpg"),]
      }]
    })
    axios.post("/api/getimages").then(res=>{
      callback(res)
    }).catch(err=>{
      console.log(err)
    })
  }
}

export default Api