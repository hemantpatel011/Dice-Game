let s1 = 0,
  s2 = 0;

let sb2 = Number(document.getElementById("p2sc").innerText);

function start() {
  const p1 = document.getElementById("p1").value.trim();
  const p2 = document.getElementById("p2").value.trim();

  if (p1 === "" || p2 === "") {
    alert("Please add the Player Name");
    location.reload();
  }

  document.getElementById("p1nmlb").innerText = p1;
  document.getElementById("p1sclb").innerText = p1;

  document.getElementById("p2nmlb").innerText = p2;
  document.getElementById("p2sclb").innerText = p2;

  document.getElementById("start").disabled = true;
  document.getElementById("restart").disabled = false;
  document.getElementById("rolldice1").disabled = false;
}

function restart() {
  if (confirm("Are you Sure ?")) {
    location.reload();
  }
}

function switchPlayer(chance) {
  if (chance === 2) {
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = false;
  } else {
    document.getElementById("rolldice1").disabled = false;
    document.getElementById("rolldice2").disabled = true;
  }
}

function p1Play() {
  let dice = Math.floor(Math.random() * 6 + 1);
  s1 = Number(document.getElementById("p1sc").innerText);

  switch (dice) {
    case 1: {
      document.getElementById("p1dice").src = "./mages/1.webp";
      break;
    }
    case 2: {
      document.getElementById("p1dice").src = "./images/2.webp";
      break;
    }
    case 3: {
      document.getElementById("p1dice").src = "./images/3.webp";
      break;
    }
    case 4: {
      document.getElementById("p1dice").src = "./images/4.webp";
      break;
    }
    case 5: {
      document.getElementById("p1dice").src = "./images/5.webp";
      break;
    }
    case 6: {
      document.getElementById("p1dice").src = "./images/6.webp";
      break;
    }
    default: {
      console.log("Number not in range 1-6");
    }
  }

  s1 = s1 + dice;

  if (dice === 6 || s1 > 50) {
    s1 = s1 - dice;
    switchPlayer(2);
  } else {
    document.getElementById("p1sc").innerText = s1;
    if (s1 === 50) {
      
      alert("PLayer 1 Winnner !!! ");
    }
  }
}

function p2Play() {
  let dice = Math.floor(Math.random() * 6 + 1);
  s2 = Number(document.getElementById("p2sc").innerText);

  switch (dice) {
    case 1: {
      document.getElementById("p2dice").src = "./images/1.webp";
      break;
    }
    case 2: {
      document.getElementById("p2dice").src = "./images/2.webp";
      break;
    }
    case 3: {
      document.getElementById("p2dice").src = "./images/3.webp";
      break;
    }
    case 4: {
      document.getElementById("p2dice").src = "./images/4.webp";
      break;
    }
    case 5: {
      document.getElementById("p2dice").src = "./images/5.webp";
      break;
    }
    case 6: {
      document.getElementById("p2dice").src = "./images/6.webp";
      break;
    }
    default: {
      console.log("Number not in range 1-6");
    }
  }

  s2 = s2 + dice;

  if (dice === 6 || s2 > 50) {
    s2 = s2 - dice;
    switchPlayer(1);
  } else {
    document.getElementById("p2sc").innerText = s2;
    if (s2 === 50) {
      alert("Player 2 Winnner !!! ");
    }
  }
}