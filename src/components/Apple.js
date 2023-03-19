function Apple(props) {
    const apple = {
        color:"#57f542"
    }

    return(
        <div className="promo-section">
            <div>
                <h2>This apple is <span style={apple}>{props.color}</span></h2>
                </div>
                <div>
                <h3>This apple cost {props.cost}$</h3>
            </div>
        </div>
    );
}
export default Apple;