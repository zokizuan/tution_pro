import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Dashboard Overview");    
  }
  
  availableCoins = [{id: "coin-1"},{id: "coin-2"},{id: "coin-3"}];    
  selectedCoins!: any;
  draggedCoin!: any;
  // @ViewChild("tref", {read: ElementRef}) tref: ElementRef;
  
  
  
  
  
  drop(event: any): void {
    console.log(event)
    if (this.draggedCoin) {
      let draggedCoinIndex = this.findIndex(this.draggedCoin);
      console.log(draggedCoinIndex)
        this.selectedCoins = [...this.selectedCoins, this.draggedCoin];
        this.availableCoins =this.availableCoins.filter((val,i) => i!=draggedCoinIndex);
        this.draggedCoin = null;
    }
}
  dragStart(coin: any) {
    this.draggedCoin = coin;
    console.log(coin)
  }
  dragEnd() {
    console.log(this.draggedCoin)    
    this.draggedCoin = null;
    console.log("end")
  }
  findIndex(draggedCoin: any) {
    let index = -1;
    for(let i = 0; i < this.availableCoins.length; i++) {
        if (draggedCoin.id === this.availableCoins[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }
  
  
  
  
  ngOnInit(): void {
    this.selectedCoins = []   
    
  }
  

    ngAfterViewInit(): void {
        // outputs `I am span`
        // console.log(this.tref.nativeElement.textContent);
    }

}
