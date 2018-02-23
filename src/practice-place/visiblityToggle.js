const ele = document.getElementById('root');
let toggle = false;
const msg = () => toggle===true && <p>I am visible</p>;
const toggleHandler = () => {
 toggle=!toggle;
 render();
}
render();
function render() {
    const jsx = (<div className="container"> 
     <button onClick={toggleHandler}> {toggle===true ? 'hide' : 'show '} </button>
     {msg()}
    </div>);
    ReactDOM.render(jsx, ele);
};