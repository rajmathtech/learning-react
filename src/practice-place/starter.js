const ele = document.getElementById('root');
render();
function render() {
    const jsx = (<div className="container"> 
     Testing
    </div>);
    ReactDOM.render(jsx, ele);
};