/* ==================================================
   SECTION 1: CUSTOM MESSAGES

   Edit this list whenever you want to change
   the messages displayed on the website.
   ================================================== */

const messages = [

"You are doing better than you think",

    "I'm so proud of you",

    "You deserve a little break",

    "You got this babyyy",

    "You are more capable than you realize",

    "You are my favorite person in the whole world",

    "I'm always rooting for you",

    "You make my world a little brighter",

    "It's okay to take things one step at a time",

    "I hope today is gentle with you"

   "도마가 보고싶데요"

"째니 물"

"째니 발"

"째니 얼음물"


"I believe in you and your ability to figure things out"
"You don’t have to be perfect to be proud of yourself"
"Your effort matters, even when it feels small"
"You are worthy of love and patience"
"Keep going, you’re closer than you know"
"I’m proud of how hard you’re trying"
"Take a breath, you’ve got this"
"You deserve kindness, especially from yourself"
"You are not alone, I’m here for you"
"One step at a time is still progress"
"Your heart is strong and your future is bright"
"You can handle whatever comes next"
"Trust yourself, you’ve made it through before"
"I see your strength, even on tough days"
"Let today be gentle with you"
"You are making a difference, even if it’s not obvious yet"
"Your growth is real and it counts"
"I’m cheering for you"
"Your best is enough, right now"
"You are doing meaningful work, even quietly"
"I love seeing you try"
"You bring light wherever you go"
"Give yourself credit for surviving and continuing"
"You can rest and still be strong"
"I’m grateful for you"
"Your dreams are worth protecting"
"Be proud of the progress you’ve made"
"Slow is smooth, and smooth is winning"
"I believe you will find your way"
"You deserve good things"
"Your future self is rooting for you"
"You’re allowed to have good days and messy days"
"Keep your head up, I’m with you"
"You have more resources than you think"
"Even hard moments pass"
"Your confidence will grow as you go"
"You’re allowed to change your mind and try again"
"I’m proud of you for showing up"
"Let your kindness be your compass"
"You are valued, today and always"
"You’re safe to take things one step at a time"
"You’re allowed to feel, and still move forward"
"I’m proud of your heart and your courage"
"Today will get lighter"
"You can do this, and I’m here to remind you"
"I adore you more than words can hold"
"My favorite place is wherever you are"
"I’m so lucky to love you"
"You make my heart feel at home"
"I fall for you more every time I see you"
"Every day with you feels like a gift"
"I want to choose you, again and again"
"Your smile makes my world softer"
"I’m thinking of you, and it’s the sweetest distraction"
"I can’t wait to be close to you again"
"I love the way you make everything feel better"
"You mean everything to me"
"Your love calms me and strengthens me"
"I’m yours, in the best way"
"Let me hold you in all the moments you need"
"Being with you is my kind of happiness"
"You are my favorite thought"
"I want to grow old with you, in whatever way life allows"
"Your presence is my comfort"
"I love you, and I’m not going anywhere"
"You make my heart race and my mind rest"
"I’m proud of you, and I’m also proud to be yours"
"I feel lucky that we found each other"
];


/* ==================================================
   SECTION 2: FIND PAGE ELEMENTS
   ================================================== */

const messageElement =
    document.getElementById("message");

const squishy =
    document.getElementById("squishy");

const instruction =
    document.getElementById("instruction");

const heartButton =
    document.getElementById("heartButton");

const messageOverlay =
    document.getElementById("messageOverlay");

const closeButton =
    document.getElementById("closeButton");


/* ==================================================
   SECTION 3: INITIAL RANDOM MESSAGE
   ================================================== */

function getRandomMessage() {

    const index =
        Math.floor(
            Math.random() *
            messages.length
        );

    return messages[index];

}


messageElement.textContent =
    getRandomMessage();


/* ==================================================
   SECTION 4: PASTEL COLOR PALETTE

   PINK → PURPLE → BLUE → YELLOW → GREEN → PINK
   ================================================== */

const pastelColors = [

    {
        background: "#fff1f5",
        glow: "#ffe3eb",
        light: "#fff8fa",
        main: "#f5c6d5",
        dark: "#e5a6b9"
    },

    {
        background: "#f5f0fb",
        glow: "#e9def7",
        light: "#fbf9ff",
        main: "#d7c6ec",
        dark: "#bda5d8"
    },

    {
        background: "#edf6fc",
        glow: "#dceefa",
        light: "#f8fcff",
        main: "#c4dced",
        dark: "#a3c7df"
    },

    {
        background: "#fff9e9",
        glow: "#fff1c9",
        light: "#fffdf6",
        main: "#f3dfaa",
        dark: "#ddc57f"
    },

    {
        background: "#eef9f1",
        glow: "#dcefe1",
        light: "#f9fff9",
        main: "#c5e2cb",
        dark: "#a5caaa"
    }

];


/* ==================================================
   SECTION 5: COLOR CONVERSION
   ================================================== */

function hexToRgb(hex) {

    const clean =
        hex.replace("#", "");

    return {

        r:
            parseInt(
                clean.substring(0, 2),
                16
            ),

        g:
            parseInt(
                clean.substring(2, 4),
                16
            ),

        b:
            parseInt(
                clean.substring(4, 6),
                16
            )

    };

}


function rgbToHex(r, g, b) {

    return "#" +

        [r, g, b]
            .map(
                value =>
                    Math
                        .round(value)
                        .toString(16)
                        .padStart(2, "0")
            )
            .join("");

}


function interpolateColor(
    color1,
    color2,
    amount
) {

    const first =
        hexToRgb(color1);

    const second =
        hexToRgb(color2);

    const r =
        first.r +
        (
            second.r -
            first.r
        ) *
        amount;

    const g =
        first.g +
        (
            second.g -
            first.g
        ) *
        amount;

    const b =
        first.b +
        (
            second.b -
            first.b
        ) *
        amount;

    return rgbToHex(
        r,
        g,
        b
    );

}


/* ==================================================
   SECTION 6: COLOR STATE
   ================================================== */

let colorProgress =
    0;

let targetColorProgress =
    0;


/* ==================================================
   SECTION 7: APPLY COLORS
   ================================================== */

function updateColors(progress) {

    const count =
        pastelColors.length;

    const normalized =
        (
            progress % count +
            count
        ) % count;

    const firstIndex =
        Math.floor(
            normalized
        );

    const secondIndex =
        (
            firstIndex + 1
        ) % count;

    const blend =
        normalized -
        firstIndex;

    const first =
        pastelColors[firstIndex];

    const second =
        pastelColors[secondIndex];


    const background =
        interpolateColor(
            first.background,
            second.background,
            blend
        );


    const glow =
        interpolateColor(
            first.glow,
            second.glow,
            blend
        );


    const light =
        interpolateColor(
            first.light,
            second.light,
            blend
        );


    const main =
        interpolateColor(
            first.main,
            second.main,
            blend
        );


    const dark =
        interpolateColor(
            first.dark,
            second.dark,
            blend
        );


    const root =
        document.documentElement;


    root.style.setProperty(
        "--background-color",
        background
    );


    root.style.setProperty(
        "--background-glow",
        glow
    );


    root.style.setProperty(
        "--squishy-light",
        light
    );


    root.style.setProperty(
        "--squishy-main",
        main
    );


    root.style.setProperty(
        "--squishy-dark",
        dark
    );


    const rgb =
        hexToRgb(main);


    root.style.setProperty(
        "--squishy-glow",
        `rgba(
            ${rgb.r},
            ${rgb.g},
            ${rgb.b},
            0.28
        )`
    );

}


/* ==================================================
   SECTION 8: COLOR ANIMATION

   The color follows the finger while the squishy
   is being pressed/moved.

   Releasing the squishy does NOT cause another
   color shift.
   ================================================== */

function animateColors() {

    colorProgress +=
        (
            targetColorProgress -
            colorProgress
        ) *
        0.12;


    updateColors(
        colorProgress
    );


    requestAnimationFrame(
        animateColors
    );

}


animateColors();


/* ==================================================
   SECTION 9: SQUISHY PHYSICS
   ================================================== */

let currentX = 0;
let currentY = 0;

let targetX = 0;
let targetY = 0;

let currentScaleX = 1;
let currentScaleY = 1;

let targetScaleX = 1;
let targetScaleY = 1;

let rotation = 0;
let targetRotation = 0;

let touching = false;

let lastPointerX = null;
let lastPointerY = null;


/* ==================================================
   SECTION 10: SQUISHY ANIMATION
   ================================================== */

function animateSquishy() {

    currentX +=
        (
            targetX -
            currentX
        ) * 0.16;


    currentY +=
        (
            targetY -
            currentY
        ) * 0.16;


    currentScaleX +=
        (
            targetScaleX -
            currentScaleX
        ) * 0.13;


    currentScaleY +=
        (
            targetScaleY -
            currentScaleY
        ) * 0.13;


    rotation +=
        (
            targetRotation -
            rotation
        ) * 0.13;


    squishy.style.transform = `

        translate3d(
            ${currentX}px,
            ${currentY}px,
            0
        )

        scale(
            ${currentScaleX},
            ${currentScaleY}
        )

        rotate(
            ${rotation}deg
        )

    `;


    requestAnimationFrame(
        animateSquishy
    );

}


animateSquishy();


/* ==================================================
   SECTION 11: PRESS DOWN
   ================================================== */

squishy.addEventListener(
    "pointerdown",
    function(event) {

        touching =
            true;


        event.preventDefault();


        squishy.setPointerCapture(
            event.pointerId
        );


        lastPointerX =
            event.clientX;

        lastPointerY =
            event.clientY;


        /*
           A press itself immediately begins the
           color movement.
        */

        targetColorProgress +=
            0.025;


        instruction.textContent =
            "keep playing ♡";

    }
);


/* ==================================================
   SECTION 12: MOVE SQUISHY
   ================================================== */

squishy.addEventListener(
    "pointermove",
    function(event) {

        if (!touching) {
            return;
        }


        const movementX =
            event.clientX -
            lastPointerX;


        const movementY =
            event.clientY -
            lastPointerY;


        const movementDistance =
            Math.sqrt(
                movementX * movementX +
                movementY * movementY
            );


        lastPointerX =
            event.clientX;

        lastPointerY =
            event.clientY;


        /*
           Color changes continuously while
           the finger moves.
        */

        const colorChange =
            0.012 +
            movementDistance *
            0.0025;


        targetColorProgress +=
            colorChange;


        /*
           Keep the color transition close enough
           to the finger that it visibly responds
           immediately.
        */

        const maximumLead =
            colorProgress +
            0.22;


        if (
            targetColorProgress >
            maximumLead
        ) {

            targetColorProgress =
                maximumLead;

        }


        /* ==================================================
           SECTION 13: POSITION
           ================================================== */

        const rect =
            squishy.getBoundingClientRect();


        const centerX =
            rect.left +
            rect.width / 2;


        const centerY =
            rect.top +
            rect.height / 2;


        let distanceX =
            event.clientX -
            centerX;


        let distanceY =
            event.clientY -
            centerY;


        const maximumDistance =
            65;


        distanceX =
            Math.max(
                -maximumDistance,
                Math.min(
                    maximumDistance,
                    distanceX
                )
            );


        distanceY =
            Math.max(
                -maximumDistance,
                Math.min(
                    maximumDistance,
                    distanceY
                )
            );


        targetX =
            distanceX *
            0.28;


        targetY =
            distanceY *
            0.28;


        /* ==================================================
           SECTION 14: SQUISH / STRETCH
           ================================================== */

        const horizontalStretch =
            Math.abs(distanceX) /
            maximumDistance;


        const verticalStretch =
            Math.abs(distanceY) /
            maximumDistance;


        targetScaleX =
            1 +
            horizontalStretch * 0.18 -
            verticalStretch * 0.08;


        targetScaleY =
            1 +
            verticalStretch * 0.18 -
            horizontalStretch * 0.08;


        targetRotation =
            distanceX *
            0.08;

    }
);


/* ==================================================
   SECTION 15: RELEASE

   IMPORTANT:
   No color change happens here.
   ================================================== */

function releaseSquishy() {

    touching =
        false;


    targetX =
        0;

    targetY =
        0;

    targetScaleX =
        1;

    targetScaleY =
        1;

    targetRotation =
        0;


    instruction.textContent =
        "press & move me";

}


squishy.addEventListener(
    "pointerup",
    releaseSquishy
);


squishy.addEventListener(
    "pointercancel",
    releaseSquishy
);


squishy.addEventListener(
    "lostpointercapture",
    function() {

        if (touching) {

            releaseSquishy();

        }

    }
);


/* ==================================================
   SECTION 16: CHANGE ENCOURAGEMENT MESSAGE
   ================================================== */

squishy.addEventListener(
    "click",
    function() {

        const newMessage =
            getRandomMessage();


        messageElement.style.opacity =
            "0";


        setTimeout(
            function() {

                messageElement.textContent =
                    newMessage;

                messageElement.style.opacity =
                    "1";

            },
            180
        );

    }
);


/* ==================================================
   SECTION 17: HEART BUTTON
   ================================================== */

heartButton.addEventListener(
    "click",
    function() {

        messageOverlay.classList.add(
            "open"
        );


        messageOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

    }
);


/* ==================================================
   SECTION 18: CLOSE MESSAGE
   ================================================== */

function closeMessage() {

    messageOverlay.classList.remove(
        "open"
    );


    messageOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

}


closeButton.addEventListener(
    "click",
    closeMessage
);


/* ==================================================
   SECTION 19: TAP OUTSIDE MESSAGE
   ================================================== */

messageOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            messageOverlay
        ) {

            closeMessage();

        }

    }
);


/* ==================================================
   SECTION 20: ESCAPE KEY
   ================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeMessage();

        }

    }
);


/* ==================================================
   SECTION 21: INITIAL COLORS
   ================================================== */

updateColors(
    colorProgress
);
