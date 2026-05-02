import { Routes } from '@angular/router';
import { App } from './app';
import { Auth } from './feature/auth/auth';
import { TestComponent } from './feature/test-component/test-component';
import { About } from './feature/about/about';
import { Demo } from './feature/demo/demo';
import { Home } from './feature/home/home';
import { Choose } from './feature/choose/choose';
import { Subjects } from './feature/subjects/subjects';
import { MUM } from './feature/mum/mum';
import { BTP } from './feature/btp/btp';
import { OT } from './feature/texnalogiya/ot';
import { Om } from './feature/OTUM/om';

export const routes: Routes = [
    {path : '' , redirectTo: "about", pathMatch: 'full' },
    {
        path : "about", component : About
    },
    {
        path: 'login', component:Auth
    },
    {
        path:'using-test', component: TestComponent
    },
    {
        path: 'demo', component:Demo
    },
    {
        path: 'home', component: Home
    },
    {
        path: 'choose', component: Choose
    },
    {
        path: 'subjects', component: Subjects
    },
    {
        path: 'mum', component: MUM
    },
    {
        path: 'ot', component: OT
    },
    {
        path: 'btp', component: OT
    },
    {
        path: 'otum', component: Om
    }

];
