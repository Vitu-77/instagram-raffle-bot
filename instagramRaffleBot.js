let raffleURL = 'https://www.instagram.com/p/B7Q8t0xpaG7/';
let followersUsernames = [];
let followers = [];
let followersCount;

const getFollowers = async () => {
    const links = document.querySelectorAll('a.kIKUG');
    const profileLink = links[links.length - 1];

    profileLink.click();

    await setTimeout(() => {
        const followersLink = document.querySelectorAll('a.-nal3')[0];
        followersLink.click();
    }, 2000);

    await setTimeout(() => {
        new Promise((resolve, reject) => {

            const scrollDiv = document.querySelector('.isgrP');

            followersCount = Number(document.querySelectorAll('span.g47SY')[1].innerHTML);
            followers = document.querySelectorAll('a.FPmhX');

            setInterval(() => {
                if (followers.length < followersCount) {
                    console.log('Processing...');
                    followers = document.querySelectorAll('a.FPmhX');
                    scrollDiv.scrollTop += 10000000000000;
                } else {
                    resolve('array filled');
                }
            }, 1);

        }).then(() => {
            for (let follower of followers) {
                followersUsernames.push(follower.innerHTML);
            }
        }).then(() => {
            localStorage.setItem('followers', followersUsernames.join('$'));
        }).then(() => {
            console.log('Redirecting...')
            window.location.href = raffleURL;
        })
    }, 3000);
}

getFollowers();