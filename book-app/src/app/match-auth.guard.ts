import { CanMatchFn } from '@angular/router';

export const matchAuthGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem("role");
  if(role && role.toLocaleLowerCase() === "admin") {
    return true;
  }
  return false;
};
