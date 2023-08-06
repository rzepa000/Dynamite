import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent {

  @Input() answer1="yes"; answer2="no";

  url:string = 'https://youtu.be/AiIBKcd4m5Q?t=96';
  
  content:string="Do you love Jakub?";
  constructor() {}
  //this data may come from api
  
  changeHtmlContent(){
    if(this.content=="Do you love Jakub?"){
      this.content ="Is your boyfriend the best?"
    this.answer2="yes"
    this.answer1="yes"

    
    }else if(this.content=="Is your boyfriend the best?"){
  
      window.open(this.url);
  
  }else if(this.content=="Are you sure?"){
    this.content ="Is your boyfriend the best?"
    this.answer1="yes"
    this.answer2="yes"
    
  }
  
}
changeHtmlContent2(){
  if(this.content=="Are you sure?"){
    this.content ="Is your boyfriend the best?"
    this.answer1="yes"
    this.answer2="yes"
    
  }else if(this.content=="Do you love Jakub?"){
  this.content="Are you sure?"
  this.answer1="no"
  this.answer2="no"
}else if(this.content=="Is your boyfriend the best?"){
  
    window.open(this.url);

}


}
  

  
}
