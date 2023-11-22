const cardCon = document.querySelector(".card-container");

for (let i = 0; i < 6; i++) {
  const projCard = document.createElement("div");
  projCard.classList.add("project-card");

  const cardBg = document.createElement("div");
  cardBg.classList.add("card-bg", `card-bg-${i + 1}`);

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("project-info-top");

  const bgText = document.createElement("p");
  bgText.textContent = "screenshot of project";

  const cardH3 = document.createElement("h3");
  cardH3.textContent = "Project name";

  const faDiv = document.createElement("fa-div");
  faDiv.classList.add("fa-div");

  const githubFaIcon = document.createElement("i");
  githubFaIcon.classList.add("fa-brands", "fa-github", "hvr-grow");

  const linkFaIcon = document.createElement("i");
  linkFaIcon.classList.add(
    "fa-solid",
    "fa-arrow-up-right-from-square",
    "hvr-grow"
  );

  const cardP = document.createElement("p");
  cardP.textContent =
    "Short description of the project. Just a couple sentences will do.";

  cardBg.appendChild(bgText);
  faDiv.append(githubFaIcon, linkFaIcon);
  infoDiv.append(cardH3, faDiv);
  projectInfo.append(infoDiv, cardP);
  projCard.append(cardBg, projectInfo);

  cardCon.appendChild(projCard);
}
