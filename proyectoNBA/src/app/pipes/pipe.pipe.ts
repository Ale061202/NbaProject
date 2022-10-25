import { Pipe, PipeTransform } from '@angular/core';
import { Distintivos } from '../interfaces/players.interface';

@Pipe({
  name: 'pipe'
})
export class FilterPipe implements PipeTransform {

  transform(players: Distintivos[], filterText: string) {
    console.log('Filter pipe called');
    if(players.length === 0 || filterText === ''){
      return players;
    } else {
      return players.filter(player => {
        return player.country.toLowerCase() === filterText.toLowerCase();
      })
    }
  }

}
