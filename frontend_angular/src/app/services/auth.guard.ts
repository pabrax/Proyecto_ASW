import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.getToken();  

  if (!isAuthenticated || isAuthenticated === null) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
