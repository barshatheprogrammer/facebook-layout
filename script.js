function like(btn) {
  let count = btn.nextElementSibling;
  count.innerText = parseInt(count.innerText) + 1;
}

function addPost() {
  let input = document.getElementById("postInput");
  if (input.value === "") return;

  let post = `
  <div class="post">
    <div class="post-header">
      <img src="https://i.pravatar.cc/40">
      <div>
        <b>Josephine</b>
        <p>Just now · 🌍</p>
      </div>
    </div>
    <p class="post-text">${input.value}</p>
    <div class="post-actions">
      <button onclick="like(this)">👍 Like</button>
      <span>0</span>
    </div>
  </div>`;

  document.getElementById("posts").innerHTML =
    post + document.getElementById("posts").innerHTML;

  input.value = "";
}
