import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service01Service {

  constructor() { }

  //1. 同步请求
  getData(){

    return 'this is a test data from service01'
  }

  getCallbackData2(){
    setTimeout(()=>{
     var name='weilingxi';
     return name;

    },1000)

  }

  //2. 通过回调函数来获取异步请求数据
  getCallbackData3(newfunction){
    setTimeout(()=>{
     var name='weilingxi';

     newfunction(name);

    },3000)

  }

  //3. 通过promise

  getPromiseData(){

    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        var name='weilingxi_promise';
        resolve(name);
      }, 4000);
    });
  }


}
