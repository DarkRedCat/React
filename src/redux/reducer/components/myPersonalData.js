import all_users from './ALL_USERS'
export let userId = '0'
let myData = {
    user : {
        id : all_users[userId].id,
        name : all_users[userId].fullName,
        avatar : all_users[userId].avatar,
        DateOfBirth: all_users[userId].DateOfBirth,
        City: all_users[userId].City,
        Education: all_users[userId].Education,
        WebSite: all_users[userId].WebSite,
        
        contact : all_users[userId].contact,
        id_Best_Friends : all_users[userId].id_Best_Friends
    } 
}


export default myData;