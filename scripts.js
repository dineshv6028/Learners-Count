document.addEventListener("DOMContentLoaded", function() {
    function animateCount(elementId, targetValue, duration) {
        let startValue = 0;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let current = Math.min(startValue + (progress / duration) * targetValue, targetValue);
            document.getElementById(elementId).innerText = Math.floor(current);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    animateCount("learners-count", 1500, 2000);
    animateCount("courses-count", 50, 2000);
    animateCount("mentors-count", 20, 2000);
});






$(document).ready(function () {
    animatePercentage("#completionRate", 0, 72, 2000, "#circle1");
    animatePercentage("#recollectionRate", 0, 78, 2000, "#circle2");
});

function animatePercentage(id, start, end, duration, circleId) {
    const obj = $(id);
    const circle = $(circleId);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.text(value + "%");
        const percentage = (value / 100) * 100;
        circle.css("stroke-dasharray", `${percentage}, 100`);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
