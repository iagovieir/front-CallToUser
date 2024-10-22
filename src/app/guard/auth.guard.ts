import { CanActivateFn, Router } from '@angular/router';
import { authService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const AuthService = inject(authService);  
  const router = inject(Router);

  
  if (AuthService.isAuthenticated()) {
    return true; 

  } else {
    router.navigate(['/login']);
    return false;

  }

};
