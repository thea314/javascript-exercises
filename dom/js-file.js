const container = document.querySelector('.container');

const content = document.createElement('div');
const contentH3 = document.createElement('div');

container.appendChild(content);
container.appendChild(contentH3);


const redParagraph = document.createElement('p');
redParagraph.classList.add('redParagraph');
redParagraph.textContent = 'I am red!';
redParagraph.style.color = 'red';
content.appendChild(redParagraph);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = 'I am blue h3!';
blueH3.style.color = 'blue';
contentH3.appendChild(blueH3);

const blackBorderDiv = document.createElement('div');
blackBorderDiv.classList.add('blackBorderDiv');
blackBorderDiv.style.border = '1px solid black';

const blackH1 = document.createElement('h1');
blackH1.classList.add('blackH1');
blackH1.textContent = 'I am in a div!';
blackBorderDiv.appendChild(blackH1);

const blackP = document.createElement('p');
blackP.classList.add('blackP');
blackP.textContent = 'ME TOO!';
blackBorderDiv.appendChild(blackP);

container.appendChild(blackBorderDiv);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  