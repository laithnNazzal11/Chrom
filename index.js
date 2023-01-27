const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let inputDel = document.getElementById("input-del")

inputDel.addEventListener("click",function() {
    myLeads = []
    ulEl.innerHTML = ""
})


inputBtn.addEventListener("click",function()  {
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeader()

})

function renderLeader() {
    let listItems =""
    for (let i=0 ; i<myLeads.length ; i++) {
        listItems += "<li><a target ='_blank' href='#'>" + myLeads[i] + "</li>"
    
    
    }
    
    ulEl.innerHTML = listItems
}

