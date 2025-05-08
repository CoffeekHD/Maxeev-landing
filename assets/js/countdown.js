document.addEventListener("DOMContentLoaded", function() {

    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 6);
    deadline.setHours(deadline.getHours() + 14);
    deadline.setMinutes(deadline.getMinutes() + 38);

    const countdownElements = document.querySelectorAll('.countdown__element');

    function formatNumber(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }

    function updateCountdown() {
        const now = new Date();
        const diff = deadline - now;

        if (diff <= 0) {

            countdownElements.forEach((element) => {
                const valueElement = element.querySelector('.countdown__value');
                valueElement.innerHTML = `
                    <p>0</p>
                    <p>0</p>
                `;
            });
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        const values = [days, hours, minutes];

        countdownElements.forEach((element, index) => {
            const valueElement = element.querySelector('.countdown__value');
            const number = formatNumber(values[index]);

            valueElement.innerHTML = `
                <p>${number[0]}</p>
                <p>${number[1]}</p>
            `;
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});