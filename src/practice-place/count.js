const ele = document.getElementById('root');
let title = "Counting App";
let count=0;
let upHandler= ()=>{
    count++;
    render();
}
let downHandler= ()=>{
    count--;
    render();
}
let resetHandler= ()=>{
    count=0;
    render();
}
render();
function render() {
    const jsx = (<div className="container"> 
    <h1 className="title">{title}</h1> 
    <div className="count-grid">
        <div className="count">COUNT: {<span className="num">{count}</span>}</div> 
        <button className="btn-up" onClick={upHandler}>Up+</button>
        <button className="btn-down" onClick={downHandler}>Down-</button>
        <button className="reset" onClick={resetHandler}>Reset</button>
    </div>
    </div>);
    ReactDOM.render(jsx, ele);
};
