import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ICard{
  title: string;
  description:string,
  isDisplay:boolean
}

@Component({
  selector: 'app-draf-component',
  templateUrl: './draf-component.component.html',
  styleUrl: './draf-component.component.css'
})
export class DrafComponentComponent {
  newDescription:string = 'Write Something';

  Card: ICard ={
    title : "Card Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt est quia blanditiis incidunt nemo iure excepturi aliquid reiciendis quaerat voluptatum ipsam dolore doloremque dolores vitae quae, ab suscipit a laudantium magni quasi esse earum commodi possimus! Quasi ipsam eum minus qui assumenda asperiores eligendi amet ratione dolorum provident hic aut rem harum corrupti officia, quae ut saepe nemo vel iure, esse ducimus dolorem excepturi? Quam officiis tempore asperiores deserunt distinctio eos facilis qui cupiditate ut mollitia, iusto quasi expedita aut at illum architecto quisquam est molestiae magni quis aliquid pariatur aspernatur! In deserunt laudantium quia cumque accusamus hic harum fugit dolorum illo quam id est vero optio eius ut, nemo labore perspiciatis odit velit, asperiores molestias mollitia nobis iste! Magnam ipsam adipisci nisi nam ad dolor laboriosam saepe voluptatum eum distinctio explicabo odit vero ut, natus mollitia hic illum! Qui quam autem eos enim iure? Numquam aliquid illo explicabo.",
    isDisplay : false
  }

  showHide(){
    if(this.Card.isDisplay == true){
      this.Card.isDisplay = false;
    }
    else{
      this.Card.isDisplay = true;
    }
  }

  onInputChange(event: any){
    var v = event.target.value;
    this.Card.description = v;
    console.log();
  }
}
