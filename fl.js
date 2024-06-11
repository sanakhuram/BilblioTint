const colors = [
    ['#ff69b4'],['green']
];

function createFlower(colors) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    
    for (let i = 0; i < 16; i++) {  // 16 petals to resemble the flower in the image
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.setProperty('--angle', `${i * 22.5}deg`);
        petal.style.backgroundColor = colors[i % colors.length];
        flower.appendChild(petal);
    }

    const center = document.createElement('div');
    center.className = 'center';
    flower.appendChild(center);

    flower.addEventListener('click', () => {
        flower.classList.add('open');
    });

   

    document.body.appendChild(flower);
}

for (let i = 0; i < 20; i++) {  // Create 20 flowers
    createFlower(colors[i % colors.length]);
}
