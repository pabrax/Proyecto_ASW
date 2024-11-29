import { UsuarioService } from "../services/usuario.service"; 
import { Injectable } from '@angular/core';
import { RolUsuarioService } from "../services/rol-usuario.service";
import { RolService } from "../services/rol.service";

@Injectable()
export class RolController {

    Admin: boolean = false;

    constructor(private usuarioService: UsuarioService, private rolUsuarioService: RolUsuarioService, private rolService: RolService) 
    {}

    isAdmin(): boolean {
        return this.Admin;
    }

    verifyAdmin(email: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!email) {
                console.error('Email not found in localStorage');
                resolve(false);
                return;
            }

            this.rolUsuarioService.getRolesByUsuario(email).subscribe(
                async (data) => {
                    if (data.length > 0) {
                        for (const rolUsuario of data) {
                            try {
                                const rol = await this.rolService.getRolById(rolUsuario.id_rol).toPromise();
                                if (rol && (rol.rol === 'admin' || rol.rol === 'gerente')) {
                                    this.Admin = true;
                                    console.log('isAdmin', this.Admin);
                                    resolve(true);
                                    return;
                                }
                            } catch (error) {
                                console.error('Error getting role', error);
                                reject(error);
                                return;
                            }
                        }
                        resolve(false);
                    } else {
                        resolve(false);
                    }
                },
                (error) => {
                    console.error('Error getting roles', error);
                    reject(error);
                }
            );
        });
    }
}