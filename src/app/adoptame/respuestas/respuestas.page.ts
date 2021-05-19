import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
//import { message } from "../../models/message";
//import {ChatsService} from "../../servicios/chats.service";

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.page.html',
  styleUrls: ['./respuestas.page.scss'],
})
export class RespuestasPage implements OnInit {

  public name: string;

  public mensajes = [
    {
      usuario: 'orli',
      sms: 'holaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      usuario: 'estebis',
      sms: 'ooooooooaaaaaaa'
    },
    {
      usuario: 'leo',
      sms: 'olaaaaaaaaaaaaaaaaaa'
    }
  ];
  usuario = 'andres';

  public msg: string;

  constructor( ) { }

  ngOnInit() {
   //this.name = this.navparams.get('name')
  }
  /*closeChat(){
    this.modal.dismiss()
  }*/
  sendMessage(){
    this.mensajes.push({
	usuario: 'Andres',
	sms: 'Hola Amigos'
});
  }
}


  /*public chat: any;
  // public message : message;

  public messages = [];

  public room: any;

  public msg : string;

  constructor(
    private navparams: NavParams, 
    private modal: ModalController,
    private chatService : ChatsService) { }

  ngOnInit() {

    this.chatService.getChatRoom( this.chat.id).subscribe( room => {
      console.log(room);
      this.room = room;
    })

    this.chat = this.navparams.get('chat')
  }


  closeChat() {
    this.modal.dismiss()
  }

  sendMessage(){

    const mensaje : message = {
    content : this.msg,
    type : 'text',
    date : new Date()
    }
    
  this.chatService.sendMsgToFirebase( mensaje, this.chat.id);
  this.msg = "";
  }
}
*/
  

