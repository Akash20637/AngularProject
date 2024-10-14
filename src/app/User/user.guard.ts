import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const userGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    
    let user = window.localStorage.getItem('user')
    if(user){
        return true 
    }
    else{
        alert("You Are Not Authenticate User..")
        return false
    }
   
};

