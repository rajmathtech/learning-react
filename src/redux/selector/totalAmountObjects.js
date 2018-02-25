export default ( objects) => 
objects.map((object) =>  object.amount)
.reduce((pre, cur) =>  pre +cur, 0);

