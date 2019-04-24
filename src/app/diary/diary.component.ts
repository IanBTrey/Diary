import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries = [
     new Diary(1,'Go to Strath','Go visit Fay,Wayne,Betty and Mecha',new Date(2019,4,28) ),
     new Diary(2,'Install VS','Remember to install VS for my coming projects',new Date(2019,4,29) ),
     new Diary(3,'Get my certificate','Head up to Good Shepherd for my helper cert',new Date(2019,4,29) ),
     new Diary(4,'Apply course in UoN','Make sure to apply for parallel programme in UoN',new Date(2019,4,28) ),
     new Diary(5,'Finish independent project','Damn Angular!',new Date(2019,4,26) ),
     new Diary(6,'Plot my world domination plan','Cause I am destined for greatness',new Date(2019,9,1)),
   ]

   addNewDiary(diary){
  let diaryLength = this.diaries.length;
  diary.id=diaryLength+1;
  diary.completeDate = new Date(diary.completeDate)
  this.diaries.push(diary)
}
deleteDiary(isComplete, index){
  if(isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.diaries[index].name}`)
    if(toDelete){
    this.diaries.splice(index, 1)
  }
  }
}

   toogleDetails(index){
         this.diaries[index].showDescription = !this.diaries[index].showDescription;
     }

  constructor() { }

  ngOnInit() {
  }

}
