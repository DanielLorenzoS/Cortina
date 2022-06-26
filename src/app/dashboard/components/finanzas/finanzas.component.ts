import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() imgName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
