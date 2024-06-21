"use strict";

const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");

  post.addEventListener("mouseover", () => {
    // Removemos la clase de cerrado
    post.classList.remove("closed");
    // Agregamos la clase de abierto
    post.classList.add("open");
  });

  post.addEventListener("mouseout", () => {
    // Agregamos la clase de cerrado
    post.classList.add("closed");
    // Quitamos la clase de abierto
    post.classList.remove("open");
  });
}