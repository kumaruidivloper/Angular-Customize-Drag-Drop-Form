import { Component, OnInit } from '@angular/core';
interface EList {
  caption: string;
  iconClass: string;
}
@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  elementList: EList[] = [
    {
      caption: 'Text Field',
      iconClass: 'text_rotation_none'
    },
    {
      caption: 'Text Area',
      iconClass: 'text_rotate_vertical'
    },
    {
      caption: 'Select',
      iconClass: 'arrow_drop_down'
    },
    {
      caption: 'Radio Button',
      iconClass: 'radio_button_checked'
    },
    {
      caption: 'CheckBox',
      iconClass: 'check_box'
    },
    {
      caption: 'Email',
      iconClass: 'email'
    },
    {
      caption: 'number',
      iconClass: 'format_list_numbered'
    },
    {
      caption: 'password',
      iconClass: 'person_pin'
    },
    {
      caption: 'button',
      iconClass: 'toggle_off'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
