const post = {
    title: "TechBowl youtube Channle",
    body: "Please Subscribe this one",
    keywords: ["ES6", "string", "template"]
};

const { title, body, keywords } = post;
const template = `<article>
<h1>${title}</h1>
<section>
    <p>${body}</p>
</section>
</article>
<footer>
<ul>
${keywords.map((keyword) => `<li>${keyword}</li>`).join("\n")} 

</ul>
</footer>`;
document.body.innerHTML = template;


function getAmt() {
    return 500
}

function getInfo(name, amount = getAmt(), color = "Black") {
    {
        console.log(name, amount, color);

    }

}
getInfo(`graps`);
getInfo(`graps`, 100);
getInfo(`graps`, 100, "Green");;
// <ul>
//     ${keywords.map(
//         (keyword) => {
//             `<li> ${keyword} </li>`.join(`\n`)
//         }
//     )}
// </ul>

