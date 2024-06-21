"use strict";

let accumulator = ""
for(const post of data){

  accumulator += `
  <article class="post">
    <div class="post-header">
      <img
      src= "${post.avatar}"
        class="icon-avatar"
        alt="avatar icon"
        width="75"
      />
      <h2>${post.titulo}</h2>
    </div>
    <div>
      <p>
        ${post.texto}
      </p>
    </div>
  </article>
  `
};