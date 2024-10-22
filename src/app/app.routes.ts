import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MeuPerfilComponent } from './pages/meu-perfil/meu-perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {
        path:'', 
        component: LayoutComponent,
        children:[
            {path: 'home', component: HomeComponent},
            {path: 'meu-perfil', component: MeuPerfilComponent},
            {path: 'users', component: UsersComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: '**', redirectTo: 'home', pathMatch: 'full' },
        ]
        
    },
    
    
    
    
];
