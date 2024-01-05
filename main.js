let accordianitem = document.querySelectorAll(".accordian-item");
console.log(accordianitem);

accordianitem.forEach(item => {
    let title = item.querySelector(".accordian-title");
    console.log(title);
    let content = item.querySelector(".accordian-content");
    console.log(content);
    
    title.addEventListener('click',() =>{
        for(var i = 0;i<accordianitem.length;i++){
            if(accordianitem[i]!= item){
                accordianitem[i].classList.remove('active');
            }else{
                item.classList.toggle("active");
            }
        }
    });

});


