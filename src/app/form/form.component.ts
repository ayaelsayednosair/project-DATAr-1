import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  one: string = "name";
  two: string ="user name";
  three: string = "phone";
  event: any = "";
  frist: number = 1;
  name: string = "aya";
  username: string = "nosair";
  phone: number = 0;

  message = "";

  inputData = {
    frist:" ",
    name: " ",
    username: " ",
    phone: 0,
  };
  listData: any[] = [];
  //void

  //return

  //event

  onclick(event: any) {

    this.inputData["name"] = this.name;
    this.inputData["username"] = this.username;
    this.inputData["phone"] = this.phone;
    this.listData.push({ ...this.inputData });

    console.log(this.inputData);
    console.log(this.listData);
  }
  remove(index: any) {
    this.listData.splice(index, 1);
  }
  ditals(item: any) {
    this.message =
      "name:" + item.name+"   "+
      "Username:" + item.username+"   "+
        "phone:" + item.phone
        }
}
