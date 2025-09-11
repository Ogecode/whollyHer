class Team {
  constructor(name, role, img) {
    this.name = name;
    this.role = role;
    this.img = img;
  }
}

const teamMembers = [
  new Team("Ogechi Ogobnnaya", "Founder & Visioneer", "./photo/Ogechi.jpeg"),
  new Team("Dipo Koku", "Patron", "./photo/PD New.jpg"),
  new Team(
    "Achenyo Idachaba-Obaro",
    "Matron",
    "./photo/ACHENYO IDACHABA-OBARO.png"
  ),
  new Team("Ediri Ose-Ediale", "Mentor", "./photo/ediri ose-ediale.png"),
  new Team(
    "Tosin Togude",
    "Community Host & Contributor",
    "./photo/Tosin.jpeg"
  ),
  new Team(
    "Yemi Alaram",
    "Community Manager & Contributor",
    "./photo/yemi.jpeg"
  ),
  new Team(
    "Gbemisola Adeduro",
    "Program Director & Contributor",
    "./photo/mayowa.jpeg"
  ),
  new Team(
    "Precious Obinna",
    "Content Lead & Contributor",
    "./photo/prec.jpeg"
  ),
  new Team(
    "Teniola Aina",
    "Content Manager & Contributor",
    "./photo/Teniiola.jpeg"
  ),
];

const container = document.getElementById("team-container");

teamMembers.forEach((member) => {
  const card = `
    <article class="bg-white rounded-xl overflow-hidden shadow">
    <img class="w-48 h-48 object-cover rounded-full mx-auto" src="${member.img}" alt="${member.name}" />
      <div class="p-3 text-center">
        <h3 class="text-lg font-medium text-gray-800">${member.name}</h3>
        <p class="text-gray-600">${member.role}</p>
      </div>
    </article>
  `;
  container.innerHTML += card;
});
