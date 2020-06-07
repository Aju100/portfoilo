fetch("https://api.github.com/users/aju100").then((response) =>
  response.json().then(function (data) {
    console.log(data);
    document.getElementById("profile").src = data["avatar_url"];
    document.getElementById("name").textContent = data["name"];
    document.getElementById("bio").textContent = data["bio"];
    document.getElementById("githublink").href = data["html_url"];
    document.getElementById("mainContainer").hidden = false;
    document.getElementById("loading").hidden = true;
  })
);

fetch("https://api.github.com/users/Aju100/repos")
  .then((response) => response.json())
  .then(function (data) {
    data.splice(8);

    data.forEach((d) => {
      const { url, full_name, name } = d;
      let git = document.querySelector(".git");
      let html = `
              <div class="git1">
                <a href="${url}" class="git__url">${name}</a>
                <p>${full_name}</p>
              </div>
            `;
      git.innerHTML += html;
    });
  });
