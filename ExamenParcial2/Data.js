let {userData}= require('./Data')
{
const getUser = (req, res) =>{
const currentUser = userData 

const {
    firstname,
lastname, 
maidename,
email,
age,
addres,
company,
}= currentUser;
} 
res.send({
    status: 200,
    id
});
}