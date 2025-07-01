//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // Validate inputs
  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to number
  const numericAge = parseInt(age);

  // Promise logic
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
