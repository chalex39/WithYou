/* ==================================================
   SECTION 1: CUSTOM MESSAGES

   Add, remove, or replace messages here.

   The website randomly chooses one whenever
   a new message is needed.
   ================================================== */

const messages = [

    "You are doing better than you think.",

    "I'm proud of you.",

    "You deserve a little break.",

    "Take a deep breath. You've got this.",

    "You are more capable than you realize.",

    "You are enough.",

    "Someone is always rooting for you.",

    "You make the world a little brighter.",

    "It's okay to take things one step at a time.",

    "I hope today is gentle with you.",


    /* ==================================================
       ADDITIONAL AFFECTIONATE & ENCOURAGING MESSAGES
       ================================================== */

    "You are doing such a good job.",

    "I'm always cheering for you.",

    "You don't have to have everything figured out.",

    "You deserve kindness, especially from yourself.",

    "You're allowed to rest.",

    "You're allowed to take your time.",

    "I'm so happy you're here.",

    "You make things better just by being you.",

    "You are more loved than you know.",

    "You deserve all the good things coming your way.",

    "You can do this. I believe in you.",

    "One little step at a time, okay?",

    "You're doing enough. You really are.",

    "I'm rooting for you every step of the way.",

    "You deserve a warm hug today.",

    "Please remember to be gentle with yourself.",

    "You have made it through difficult days before.",

    "This moment will pass. Stay with it.",

    "You are stronger than you give yourself credit for.",

    "You have so many good things ahead of you.",

    "It's okay if today isn't perfect.",

    "You don't need to be perfect to be wonderful.",

    "You deserve to feel proud of yourself.",

    "I hope you know how special you are.",

    "You bring something to this world that nobody else can.",

    "You're doing great. Keep going.",

    "I'm sending you a little bit of love.",

    "Take care of yourself for me.",

    "You deserve some peace today.",

    "You can slow down. Nothing is chasing you.",

    "You are worth taking care of.",

    "You're allowed to have bad days.",

    "Even when you don't feel strong, you're still moving forward.",

    "I'm proud of how far you've come.",

    "You don't have to carry everything at once.",

    "Put your shoulders down. Take a breath.",

    "You've got this my baby.",

    "I hope something makes you smile today.",

    "You deserve to feel safe and cared for.",

    "You're doing better than you realize.",

    "You are never a burden for needing a little care.",

    "There is no need to rush.",

    "I'm glad you exist.",

    "Keep going at your own pace.",

    "You are precious to the people who care about you.",

    "I believe in you, even on the days you don't.",

    "You can take a little break. I'll be right here.",

    "You deserve a peaceful moment.",


    /* ==================================================
       YOUR PERSONAL MESSAGES
       ================================================== */

    "째니 얼음물",

    "째니 발",

   "째니 얼음물",

    "째니 발",

    "Doma and I both got your back",

   "바보 똥쟁이",

"엉덩이 그만 만져요",

"째니 보고싶어요",

"사랑해요 애기",

"누나 언제 돌아와요",

   "째니 얼음물",

    "째니 발",

   "째니 얼음물",

    "째니 발",

    "Doma and I both got your back",

   "바보 똥쟁이",

"엉덩이 그만 만져요",

"째니 보고싶어요",

"사랑해요 애기",

"누나 언제 돌아와요",

"도마가 보고싶데요",

       "째니 얼음물",

    "째니 발",

   "째니 얼음물",

    "째니 발",

    "Doma and I both got your back",

   "바보 똥쟁이",

"엉덩이 그만 만져요",

"째니 보고싶어요",

"사랑해요 애기",

"누나 언제 돌아와요",

   "째니 얼음물",

    "째니 발",

   "째니 얼음물",

    "째니 발",

    "Doma and I both got your back",

   "바보 똥쟁이",

"엉덩이 그만 만져요",

"째니 보고싶어요",

"사랑해요 애기",

"누나 언제 돌아와요",

"도마가 보고싶데요",
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
            "keep squishing";

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
