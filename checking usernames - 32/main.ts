// list of current users
let current_users = ["maha", "saba", "iqra", "kuku", "rabi"];

// list of new users
let new_users = ["sana" ,"saba", "sara" , "ayesha" , "atiq"];

// loop through new user to check for username availabilty

new_users.forEach(new_one_user => {
    // making a condition for username already exist and save in our_condition varible

    let our_condition = current_users.some(current_users=> current_users.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
      
    // print different message eusing if - else condition
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`);

        }
        else{
            console.log(`this username ${new_one_user} is available`);
        }

    }
    
)
