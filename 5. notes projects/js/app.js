console.log('notes projects');
showNotes();

let addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click', function(event){
    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    let notesObj;

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title : addtitle.value,
        text : addtxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value = '';
    addtitle.value = '';
    console.log(notesObj);
    showNotes();
});
//function to show the note
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = ``;

    notesObj.forEach(function(element , index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary"> Delete Note</button>
          </div>
        </div>`
    });
    let notesEls = document.getElementById('notes');
    if(notesObj.length != 0 ){
        notesEls.innerHTML = html;
    }
    else{
        notesEls.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

//function to delete the note
function deleteNote(index) {
    console.log('I am deleting`',index);


    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}

//for searching the note 
 let search = document.getElementById('searchtxt');
 search.addEventListener('input', function () {

    let inputVal = search.value.toLowerCase();
    console.log('input event fired!',inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
       
        if(cardtxt.includes(inputVal)){
            element.style.display ='block';
        }
        else{
            element.style.display= 'none';
        }
        // console.log(cardtxt);
    })
    
 })


//  let a = [
//     {
//         name:"divya",
//         age:21
//     },
//     {
//         name:"chetan",
//         age:22
//     }
//  ]
 
//  /////////////////////////////////////////

//  document.body.innerHTML =  "";

//  a.forEach(function(data,index){


//     const component = `
//         <h1>name: ${data.name}<h1/>
//         <h3>age: ${data.age}<h3/>
//     `
    

    
//     document.body.innerHTML += component
    
//     console.log(index,data);
    
//  })