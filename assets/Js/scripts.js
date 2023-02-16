//Cursor ====================================================================================================================
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("a, button")

window.addEventListener("mousemove", (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.forEach(el => {
        el.style.left = `${x-10}px`;
        el.style.top = `${y-10}px`;

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover");
            })
        })
    })
})

//Animação do cursor entrando no botão ========================================================================================
const btn = document.querySelector(".btn");

Array.from(document.querySelectorAll('.btn')).forEach(element => {
    element.onmousemove = function(e) {
        const x = e.pageX - element.offsetLeft;
        const y = e.pageY - element.offsetTop;
    
        element.style.setProperty("--x", x + "px")
        element.style.setProperty("--y", y + "px")
    }
})




//Animação do header ===========================================================================================================
window.addEventListener("scroll", function() {

    const cabecalho = document.querySelector('header')

    cabecalho.classList.toggle('sticky', window.scrollY > 0)

})

const navigation = document.querySelector("nav")

document.querySelector(".toggle").onclick = function() {
    this.classList.toggle("active");
    navigation.classList.toggle("active")
}




//Animação ao rolar a página ====================================================================================================
const observer = new IntersectionObserver(entries => {

    Array.from(entries).forEach(entry => {

        if(entry.intersectionRatio >= 0.35){
            entry.target.classList.add('init-hidden-off')
        }
    })
    
}, {
    threshold: [0.35]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})




//Animação de escrita no início da página ========================================================================================
var typed = new Typed('.logo', {
    strings : ["Kauê Dias Lipari"],
    typeSpeed : 100
});



//Parallax Habilidades ===========================================================================================================
var text = document.getElementById('text');
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(text);
var parallaxInstance = new Parallax(scene);

VanillaTilt.init(document.querySelectorAll(".card-abiliity"));


