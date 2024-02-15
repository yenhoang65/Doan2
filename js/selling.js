const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes= $$('.tab-pane')
const titles= $$('.title-sell')

tabs.forEach((tab, index)=> {
    const pane = panes[index]
    const title = titles[index]

    tab.onclick = function(){
        $('.title-sell.action').classList.remove('action')
        $('.tab-item.action').classList.remove('action')
        $('.tab-pane.action').classList.remove('action')

        title.classList.add('action')
        this.classList.add('action')
        pane.classList.add('action')
    }
})

let btns = document.getElementsByClassName('tab-item')
for(let i = 0; i< btns.length; i++) {
    let sell = document.querySelector('.selling')
    btns[i].addEventListener("click", function() {
        let buttonStyle = getComputedStyle(this)
        let buttonBgColor = buttonStyle["backgroundColor"];
        sell.style.backgroundColor = buttonBgColor;
    })
}