import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContact = this.fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telephone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensage: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
