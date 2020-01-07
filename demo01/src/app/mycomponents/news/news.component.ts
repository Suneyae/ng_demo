import { Component, OnInit } from '@angular/core';
import {Service01Service} from '../../myservices/service01.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  public my_name="I am father of WeiLingxi baby";
  
  //specify the data type
  private count:number = 234;

  public account_num:any = "abd234";


  
  public userinfo:object = {
    name : 'mybaby',
    age : 2
  }

  public dynamic_title:string = "I am a dynamic title";


  public my_html:string = "<h2>我是my_html标签</h2>";//"<input type='button' value='按钮' />";
  constructor(public myservice:Service01Service) { 

    this.account_num = '49801394';
  }

  ngOnInit() {
    let data=this.myservice.getData();
    // console.log('abddddd');
    console.log(data);

    //call the callback method
    let data2=this.myservice.getCallbackData2();
    console.log('getCallbackData2:'+data2);

    let data3=this.myservice.getCallbackData3((data)=>{

      console.log('getCallbackData3:'+data);
    });
    

    //3. 通过promise来获取
    
    var promiseData=this.myservice.getPromiseData();

    promiseData.then((data)=>{
      console.log('the value return by Promise:'+data);
    });

  }

}
