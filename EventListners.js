// this way it works
document.addEventListener("DOMContentLoaded", function() {
    // const button = this.getElementById('button');
    // button.onclick = function(event) {
    //     console.log(event);
    //     // if (event.altKey && event.shiftKey) {
    //     //   alert('Hooray!');
    //     // }
    // };

    // button.addEventListener('click', function(event) {
    //     console.log(event.target.type);
    // });

    // select.options[1].selected = true;
    // select.selectedIndex = 1;
    // select.value = 'pear';

    // console.log(select.selectedIndex);

    // let aadhar = prompt("What do you want to know about the user?", "name");


    let Person =  {
        name: 'Nirmal',
        age: 34,
        language: 'React',
        "hobbies": ['Reading','Coding'],
        address: {
            city: 'Pune',
            state: 'MH'
        },
        // ["aadhar"]: aadhar
    }

    // console.log(Person[aadhar]);

    delete Person["hobbies"];

    console.log(Person);

});
