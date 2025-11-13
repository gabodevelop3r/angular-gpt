import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessage } from '@components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '@components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '@components/typingLoader/typingLoader';
import { TextMessageBox } from '@components/text-boxes/textMessageBox/textMessageBox';
import { TextMessageBoxFile, TextMessageEvent } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile';
import { TextMessageBoxSelect, TextMessageBoxEvent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect'
import { Message } from '@interfaces/index';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-orthography-page',
  imports: [
    CommonModule,
    ChatMessage,
    MyMessage,
    TypingLoader,
    TextMessageBox,
    TextMessageBoxFile,
    TextMessageBoxSelect
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage {

  public messages = signal<Message[]>([{text: 'Hola, ¿en qué puedo ayudarte con la ortografía?', isGpt: true}]);
  public isLoading = signal<boolean>(false);
  public openAiService = inject(OpenAiService);

  handleMessage(prompt: string){
    console.log('Prompt received:', prompt);
  }

  handleMessageWithFile({prompt , file}: TextMessageEvent){
    console.log('File received:', {file, prompt});
  }

  handleMessageWithSelect({prompt, selectedOption}: TextMessageBoxEvent){
    console.log('Prompt received from select box:', {prompt, selectedOption});
  }

}
