/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function domainGenerator() {
  let domains = [];
  pronoun.forEach(item => {
    adj.forEach(adjEl => {
      noun.forEach(nounEl => {
        domains.push(item + adjEl + nounEl + ".com");
      });
    });
  });
  return domains;
}

window.onload = function() {
  const el = document.getElementById("domain");
  const ul = document.createElement("ul");
  el.appendChild(ul);
  const arr = domainGenerator();
  arr.forEach(item => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = item;
  });
};
