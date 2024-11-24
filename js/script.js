const usernameInput = document.getElementById("userName1");
const PlayerOneButton = document.getElementById("PlayerOneButton");
const PlaceHolder1 = document.getElementById("PlaceHolder1");

PlayerOneButton.addEventListener("click", () => {
    const NameInput = usernameInput.value.trim();

    if (NameInput) {
        PlaceHolder1.textContent = NameInput;
        usernameInput.value = "";
    } else {
        alert("Please enter a name!");
    }
});

const username2Input = document.getElementById("userName2");
const PlayerTwoButton = document.getElementById("PlayerTwoButton");
const PlaceHolder2 = document.getElementById("PlaceHolder2");

PlayerTwoButton.addEventListener("click", () => {
    const NameInput = username2Input.value.trim();

    if (NameInput) {
        PlaceHolder2.textContent = NameInput;
        username2Input.value = "";
    } else {
        alert("Please enter a name!");
    }
});

const username3Input = document.getElementById("userName3");
const PlayerThreeButton = document.getElementById("PlayerThreeButton");
const PlaceHolder3 = document.getElementById("PlaceHolder3");

PlayerThreeButton.addEventListener("click", () => {
    const NameInput = username3Input.value.trim();

    if (NameInput) {
        PlaceHolder3.textContent = NameInput;
        username3Input.value = "";
    } else {
        alert("Please enter a name!");
    }
});

const Button1 = document.getElementById("Button1");
const Button2 = document.getElementById("Button2");
const Button3 = document.getElementById("Button3");
const Button4 = document.getElementById("Button4");
const Button5 = document.getElementById("Button5");
const Button6 = document.getElementById("Button6");
const Button7 = document.getElementById("Button7");
const Button8 = document.getElementById("Button8");
const Button9 = document.getElementById("Button9");

// I plan to move these functions into modules later as to not take up so much space

function ShowQuestion1() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This movie released in 1977 sparked an entire franchise of soap opera dramas revolving around sci-fi elements such as spaceships, beam swords, and the usage of force.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button1').addEventListener('click',ShowQuestion1);

function ShowQuestion2() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This animated children's film starring Jack Black sparked controversy, asking why a western animation studio was able to make a better film on Chinese culture than China.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button2').addEventListener('click',ShowQuestion2);

function ShowQuestion3() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This Hollywood actor didn't win a fabled Oscar for Best Actor until his victory in 2016 thanks to the film he starred in prior to, The Revenant.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button3').addEventListener('click',ShowQuestion3);

function ShowQuestion4() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This sport was invented in 1891, revolving around the act of dribbling a ball with one's hands and throwing said ball into a hoop positioned more than 6 feet high.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button4').addEventListener('click',ShowQuestion4);

function ShowQuestion5() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This soccer player would win a World Cup not only in 2014, but also in 2022, the latter being a victory against France.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button5').addEventListener('click',ShowQuestion5);

function ShowQuestion6() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "Regarded as the greatest player in the history of baseball, this player helped his New York team win four World Series titles. He is also known as the Sultan of Swat.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button6').addEventListener('click',ShowQuestion6);

function ShowQuestion7() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This machine allows the dispensing of multiple different snacks, only requiring up to $5.00, and can be found in almost any public space.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button7').addEventListener('click',ShowQuestion7);

function ShowQuestion8() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "This dish can be eaten with a fork and knife or with hands, and contains various different toppings based on the consumer's preferences. Almost all variations of this dish will include a large helping of cheese and tomato sauce.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button8').addEventListener('click',ShowQuestion8);

function ShowQuestion9() {
    const QuestionBox = document.createElement('p');
    QuestionBox.textContent = "Founded in 1940 by two brothers named Mac and Richard, This fast-food franchise has become widespread all around the world, helping to innovate the industry with features such as 'SuperSize'.";
    document.getElementById('QuestionBox').appendChild(QuestionBox);
};
document.getElementById('Button9').addEventListener('click',ShowQuestion9);

function Clear() {
    document.getElementById('QuestionBox').textContent = "";
};
document.getElementById('clear').addEventListener('click',Clear);