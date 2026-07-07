const input=document.getElementById("favchap");
const button= document.querySelector("button");
const list=document.getElementById("list");



button.addEventListener("click", function(){
if (input.value.trim() !== ""){
    const li=document.createElement("li");
    const buttonDelete=document.createElement("button");
    li.textContent = input.value;
    buttonDelete.textContent= "❌";
    li.append(buttonDelete);
    list.append(li);
    buttonDelete.addEventListener("click", function (){
    list.removeChild(li);
    });
    input.focus();
    input.value="";
}
});





