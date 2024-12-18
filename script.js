document.addEventListener('DOMContentLoaded', () => {
    const switchCard = (current, next) => {
        document.getElementById(current).classList.remove('active');
        document.getElementById(next).classList.add('active');
    };

    const avatarGrid = document.querySelectorAll('.avatar');
    let selectedAvatar = null;

    document.getElementById('generate-name-btn').addEventListener('click', () => {
        const nickname = document.getElementById('name-input').value.trim();
        if (!nickname) {
            alert("Please enter a NAME!");
            return;
        }

        const pirateName = `Captain ${nickname}`;
        document.getElementById('pirate-name-preview').textContent = pirateName;
        document.querySelector('.next-btn[data-next="2"]').style.display = 'inline-block';
    });

    avatarGrid.forEach(avatar => {
        avatar.addEventListener('click', () => {
            avatarGrid.forEach(img => img.style.border = 'none');
            avatar.style.border = '4px solid #3498db';
            selectedAvatar = avatar.getAttribute('data-avatar');
            document.querySelector('.next-btn[data-next="3"]').style.display = 'inline-block';
        });
    });

    document.getElementById('generate-story-btn').addEventListener('click', () => {
        const pirateStories = [
            "Battled pirates, but built my empire with lines of code",
            "Lost my ship, but gained my HTML skills",
            "Battled pirates, but built my empire with lines of code",
            "Fought pirates, but HTML was my compass to success",
            "Lost my treasure, coded my way to freedom, sailed into C++",
            "Sank my ship, but Coding became my true treasure chest",
            "Battled pirates, but built my empire with lines of code",
            "Raided villages, learned Games Development, conquered the world with code",
            "Sailed the high seas, lost my ship, found Java",
            "Pirate by day, coder by night, FreeCodeCamp was my compass",
            "Fought a giant squid, but mastered web design instead",
            "Stole treasure, but my love for coding was my fortune",
            "Fought off enemies, but my code was the real weapon",
            "Cursed by gold, but found peace in the art of code",
            "Battled pirates, but built my empire with lines of code"
        ];

        const story = pirateStories[Math.floor(Math.random() * pirateStories.length)];
        document.getElementById('pirate-story').textContent = story;
        document.querySelector('.next-btn[data-next="4"]').style.display = 'inline-block';
    });

    document.querySelector('.next-btn[data-next="2"]').addEventListener('click', () => switchCard('card-1', 'card-2'));
    document.querySelector('.next-btn[data-next="3"]').addEventListener('click', () => switchCard('card-2', 'card-3'));
    document.querySelector('.next-btn[data-next="4"]').addEventListener('click', () => {
        switchCard('card-3', 'card-4');
        document.getElementById('final-pirate-name').textContent = document.getElementById('pirate-name-preview').textContent;
        document.getElementById('final-avatar').src = `pirate${selectedAvatar}.png`;
        document.getElementById('final-pirate-story').textContent = document.getElementById('pirate-story').textContent;
        document.getElementById('download-btn').style.display = 'inline-block';
    });

    document.getElementById('restart-btn').addEventListener('click', () => location.reload());

    document.getElementById('download-btn').addEventListener('click', () => {
        const finalCard = document.getElementById('card-4'); 

        html2canvas(finalCard).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'pirate-card.png';
            link.click();
        });
    });
});
