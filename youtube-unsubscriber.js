var i = 0;
const els = document.getElementsByClassName("style-scope ytd-expanded-shelf-contents-renderer")

function myTimer () {
    if (i < els.length) {
        const t = document.querySelector(`#grid-container > ytd-channel-renderer:nth-child(${i+1})`)

        setTimeout(function () {
            var notificationBtn = t.querySelector("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click()
        }, 200);

        setTimeout(function () {
            var serviceBtn = document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4)").click()
        }, 400);

        setTimeout(function () {
            var yesBtn = document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click()
        }, 600);
    console.log(i + " unsubscribed");
    }

    i++;
}

var myVar = setInterval(myTimer, 1000);
