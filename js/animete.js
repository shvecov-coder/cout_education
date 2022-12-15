const INCREASE_NUMBER_ANIMATION_SPEED = 150;
const increaseNumberAnimationStep = (item, element, endNumber) => {
    if (item <= endNumber) {
        element.innerText = item;
        item++;
    };
    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, item, element, endNumber);
};

const initIncreaseNumberAnimation = () => {
    const htmlElement = document.querySelector(`[data-order='1']`);
    increaseNumberAnimationStep(0, htmlElement, 15);
    const htmlElement2 = document.querySelector(`[data-order='2']`);
    increaseNumberAnimationStep(0, htmlElement2, 10);
    const htmlElement3 = document.querySelector(`[data-order='3']`);
    increaseNumberAnimationStep(0, htmlElement3, 17);
};
initIncreaseNumberAnimation();
