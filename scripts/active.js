const github = document.getElementById('github')
const frontendmentor = document.getElementById('frontendmentor')
const linkedIn = document.getElementById('linkedIn')
const twitter = document.getElementById('twitter')
const instagram = document.getElementById('instagram')
github.addEventListener("click",() => {
   github.setAttribute("data-active",true)
   linkedIn.setAttribute("data-active",false)
   frontendmentor.setAttribute("data-active",false)
   twitter.setAttribute("data-active",false)
   instagram.setAttribute("data-active",false)
   
})

linkedIn.addEventListener("click",() => {
    linkedIn.setAttribute("data-active",true)
    github.setAttribute("data-active",false)
    frontendmentor.setAttribute("data-active",false)
    twitter.setAttribute("data-active",false)
    instagram.setAttribute("data-active",false)
 })
 

frontendmentor.addEventListener("click",(s) => {
    console.log(s.target['id']);
    
    frontendmentor.setAttribute("data-active",true)
    github.setAttribute("data-active",false)
    frontendmentor.setAttribute("data-active",true)
    linkedIn.setAttribute("data-active",false)
    twitter.setAttribute("data-active",false)
    instagram.setAttribute("data-active",false)
})

twitter.addEventListener("click",() => {
    twitter.setAttribute("data-active",true)
    linkedIn.setAttribute("data-active",false)
    github.setAttribute("data-active",false)
    frontendmentor.setAttribute("data-active",false)
    instagram.setAttribute("data-active",false)
 })

 instagram.addEventListener("click",() => {
    twitter.setAttribute("data-active",false)
    linkedIn.setAttribute("data-active",false)
    github.setAttribute("data-active",false)
    frontendmentor.setAttribute("data-active",false)
    instagram.setAttribute("data-active",true)
 }) 