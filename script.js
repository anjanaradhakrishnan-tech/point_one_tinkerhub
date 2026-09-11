// =====================================================
// DOLESS AI
// THE WORLD'S MOST ADVANCED HOMEWORK AVOIDANCE SYSTEM
// =====================================================


// =====================================================
// GET HTML ELEMENTS
// =====================================================

const taskInput = document.getElementById("taskInput");

const deadlineInput =
    document.getElementById("deadline");

const analyzeBtn =
    document.getElementById("analyzeBtn");

const terminalSection =
    document.getElementById("terminalSection");

const terminalOutput =
    document.getElementById("terminalOutput");

const analysisSection =
    document.getElementById("analysisSection");

const dashboard =
    document.getElementById("dashboard");

const detectedTask =
    document.getElementById("detectedTask");

const difficulty =
    document.getElementById("difficulty");

const urgency =
    document.getElementById("urgency");

const procrastination =
    document.getElementById("procrastination");

const difficultyBar =
    document.getElementById("difficultyBar");

const urgencyBar =
    document.getElementById("urgencyBar");

const procrastinationBar =
    document.getElementById("procrastinationBar");

const recommendationText =
    document.getElementById("recommendationText");

const recommendationReason =
    document.getElementById("recommendationReason");

const score =
    document.getElementById("score");

const scoreTitle =
    document.getElementById("scoreTitle");

const scoreDescription =
    document.getElementById("scoreDescription");

const escapePlan =
    document.getElementById("escapePlan");

const excuse =
    document.getElementById("excuse");

const excuseBtn =
    document.getElementById("excuseBtn");

const avoidBtn =
    document.getElementById("avoidBtn");

const timerDisplay =
    document.getElementById("timer");

const startTimer =
    document.getElementById("startTimer");

const resetTimer =
    document.getElementById("resetTimer");

const chatMessages =
    document.getElementById("chatMessages");

const chatInput =
    document.getElementById("chatInput");

const sendChat =
    document.getElementById("sendChat");

const emergencyBtn =
    document.getElementById("emergencyBtn");

const judgeModeBtn =
    document.getElementById("judgeModeBtn");

const leaderboardScore =
    document.getElementById("leaderboardScore");

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const countdownDisplay =
    document.getElementById("countdown");

const closeModal =
    document.getElementById("closeModal");


// =====================================================
// RANDOM NUMBER
// =====================================================

function randomNumber(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


// =====================================================
// EXCUSE DATABASE
// =====================================================

const excuses = [

    "My brain has submitted a leave application.",

    "I was waiting for the correct atmospheric conditions.",

    "I completed it mentally. Unfortunately, the results are invisible.",

    "My laptop and I are currently taking some personal space.",

    "I accidentally started tomorrow.",

    "I was researching how to start my homework.",

    "My motivation is currently out of office.",

    "I opened the textbook. That should count for something.",

    "I was about to do it, but then I remembered I could do it later.",

    "My productivity license has expired.",

    "I was waiting for inspiration to arrive.",

    "The assignment and I have decided to take a break.",

    "I need more time to prepare myself to prepare.",

    "I successfully avoided doing it. Mission accomplished.",

    "My Wi-Fi was working perfectly, which was suspicious.",

    "I spent all my energy deciding when to start.",

    "The deadline and I are currently negotiating.",

    "I was busy being academically overwhelmed.",

    "My pen wasn't emotionally prepared.",

    "I thought about doing it very seriously."
];


// =====================================================
// HOMEWORK ESCAPE PLAN
// =====================================================

function createEscapePlan(task) {

    escapePlan.innerHTML = "";

    const plans = [

        `First, stare at "${task}" for 12 seconds to establish dominance.`,

        `Open a new tab and search for something completely unrelated to "${task}".`,

        `Prepare a beverage. Academic beverages increase perceived productivity by 0%.`,

        `Open your textbook, look at the first page, and immediately question your life choices.`,

        `Tell yourself you will start in five minutes. This is a scientifically important step.`,

        `Take a completely unnecessary break because you have already worked very hard thinking about the task.`,

        `Finally, move the task to tomorrow. Congratulations. Your plan is complete.`

    ];


    plans.forEach(function(text, index) {

        const step =
            document.createElement("div");

        step.className =
            "escape-step";


        step.innerHTML = `

            <div class="escape-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <p>
                ${text}
            </p>

        `;


        escapePlan.appendChild(step);

    });

}


// =====================================================
// FAKE AI TERMINAL
// =====================================================

function runTerminal(task, callback) {

    terminalOutput.innerHTML = "";

    terminalSection.classList.remove("hidden");

    analysisSection.classList.add("hidden");

    dashboard.classList.add("hidden");


    const lines = [

        "INITIALIZING DOLESS AI v3.0...",

        "> Connecting to procrastination servers...",

        "> Detecting homework...",

        "> Measuring academic responsibility...",

        "> Scanning motivation levels...",

        "> Calculating procrastination probability...",

        "> Searching for unnecessary solutions...",

        "> Consulting absolutely no experts...",

        "> Generating scientifically questionable recommendations...",

        "> Evaluating escape possibilities...",

        "> FINAL ANALYSIS COMPLETE."

    ];


    let index = 0;


    function showNextLine() {

        if (index >= lines.length) {

            terminalOutput.innerHTML +=
                `<br><span style="color:#ffe45c;">
                > SYSTEM READY.
                </span>`;

            setTimeout(function() {

                callback();

            }, 700);

            return;

        }


        const line =
            document.createElement("div");

        line.textContent =
            lines[index];

        terminalOutput.appendChild(line);


        index++;


        setTimeout(
            showNextLine,
            350
        );

    }


    showNextLine();

}


// =====================================================
// ANALYZE HOMEWORK
// =====================================================

analyzeBtn.addEventListener(
    "click",
    function() {

        const task =
            taskInput.value.trim();


        if (task === "") {

            alert(
                "🚨 HOMEWORK NOT FOUND\n\nPlease enter a task you are supposed to do."
            );

            return;

        }


        runTerminal(
            task,
            function() {

                performAnalysis(task);

            }
        );

    }
);


// =====================================================
// PERFORM ANALYSIS
// =====================================================

function performAnalysis(task) {

    detectedTask.textContent =
        task;


    // Fake AI numbers

    let difficultyValue =
        randomNumber(60, 96);

    let urgencyValue =
        randomNumber(55, 98);

    let procrastinationValue =
        randomNumber(88, 99);


    // Deadline analysis

    if (deadlineInput.value !== "") {

        const deadline =
            new Date(deadlineInput.value);

        const now =
            new Date();

        const hoursLeft =
            (deadline - now) / 3600000;


        if (hoursLeft <= 24) {

            urgencyValue =
                randomNumber(92, 99);

        }

        else if (hoursLeft <= 72) {

            urgencyValue =
                randomNumber(80, 96);

        }

    }


    // Show sections

    analysisSection.classList.remove(
        "hidden"
    );

    dashboard.classList.remove(
        "hidden"
    );


    // Display values

    difficulty.textContent =
        difficultyValue + "%";

    urgency.textContent =
        urgencyValue + "%";

    procrastination.textContent =
        procrastinationValue + "%";


    // Animate bars

    setTimeout(function() {

        difficultyBar.style.width =
            difficultyValue + "%";

        urgencyBar.style.width =
            urgencyValue + "%";

        procrastinationBar.style.width =
            procrastinationValue + "%";

    }, 200);


    // Recommendation

    recommendationText.textContent =
        "PROCRASTINATION RECOMMENDED.";


    recommendationReason.textContent =
        "Our unnecessarily advanced AI has determined that productivity would be a terrible decision.";


    // Score

    animateScore(
        procrastinationValue
    );


    // Escape plan

    createEscapePlan(task);


    // Save task

    localStorage.setItem(
        "dolessTask",
        task
    );


    // Save score

    localStorage.setItem(
        "dolessScore",
        procrastinationValue
    );


    // Update leaderboard

    leaderboardScore.textContent =
        procrastinationValue + "%";


    // Scroll

    setTimeout(function() {

        analysisSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);

}


// =====================================================
// SCORE ANIMATION
// =====================================================

function animateScore(finalScore) {

    let current =
        0;


    const interval =
        setInterval(function() {

            current += 1;

            score.textContent =
                current;


            if (current >= finalScore) {

                clearInterval(interval);

                updateScoreMessage(
                    finalScore
                );

            }

        }, 15);

}


// =====================================================
// SCORE MESSAGE
// =====================================================

function updateScoreMessage(value) {

    if (value >= 97) {

        scoreTitle.textContent =
            "LEGENDARY PROCRASTINATOR";

        scoreDescription.textContent =
            "You have achieved a level of procrastination previously believed to be impossible.";

    }

    else if (value >= 94) {

        scoreTitle.textContent =
            "ELITE PROCRASTINATOR";

        scoreDescription.textContent =
            "You are professionally avoiding productivity.";

    }

    else if (value >= 90) {

        scoreTitle.textContent =
            "ADVANCED PROCRASTINATOR";

        scoreDescription.textContent =
            "Excellent work avoiding excellent work.";

    }

    else {

        scoreTitle.textContent =
            "BEGINNER PROCRASTINATOR";

        scoreDescription.textContent =
            "You have enormous potential to do less.";

    }

}


// =====================================================
// EXCUSE GENERATOR
// =====================================================

excuseBtn.addEventListener(
    "click",
    function() {

        const randomIndex =
            randomNumber(
                0,
                excuses.length - 1
            );


        excuse.textContent =
            `"${excuses[randomIndex]}"`;

    }
);


// =====================================================
// HOMEWORK AVOIDANCE
// =====================================================

avoidBtn.addEventListener(
    "click",
    function() {

        openModal(

            "HOMEWORK AVOIDANCE ACTIVATED",

            "Excellent decision. Your homework has been successfully ignored."

        );

    }
);


// =====================================================
// EMERGENCY PRODUCTIVITY BUTTON
// =====================================================

emergencyBtn.addEventListener(
    "click",
    function() {

        openModal(

            "🚨 PRODUCTIVITY DETECTED",

            "WARNING: You are attempting to become productive. This action could result in completed work."

        );

    }
);


// =====================================================
// MODAL
// =====================================================

let countdownInterval;


function openModal(title, text) {

    modal.classList.remove(
        "hidden"
    );


    modalTitle.textContent =
        title;


    modalText.textContent =
        text;


    let count =
        5;


    countdownDisplay.textContent =
        count;


    clearInterval(
        countdownInterval
    );


    countdownInterval =
        setInterval(function() {

            count--;

            countdownDisplay.textContent =
                count;


            if (count <= 0) {

                clearInterval(
                    countdownInterval
                );

                countdownDisplay.textContent =
                    "✓";

            }

        }, 1000);

}


closeModal.addEventListener(
    "click",
    function() {

        modal.classList.add(
            "hidden"
        );

        clearInterval(
            countdownInterval
        );

    }
);


// =====================================================
// DO NOTHING TIMER
// =====================================================

let timerSeconds =
    300;

let timerInterval =
    null;


function updateTimerDisplay() {

    const minutes =
        Math.floor(
            timerSeconds / 60
        );

    const seconds =
        timerSeconds % 60;


    timerDisplay.textContent =

        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(seconds).padStart(2, "0");

}


startTimer.addEventListener(
    "click",
    function() {

        if (timerInterval !== null) {

            clearInterval(
                timerInterval
            );

            timerInterval =
                null;

            startTimer.textContent =
                "START DOING NOTHING";

            return;

        }


        startTimer.textContent =
            "STOP BEING PRODUCTIVE";


        timerInterval =
            setInterval(function() {

                if (timerSeconds > 0) {

                    timerSeconds--;

                    updateTimerDisplay();

                }

                else {

                    clearInterval(
                        timerInterval
                    );

                    timerInterval =
                        null;

                    startTimer.textContent =
                        "START DOING NOTHING";


                    openModal(

                        "🎉 CONGRATULATIONS",

                        "You successfully did absolutely nothing for five minutes."

                    );

                }

            }, 1000);

    }
);


resetTimer.addEventListener(
    "click",
    function() {

        clearInterval(
            timerInterval
        );

        timerInterval =
            null;

        timerSeconds =
            300;

        updateTimerDisplay();

        startTimer.textContent =
            "START DOING NOTHING";

    }
);


// =====================================================
// USELESS CHATBOT
// =====================================================

const botResponses = [

    "Have you considered simply not finishing it?",

    "The best way to complete your homework is to postpone it until tomorrow.",

    "Interesting question. Unfortunately, I recommend doing nothing.",

    "I analyzed your situation for 0.002 seconds. You should take a break.",

    "Your assignment is important. That's exactly why you should avoid it.",

    "I would help you, but that sounds suspiciously productive.",

    "Try opening your textbook. Then immediately close it for your mental health.",

    "Have you tried pretending the deadline doesn't exist?",

    "According to my advanced calculations, snacks are required.",

    "Your homework appears difficult. I recommend staring at it silently.",

    "I am an AI designed specifically to reduce productivity.",

    "You don't need motivation. You need another unnecessary break."

];


function addChatMessage(
    message,
    type
) {

    const div =
        document.createElement("div");


    div.className =
        type === "user"
            ? "user-message"
            : "bot-message";


    if (type === "user") {

        div.innerHTML =
            `<strong>YOU:</strong><br>${message}`;

    }

    else {

        div.innerHTML =
            `<strong>DOLESS AI:</strong><br>${message}`;

    }


    chatMessages.appendChild(
        div
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


function sendChatMessage() {

    const message =
        chatInput.value.trim();


    if (message === "") {

        return;

    }


    addChatMessage(
        message,
        "user"
    );


    chatInput.value =
        "";


    setTimeout(function() {

        const response =
            botResponses[
                randomNumber(
                    0,
                    botResponses.length - 1
                )
            ];


        addChatMessage(
            response,
            "bot"
        );

    }, 500);

}


sendChat.addEventListener(
    "click",
    sendChatMessage
);


chatInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendChatMessage();

        }

    }
);


// =====================================================
// JUDGE MODE
// =====================================================

judgeModeBtn.addEventListener(
    "click",
    function() {

        taskInput.value =
            "Study for tomorrow's exam";

        deadlineInput.value =
            "";


        taskInput.focus();


        openModal(

            "🎤 JUDGE MODE ACTIVATED",

            "Ask the judge: \"Please give me a homework task.\" Then replace the sample task with their answer and click ANALYZE MY HOMEWORK."

        );

    }
);


// =====================================================
// LOAD SAVED DATA
// =====================================================

window.addEventListener(
    "load",
    function() {

        const savedTask =
            localStorage.getItem(
                "dolessTask"
            );


        const savedScore =
            localStorage.getItem(
                "dolessScore"
            );


        if (savedTask) {

            taskInput.value =
                savedTask;

        }


        if (savedScore) {

            leaderboardScore.textContent =
                savedScore + "%";

        }


        updateTimerDisplay();

    }
);


// =====================================================
// CONSOLE EASTER EGG
// =====================================================

console.log(
    "%cDOLESS AI",
    "font-size:30px;font-weight:bold;color:#ff2b9a;"
);


console.log(
    "%cCongratulations.",
    "font-size:15px;color:#00d9ff;"
);


console.log(
    "You opened the developer console instead of doing homework."
);
// =============================
// ANTI-MOTIVATION GENERATOR
// =============================

const antiMotivationBtn = document.getElementById("antiMotivationBtn");
const antiMotivationText = document.getElementById("antiMotivationText");

const antiMotivations = [
    "You don't need to finish that assignment today. Tomorrow-you is probably stronger. Believe in tomorrow-you. 😌",

    "Your homework has already waited this long. At this point, you're building a relationship with procrastination. ❤️",

    "Why solve today's problems when tomorrow has perfectly good problems waiting for you?",

    "The deadline isn't chasing you. Yet. Take this opportunity to do absolutely nothing. 🏃‍♂️💨",

    "You could start your homework right now... OR you could stare at the ceiling and reconsider your career choices. We recommend Option 2.",

    "Remember: unfinished homework builds character. Probably. Our scientists have not verified this.",

    "Take a break. You haven't earned it, but that's exactly why you should take it. 🛋️",

    "Your textbook isn't going anywhere. Unfortunately, neither is your assignment.",

    "Imagine finishing your homework early. Sounds suspiciously like productivity. Abort mission immediately. 🚨",

    "You have approximately 847 things you could do instead of homework. Choose wisely. Or don't.",

    "Homework is temporary. Procrastination is an art form. Become an artist. 🎨",

    "Your future self can deal with this. Future-you has absolutely no say in this decision.",

    "Studies show that students who procrastinate are... probably still procrastinating. Keep going. 📊",

    "Don't let homework control your life. Let YouTube control it instead.",

    "You were born to achieve great things. Unfortunately, completing this assignment is not one of them."
];

function generateAntiMotivation() {

    const randomIndex = Math.floor(
        Math.random() * antiMotivations.length
    );

    antiMotivationText.style.opacity = "0";

    setTimeout(() => {

        antiMotivationText.textContent =
            antiMotivations[randomIndex];

        antiMotivationText.style.opacity = "1";

    }, 200);

}

if (antiMotivationBtn) {
    antiMotivationBtn.addEventListener(
        "click",
        generateAntiMotivation
    );
}