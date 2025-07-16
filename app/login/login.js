
import style from './LogIn.module.css';

export function signIn() {
  const upBtn = document.getElementsByClassName("signUp")[0];
  const inBtn = document.getElementsByClassName("signIn")[0];

  if (upBtn && inBtn) {
    upBtn.classList.add(style.hide);
    inBtn.classList.remove(style.hide);
    inBtn.classList.add(style.transition);
    upBtn.classList.remove(style.transition);
    console.log("yes7");
  }
}

export function signUp() {
  const upBtn = document.getElementsByClassName("signUp")[0];
  const inBtn = document.getElementsByClassName("signIn")[0];

  if (upBtn && inBtn) {
    inBtn.classList.add(style.hide);
    upBtn.classList.remove(style.hide);
    upBtn.classList.add(style.transition);
    inBtn.classList.remove(style.transition);
    console.log("yes8");
  }
}
