import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/returnUser/users.model';
import { ApiService } from '../../services/api.service';
import { Phone } from '../../models/returnUser/phone.model';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

    
    users: Users[] = []

    constructor( private apiService:ApiService){
    }

    ngOnInit(): void {
      this.FindManyUser();
    }

    FindManyUser(){
      this.apiService.obterUsers().subscribe(Users => this.users = Users)
    };

}
