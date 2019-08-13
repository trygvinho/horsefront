import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header'

const Something = () => {
    return <div>something</div>;
}

const Samething = () => {
    return <div>samething</div>;
}

class App extends React.Component {
    render(){
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Something} />
                    <Route path="/2" component={Samething}/>
                </div>
            </BrowserRouter>
        </div>);
    }
};

export default App;