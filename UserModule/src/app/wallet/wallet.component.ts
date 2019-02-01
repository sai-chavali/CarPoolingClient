import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  money: number
  hide: false
  w_id: number
  moneyAdded: number
  sw_id: number
  dw_id: number
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.money = 807
  }

  onAddMoney(form: NgForm){
    console.log(typeof(form.value["money"]))
    this.moneyAdded = Number(form.value["money"])
    this.w_id = Number(form.value["w_id"])
    console.log(this.w_id);
    this.httpClient.post(
      'http://172.21.26.178:8080/addmoney', {
        "wId": this.w_id,
        "amt": this.moneyAdded
      }
      
    ).subscribe(
      data => {
        this.money = data
        console.log( data)
        }
      );
  }

  onMoney(form: NgForm){
    this.w_id = Number(form.value["w_id"])
    this.httpClient.post(
      'http://172.21.26.178:8080/getmoney', {
        "wId": this.w_id,
      }
      
    ).subscribe(
      data => {
        this.money = data
        console.log( data)

        }
      );
  }

  onInvoice(){
    this.httpClient.post(
      'http://172.21.26.178:8080/invoice', {
        "sendTo": "saideepaperi@gmail.com",
        "subject": "Invoice for your wallet",
        "text": "Hello User,\n This is your invoice for your wallet",
        "uId": 1
      }
    ).subscribe(
      data => console.log("Invoice is sent Successfully")
      );
  }

}
