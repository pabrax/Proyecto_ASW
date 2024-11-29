import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RolController } from '../classes/rolController';

export const userRolGuard: CanActivateFn = async () => {
  const rolController = inject(RolController);
  const router = inject(Router);

  const isAdmin = rolController.verifyAdmin(localStorage.getItem('email') || '');

  if (!isAdmin) {
    router.navigate(['/app']);
    return false;
  }

  return true;
};