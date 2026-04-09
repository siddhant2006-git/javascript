const KEYWORDS = ["ATTACK", "MISSION", "TARGET", "SECRET"];
const COMMON = ["THE", "IS", "AND", "TO", "OF"];

function caesar(text, shift) {
  return text.replace(/[a-z]/gi, c => {
    const base = c === c.toUpperCase() ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
  });
}

function atbash(text) {
  return text.replace(/[a-z]/gi, c => {
    const base = c === c.toUpperCase() ? 65 : 97;
    return String.fromCharCode(base + (25 - (c.charCodeAt(0) - base)));
  });
}

function reverse(text) {
  return text.split("").reverse().join("");
}

function progressive(text) {
  let shift = 1;
  return text.replace(/[a-z]/gi, c => {
    const base = c === c.toUpperCase() ? 65 : 97;
    const res = String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
    shift++;
    return res;
  });
}

function score(text) {
  let s = 0;
  const t = text.toUpperCase();

  KEYWORDS.forEach(w => { if (t.includes(w)) s += 15; });
  COMMON.forEach(w => { if (t.includes(w)) s += 3; });

  // frequency heuristic (vowels presence)
  const vowels = (t.match(/[AEIOU]/g) || []).length;
  s += vowels;

  return s;
}

function analyze() {
  const input = document.getElementById("inputText").value;
  const algo = document.getElementById("algorithm").value;
  const minScore = +document.getElementById("minScore").value;
  const topN = +document.getElementById("topN").value;

  let results = [];

  if (algo === "all" || algo === "caesar") {
    for (let i = 0; i < 26; i++) {
      const out = caesar(input, i);
      results.push({ method: "Caesar", shift: i, text: out, score: score(out) });
    }
  }

  if (algo === "all" || algo === "atbash") {
    const out = atbash(input);
    results.push({ method: "Atbash", shift: "+", text: out, score: score(out) });
  }

  if (algo === "all" || algo === "reverse") {
    const out = reverse(input);
    results.push({ method: "Reverse", shift: "-", text: out, score: score(out) });
  }

  if (algo === "all" || algo === "progressive") {
    const out = progressive(input);
    results.push({ method: "Progressive", shift: "var", text: out, score: score(out) });
  }

  // filter + sort
  results = results
    .filter(r => r.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);

  render(results);
}

function render(results) {
  const table = document.getElementById("results");
  const bestDiv = document.getElementById("bestResult");

  table.innerHTML = "";

  if (!results.length) {
    bestDiv.innerHTML = "No meaningful result found";
    return;
  }

  const best = results[0];

  bestDiv.innerHTML = `
    <h3>Best Match</h3>
    <p><b>Method:</b> ${best.method}</p>
    <p><b>Shift:</b> ${best.shift}</p>
    <p><b>Text:</b> ${best.text}</p>
    <p><b>Score:</b> ${best.score}</p>
  `;

  results.forEach(r => {
    table.innerHTML += `
      <tr>
        <td>${r.method}</td>
        <td>${r.shift}</td>
        <td>${r.text}</td>
        <td>${r.score}</td>
      </tr>
    `;
  });
}
