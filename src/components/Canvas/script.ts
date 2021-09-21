const DrawRectangle = () => {
    let element: HTMLDivElement | null = null;
    const canvas: HTMLCanvasElement = document.querySelector(".canvas")!;
    console.log(canvas);
    const mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0,
    };
    const setMousePosition = (e: MouseEvent): void => {
        mouse.x = e.pageX + window.pageXOffset;
        mouse.y = e.pageY + window.pageYOffset;
    };

    canvas.addEventListener("mousemove", (e: MouseEvent): void => {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + "px";
            element.style.height = Math.abs(mouse.y - mouse.startY) + "px";
            element.style.left = mouse.x - mouse.startX < 0 ? mouse.x + "px" : mouse.startX + "px";
            element.style.top = mouse.y - mouse.startY < 0 ? mouse.y + "px" : mouse.startY + "px";
        }
    });

    canvas.addEventListener("click", (e: MouseEvent): void => {
        if (element !== null) element = null;
        else {
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;

            element = document.createElement("div");
            element.classList.add("rectangle");
            element.style.left = mouse.x + "px";
            element.style.top = mouse.y + "px";
            canvas.appendChild(element);
        }
    });
};
export { DrawRectangle };
