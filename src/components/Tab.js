/* Credits: Jinesh Jhonsa */
function Tab(props) {
    var getStyle = () => {
        if(props.tab.id == props.active) {
            return {
                textDecoration: 'underline',
                textDecorationStyle: 'solid'
            };
        }
        else return {};
    };

    return (
        <a style={getStyle()} onClick={props.ctab.bind(this, props.tab.id)}>
            {props.tab.title}
        </a>
    );
}

export default Tab;