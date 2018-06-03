var HelloMessage = React.createClass({
    getInitialState: function(){
        return {
            name: "stranger"
        }
    },

    handleHello: function(event){
        var name = function(){
            return event.target.value;
        }

        this.setState({
            name: name
        });
    },

    render: function(){
        return(
            <div>
                <input type="text" onChange={this.handleHello}/>
                <div>
                    Hello stranger
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <HelloMessage />
    </div>,
    document.getElementById("hello-message")
)