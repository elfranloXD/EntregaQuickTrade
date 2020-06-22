import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  nombre: string = "";
  contrasenya: string = "";
  id: string = "";

  constructor() { }

  ngOnInit() {
    this.id = "ljnPl9ZGPhgZ1QLa5PIQKf5Mfc62";
  }

}
