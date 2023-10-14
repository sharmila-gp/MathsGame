


/*
let person = {
    name: "name1",
    age: 20,
    sub: "java",
    subj: [90,80,70],
    create: {
        id:"na01",
        student: "good",
    };
    
};
console.log(person.create.id);
console.log(person);

/*function sum (_an,b,c){
    console.log(sub[0]);
console.log(a+b+c);
}
function sum(){
    console.log(person.subj[0]+person.subj[1]+person.subj[2]);
    }


sum();
*/
/*

let person = {
    name: "name1",
    age: 20,
    sub: "java",
    subj: [90,80,70],
    task: dosomething(),
};
function dosomething(){
    console.log("done");
}
function total(){
    console.log(person.subj[0]+person.subj[1]+person.subj[2]);

}
total();

console.log(person.subj);
*/
 let mobile={
    image : "../images/realme.webp",
    name : "Realme 11 Pro 5G",
    offer : "incl of offers"
 }

 let element = document.createElement("DIV");
 element.setAttribute("id", "div1");
  document.body.appendChild(element);

  let imgdiv = document.createElement("DIV");
    imgdiv.setAttribute("id", "imagediv");
    document.getElementById("div1").appendChild(imgdiv);

 let imge = document.createElement('IMG');
 imge.setAttribute("id","img1");
 imge.setAttribute("src",mobile.image);
 document.getElementById("imagediv").appendChild(imge);

 let namemob = document.createElement('p');
 namemob.setAttribute("id","p1");
 namemob.innerHTML=mobile.name;
 document.getElementById("div1").appendChild(namemob);

 let offermob = document.createElement('p');
 offermob.setAttribute("id","p2");
 offermob.innerHTML=mobile.offer;
 document.getElementById("div1").appendChild(offermob);