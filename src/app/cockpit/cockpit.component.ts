import { Component, OnInit , EventEmitter , Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName : string , serverContent: string , serverType : string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName : string , serverContent : string, serverType : string}>();

  newServerName = '';
  newServerContent = '';
  newServerType = '';


  constructor() { }

  ngOnInit() {
  }
  
  onAddServer(){
    this.serverCreated.emit({
       serverName : this.newServerName ,
       serverContent : this.newServerContent,
       serverType : 'server'
    });
    // This event has been emitted , now any component has given (serverCreated) 
    // event in their dom structure and calls any method will be triggered eg: app.component.html has (serverCreated) in its dom which will be linked to this
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName : this.newServerName ,
       serverContent : this.newServerContent,
       serverType:'blueprint'
    });
  }

}
