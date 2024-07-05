document.getElementById('seeAllProject').addEventListener('click', function () {
    var hiddenCards = document.querySelectorAll('.project-hidden-card');
    var btn = document.getElementById('seeAllProject');

    hiddenCards.forEach(function (card) {
        if (btn.innerText === "See All") {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    if (btn.innerText === "See All") {
        btn.innerText = "See Less";
    } else {
        btn.innerText = "See All";
    }
});

document.getElementById('seeAllCertif').addEventListener('click', function () {
    var hiddenCards = document.querySelectorAll('.certif-hidden-card');
    var btn = document.getElementById('seeAllCertif');

    hiddenCards.forEach(function (card) {
        if (btn.innerText === "See All") {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    if (btn.innerText === "See All") {
        btn.innerText = "See Less";
    } else {
        btn.innerText = "See All";
    }
});