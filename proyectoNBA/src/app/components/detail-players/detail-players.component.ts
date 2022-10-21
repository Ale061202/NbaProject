import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-detail-players',
  templateUrl: './detail-players.component.html',
  styleUrls: ['./detail-players.component.css']
})
export class DetailPlayersComponent implements OnInit {

  constructor(private route: ActivatedRoute,private playerService: PlayersListService) { }

  ngOnInit(): void {
    
  }

}
