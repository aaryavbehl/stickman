Array.prototype.last = function (){
    return this[this.length -1];
};
Math.sinus = function (degree) {
    return Math.sin((degree / 180) * Math.PI);
};

let phase = "waiting";
let lastTimestamp;
let heroX;
let heroY;
let sceneOffset;
let platforms = [];
let sticks = [];
let trees = [];
let score = 0;

const canvasWidth = 375;
const canvasHeight = 375;
const platformHeight = 100;
const heroDistanceFromEdge = 10;
const paddingX = 100;
const perfectAreaSize = 10;
const backgroundSpeedMultiplier = 0.2;
const hill1BaseHeight = 100;
const hill1Amplitude = 10;
const hill1Stretch = 1;
const hill2BaseHeight = 70;
const hill2Amplitude = 20;
const hill2Stretch = 0.5;
const stretchingSpeed = 4;
const turningSpeed = 4;
const walkingSpeed = 4;
const transitioningSpeed = 2;
const fallingSpeed = 2;
const heroWidth = 17;
const heroHeight = 30;

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const introductionElement = document.getElementById("introduction");
const perfectElement = document.getElementById("perfect");
const restartButton = document.getElementById("restart");
const scoreElement = document.getElementById("score");

resetGame();

function resetGame(){
    phase = "waiting";
    lastTimestamp = undefined;
    sceneOffset = 0;
    score = 0;
    introductionElement.style.opacity = 1;
    perfectElement.style.opacity = 0;
    restartButton.style.display = "none";
    scoreElement.innerText = score;
    platforms = [{x: 50, w:50}];
    generatePlatform();
    generatePlatform();
    generatePlatform();
    generatePlatform();

    sticks = [{x: platform[0].x + platform[0].w, length: 0, rotation: 0}];

    trees = [];
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();

    heroX = platform[0].x + platform[0].w - heroDistanceFromEdge;
    heroY = 0;

    draw();
}

function generateTree() {
    Math.floor(Math.random() * (maximumGap - minimumGap));
    const treeColors = ["#6D8821", "#8FAC34", "#98B333"];
    const color = treeColors[Math.floor(Math.random() * 3)];
    trees.push([x,color]);
}

