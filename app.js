document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const textAnswer = document.querySelector(`.text-answer`);

    const greenBtn = document.querySelector(`#btn_green`);
    const blueBtn = document.querySelector(`#btn_blue`);
    const purpleBtn = document.querySelector(`#btn_purple`);
    const redBtn = document.querySelector(`#btn_red`);
    const yellowBtn = document.querySelector(`#btn_yellow`);
    const randomBtn = document.querySelector(`#btn_random`);
    const hexBtn = document.querySelector(`#btn_hex`);
    const rgbBtn = document.querySelector(`#btn_rgb`);

    const colorsArray = [
        `Tomato`,
        `Green`,
        `Yellow`,
        `Red`,
        `Deepskyblue`,
        `Crimson`,
        `Darkslateblue`,
        `Blue`,
        `Darkblue`,
        `Orangered`,
        `Yellowgreen`,
    ];
    const itemsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];
    const rgbItems = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
        94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
        113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
        131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166,
        167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
        185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
        203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
        221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238,
        239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255,
    ];
    const rgbItemsLength = rgbItems.length;
    const colorsArrayLength = colorsArray.length;
    const itemsHexLength = itemsHex.length;
    let currentBackground = `rgb(59, 59, 129)`;
    function changeBodyBackground(clr) {
        body.style.background = `${clr}`;
        textAnswer.textContent = `${clr}`;
    }

    function changeToGreen() {
        changeBodyBackground('Darkgreen');
    }

    function changeToBlue() {
        changeBodyBackground('Deepskyblue');
    }

    function changeToRed() {
        changeBodyBackground('Crimson');
    }

    function changeToPurple() {
        changeBodyBackground('Darkslateblue');
    }
    function changeToYellow() {
        changeBodyBackground('Yellow');
    }

    function randomColor() {
        const newColors = JSON.parse(JSON.stringify([...colorsArray]));
        const newColorsLength = newColors.length;
        console.log(newColorsLength);

        let random = Math.floor(newColorsLength * Math.random());
        let randomColor = newColors[random];

        changeBodyBackground(randomColor);
        console.log(colorsArray);
    }
    function randomHex() {
        let hexColor = `#`;
        let finalRandom;
        let random3 = Math.floor(itemsHexLength * Math.random());
        for (count = 0; count < 6; count++) {
            let random2 = Math.floor(itemsHexLength * Math.random());
            let selectedItem = itemsHex[random2];
            hexColor += selectedItem;
            changeBodyBackground(hexColor);
            finalRandom = random2;
        }

        colorsArray.splice(random3, 0, hexColor);

        console.log(colorsArray);
    }

    function randomRGB() {
        function randomNumber() {
            let randomNumber = Math.floor(Math.random() * rgbItemsLength);
            let serchRGBrandomItem = rgbItems[randomNumber];
            return serchRGBrandomItem;
        }
        const newRGBColors = JSON.parse(JSON.stringify([...colorsArray]));
        console.log(newRGBColors);

        let firstRandom = randomNumber();
        let secondRandom = randomNumber();
        let thirthRandom = randomNumber();
        let rgbColor = `rgb(${firstRandom},${secondRandom},${thirthRandom})`;
        changeBodyBackground(rgbColor);

        let random4 = Math.floor(colorsArrayLength * Math.random());
        console.log(random4);
        colorsArray.splice(random4, 0, rgbColor);
        console.log(colorsArray);
        return rgbColor;
    }
    randomRGB();
    greenBtn.addEventListener(`click`, changeToGreen);

    blueBtn.addEventListener(`click`, changeToBlue);

    purpleBtn.addEventListener(`click`, changeToPurple);

    redBtn.addEventListener(`click`, changeToRed);

    yellowBtn.addEventListener(`click`, changeToYellow);

    randomBtn.addEventListener(`click`, randomColor);

    hexBtn.addEventListener(`click`, randomHex);

    rgbBtn.addEventListener(`click`, randomRGB);
});
