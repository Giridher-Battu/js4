const team = new Map();

team.set("tl", "adhi");
team.set("ui", "sai teja");
team.set("be","rajiya");

console.log(team.get("tl"));

console.log(team);

console.log(team.has("fd"));

team.set("fd", "aruna");
console.log(team.has("fd"));