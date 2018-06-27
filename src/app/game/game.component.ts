import { Component, OnInit, ViewChild} from '@angular/core';
import { GamesElement } from './game';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  displayedColumns = ['id', 'name', 'genre'];
  games = new MatTableDataSource<GamesElement>(allgames);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.games.paginator = this.paginator;
    this.games.sort = this.sort;
  }

  applyFilter(filterVal: string) {
    filterVal = filterVal.trim();
    filterVal = filterVal.toLowerCase();
    this.games.filter = filterVal;
  }
}

const allgames: GamesElement[] = [
  {
    'id': '1',
    'name': 'Artillery',
    'genre': 'Strategy'
  },
  {
    'id': '2',
    'name': '4X',
    'genre': 'Strategy'
  },
  {
    'id': '3',
    'name': 'Fighting',
    'genre': 'Action'
  },
  {
    'id': '4',
    'name': 'Far Cry 3',
    'genre': 'Action'
  },
  {
    'id': '5',
    'name': 'Shooter',
    'genre': 'Action'
  },
  {
    'id': '6',
    'name': 'Hitman',
    'genre': 'Action'
  },
  {
    'id': '7',
    'name': 'NFS MW',
    'genre': 'Sport'
  }, {
    'id': '8',
    'name': 'Fifa',
    'genre': 'Sport'
  }, {
    'id': '9',
    'name': 'Racing',
    'genre': 'Sport'
  }, {
    'id': '10',
    'name': 'Graphic adventures',
    'genre': 'Adventure'
  }
];
