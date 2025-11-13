import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './SidebarMenuItem.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItem {


  @Input({required: true}) title!: string;
  @Input({required: true}) icon!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) path!: string;

}
