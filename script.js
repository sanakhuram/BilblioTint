document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const createRandomPosition = () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 200)); // Subtract 200 to prevent overflow
        const y = Math.floor(Math.random() * (window.innerHeight - 100)); // Subtract 100 to prevent overflow
        return { x, y };
    };
    
    for (let i = 0; i < 50; i++) {
        const eyeContainer = document.createElement("div");
        eyeContainer.classList.add("eye-container");
        eyeContainer.innerHTML = `
            <div class="eye">
             <div class="upper-eyelid"></div>
                <div class="iris">
                    <div class="pupil"></div>
                    <div class="reflection"></div>
                      
                </div>
                <div class="lower-eyelid"></div>
            </div>
        `;
        
        const { x, y } = createRandomPosition();
        eyeContainer.style.left = `${x}px`;
        eyeContainer.style.top = `${y}px`;

        body.appendChild(eyeContainer);

        //drag function//
        
        eyeContainer.addEventListener("mousedown", onMouseDown);

        function onMouseDown(e) {
            const rect = eyeContainer.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            function onMouseMove(e) {
                eyeContainer.style.left = `${e.clientX - offsetX}px`;
                eyeContainer.style.top = `${e.clientY - offsetY}px`;
            }

            function onMouseUp() {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            }

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        }
    }
});
