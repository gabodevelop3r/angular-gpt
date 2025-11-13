import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt: string;
  selectedOption: String;
}


@Component({
  selector: 'app-text-message-box-select',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBoxSelect.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelect {


  @Input() placeholder: string = 'Type your message here...';
  @Input({required : true}) options!: Option[];
  @Output() onMessage = new EventEmitter<TextMessageBoxEvent>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      prompt: ['', Validators.required],
      selectedOption: ['', Validators.required]
    });
  }



  handleSubmit() {

    if(this.form.invalid) return ;

    const {prompt, selectedOption} :TextMessageBoxEvent = this.form.value;
    this.onMessage.emit({prompt, selectedOption});
    this.form.reset();

  }



}
