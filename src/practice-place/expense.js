const ele = document.getElementById('root');
const title = 'Welcome to ExpenseApp';
let options = ['one item', 'two item'];
let picked = undefined;
const formSubmitHandler = (e) =>{
    e.preventDefault();
    options.push(e.target.elements.option.value);
    e.target.elements.option.value='';
    render();
};
const resetAllHandler = () =>{
    options =  [];
    render();
}
const pickOneHandler = () =>{
    const index = Math.floor(Math.random()*options.length) + 1;
    picked = options[index-1];
    render();
}
render();
function render() {
    const jsx = (<div className="container"> 
     <h1> {title} </h1>
     <ol> 
     {
      options.map (
        (option) =>
        <li key={option}>{option}</li>
       )
    }
     </ol>
     <form onSubmit={formSubmitHandler}> 
        <input placeholder="enter item name" name="option"/>
        <button> Add </button>
    </form>
    <button  onClick={resetAllHandler}>ResetAll</button>
    <button onClick={pickOneHandler}>PickOne</button>
    <p>you picked: {picked}</p>
    </div>);
    ReactDOM.render(jsx, ele);
};