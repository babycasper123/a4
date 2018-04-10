import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // srvElement is the alias name provided so that the it can be accessed outside.
  // Internally still it would be called as Element.

  @Input('srvElement') element : {type: string,name: string,content: string };

  constructor() { }

  ngOnInit() {
  }
  

}
