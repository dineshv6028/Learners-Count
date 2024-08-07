$(document).ready(function () {
    animateValue("#learners", 0, 3027862, 3000);
    animateValue("#mentors", 0, 194, 3000);
    animateValue("#codeSubmission", 0, 36577214, 3000);
    animateValue("#videos", 0, 1673, 3000);
    animatePercentage("#completionRate", 0, 72, 3000, "#circle1");
    animatePercentage("#recollectionRate", 0, 78, 3000, "#circle2");
});

function animateValue(id, start, end, duration) {
    const obj = $(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.text(Math.floor(progress * (end - start) + start).toLocaleString());
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

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
