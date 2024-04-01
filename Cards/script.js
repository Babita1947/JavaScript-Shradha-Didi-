let div = document.querySelector(".cards");
const btn = document.querySelector("button");

let noticeData = [];
const getData=async()=>{
    try{
        const data=await fetch("https://makaut1.ucanapply.com/smartexam/public/api/notice-data");
        const jsonData=await data.json();
        noticeData=jsonData.data;
        makeDiv()
        console.log(noticeData);
    }catch(error){
        console.log("Error occcured in Fetchin",error);
    }
}


btn.addEventListener("click",()=>{
    getData()
    console.log("click")
})

const makeDiv=()=>{        noticeData.forEach((val,i) => {
    let parent = document.createElement("div");
    let child1 = document.createElement("div");
    let child2 = document.createElement("div")

    console.log(val)

    child1.innerText = val.notice_title;
    child1.setAttribute("class","name");
    child2.innerText = val.notice_date;
    child2.setAttribute("class","semester");

    
    parent.append(child1);
    parent.append(child2);
    parent.setAttribute("class","card");
    parent.setAttribute("id",`card${i+1}`);
    div.append(parent);


});

}





