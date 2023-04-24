import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HoverDirective } from './customDirective/hover.directive';
import { BetterHighlightDirective } from './customDirective/better-highlight.directive';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';

const appRouters: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'directive', component: DirectiveDemoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HeaderComponent,
    ButtonComponent,
    TaskListComponent,
    TaskItemComponent,
    AboutComponent,
    FooterComponent,
    AddTaskComponent,
    HoverDirective,
    BetterHighlightDirective,
    DirectiveDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
