import { CanDeactivateFn } from '@angular/router';

export const confirmationGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {

  if(component.registerUserData.email !== "" || component.registerUserData.password !== "") {
    const confirmation = confirm("You have edited the form, would you like to proceed without saving?");
    return confirmation
  }
  return true;
};
