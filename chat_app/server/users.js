const users=[];

const addUser=({id,name,room})=>{
    name=name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    const userExists=users.find((user)=>user.id==id && user.name==name);
    if(userExists){
        return {error:'User already exists!'}
    }

    const user={id,name,room};
    users.push(user);
    return {users};
}

const removeUser=(id)=>{
    const index=users.findIndex(user=>user.id==id)
    if(index!=-1)
        return users.splice(index,1);
}

const getUser=(id)=>{
    users.find=users.find((user)=>user.id==id);
}

const getUserInRoom=(room)=>{
    return users.filter((user)=>user.room==room);
}

module.exports={addUser,removeUser,getUser,getUserInRoom};