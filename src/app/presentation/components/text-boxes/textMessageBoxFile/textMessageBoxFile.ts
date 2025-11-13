import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TextMessageEvent {
  prompt?: string|null;
  file: File;
}

@Component({
  selector: 'app-text-message-box-file',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './textMessageBoxFile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFile {


  @Input() placeholder: string = 'Type your message here...';
  @Output() onMessage = new EventEmitter<TextMessageEvent>();

  public form: FormGroup;
  public file : File | undefined;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      prompt: [],
      file: [null, Validators.required]
    });
  }

  handleSelectedFile(event: any) {
    const selectedFile = event.target.files.item(0);
    this.form.controls['file'].setValue(selectedFile);
  }

  handleSubmit() {

    if(this.form.invalid) return ;

    const {prompt, file} = this.form.value;
    this.onMessage.emit({prompt, file});
    this.form.reset();

  }

}
