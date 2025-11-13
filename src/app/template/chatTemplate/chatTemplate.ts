import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMessageEvent } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile';
import { TextMessageBoxEvent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect';
import { TextMessageBox } from '@components/text-boxes/textMessageBox/textMessageBox';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';
import { ChatMessage } from '@components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '@components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '@components/typingLoader/typingLoader';

// import

@Component({
  selector: 'app-chat-template',
  imports: [
    ReactiveFormsModule,
    ChatMessage,
    MyMessage,
    TypingLoader,
    TextMessageBox

  ],
  templateUrl: './chatTemplate.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplate {

  public messages = signal<Message[]>([]);
  public isLoading = signal<boolean>(false);
  public openAiService = inject(OpenAiService);

  handleMessage(prompt: string){
    console.log('Prompt received:', prompt);
  }

  // handleMessageWithFile({prompt , file}: TextMessageEvent){
  //   console.log('File received:', {file, prompt});
  // }

  // handleMessageWithSelect({prompt, selectedOption}: TextMessageBoxEvent){
  //   console.log('Prompt received from select box:', {prompt, selectedOption});
  // }

}
