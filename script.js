/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/




// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page

// Example placeholder:
fetch('https://catfact.ninja/fact')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.fact);
    const factElement = document.getElementById('cat-fact');
    factElement.textContent = data.fact;
  })

  fetch('https://meowfacts.herokuapp.com/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const factElement = document.getElementById('cat-fact1');
      factElement.textContent = data.data;
    });

    fetch('https://randomfox.ca/floof/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.image);
      const factElement = document.getElementById('fox-image');
      factElement.src = data.image;
      });

      fetch('https://yesno.wtf/api')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.answer);
          const factElement = document.getElementById('yesno-answer');
          factElement.textContent = data.answer;
        });

      fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.text);
          const factElement = document.getElementById('useless-fact');
          factElement.textContent = data.text;
        });