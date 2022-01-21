import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterId'
})
export class FilterIdPipe implements PipeTransform {

  transform(value: any, id:number){
    if(id===null)
    {
      return value;
    }
    const playersArray:any[]=[];
    for(let i=0;i<value.length;i++)
    {
      const teamName:number=value[i].id;
      //console.log(teamName);
      if (teamName===id)
      {
        //console.log(value[i]);
        playersArray.push(value[i]);
      }
    }
    return playersArray;
  }

}
