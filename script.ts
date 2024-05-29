const API_LINK: string = "https://api.escuelajs.co/api/v1/users";
const $wrap: HTMLElement | null = document.querySelector(".wrap");
const $single = document.querySelector(".single");

async function fetchData(api : string) {
    let data = await fetch(api)
    data 
    .json()
    .then(res => createCard(res))
    .catch(err => console.log(err))
}
fetchData(API_LINK);

interface User {
    id: number;
    name: string;
    avatar: string;
    email: string;
}

function createCard(data: User[]): void {
    if ($wrap) {
        data.forEach(({ id, name, avatar, email }) => {
            const card = document.createElement("div");
            card.classList.add("wrapper__card");
            card.innerHTML = `
                <div class="wrapper__card__top">
                    <img src="${avatar}" alt=" notfound notfou
                    notfound notfound notfound notfound notfound
                    notfound notfound notfound
                    notfound notfound ">
                </div>
                <div class="wrapper__card__bottom">
                    <p class="rating">${email}</p>
                    <h3>${name}</h3>
                </div>
            `;
            card.addEventListener("click", () => createSingle({ id, name, avatar, email }));
            
            $wrap.appendChild(card);
        });
    }
}

function createSingle(user: User): void {
    if ($single) {
        $single.innerHTML = ''; 
        const userDetails = document.createElement("div");
        userDetails.classList.add("single__user");
        userDetails.innerHTML = `
            <div class="single__user__top">
                <img src="${user.avatar}" alt="notfound notfou
                    notfound notfound notfound notfound notfound
                    notfound notfound notfound
                    notfound notfound">
            </div>
            <div class="single__user__bottom">
                <p class="email">${user.email}</p>

                <h3>${user.name}</h3>
            </div>
        `;
        $single.appendChild(userDetails);
    } 
}