import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} ><button>Shopping Cart App</button></div>
            <div onClick={() => props.handleShow(true)}> <button>Cart <sup> {props.count} </sup></button>
                
            </div>
        </div>
    );
}

export default Header;