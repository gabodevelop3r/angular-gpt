import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-message-box',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './textMessageBox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBox {

  @Input() placeholder: string = 'Type your message here...';
  @Input() disableCorrections: boolean = false;
  @Output() onMessage = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      prompt: ['', Validators.required]
    });
  }



  handleSubmit() {

    if(this.form.invalid) return ;

    const {prompt} = this.form.value;
    this.onMessage.emit(prompt!);
    this.form.reset();

  }


}
