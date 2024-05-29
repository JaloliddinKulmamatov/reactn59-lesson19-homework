"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_LINK = "https://api.escuelajs.co/api/v1/users";
const $wrap = document.querySelector(".wrap");
const $single = document.querySelector(".single");
function fetchData(api) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(api);
        data
            .json()
            .then(res => createCard(res))
            .catch(err => console.log(err));
    });
}
fetchData(API_LINK);
function createCard(data) {
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
function createSingle(user) {
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
