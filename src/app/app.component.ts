import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,CdkDragRelease } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngProject';
  ColumnList1 = [
    { id: "JavaScript", text: 'JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'},
    { id: "BootStrap", text: 'Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.Bootstrap is completely free to download and use!' },
    { id: "TypeScript", text: 'TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. ' },
  ];
  ColumnList2 = [
    { id: "CSS Coments", text: 'Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.A CSS comment is placed inside the <style> element, and starts with /* and ends with */:' },
    { id: "Scala", text: 'Scala is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. ' },
  ];
  ColumnList3= [
    { id: "React", text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.' },
    { id: "HTML", text: 'BThe HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'  },
  ];
  
  

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}


