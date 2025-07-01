document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const numericAge = parseInt(age);

  // Enhanced validation
  if (name === "" || age === "" || isNaN(numericAge) || numericAge < 0) {
    alert("Please enter valid details.");
    return;
  }

  // Promise with delay
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numericAge >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  })
    .then((username) => {
      alert(`Welcome, ${username}. You can vote.`);
    })
    .catch((username) => {
      alert(`Oh sorry ${username}. You aren't old enough.`);
    });
});

