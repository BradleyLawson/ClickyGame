import React, { Component } from 'react';
import './App.css';
import cartoons from './cartoons.json'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron'
import Cartoons from './components/Cartoons'

class App extends Component {
    //initial State
    state = {
        topScore: 0,
        currentScore: 0,
        cartoons: cartoons,
        unselectedCartoons: cartoons
    }

    componentDidMount() {
    }
    
    // slightly modified from https://www.frankmitchell.org/2015/01/fisher-yates/
    randomizeArray = cartoonArray => {
      let i = 0, j = 0, tempArray = null
      for (i = cartoonArray.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        tempArray = cartoonArray[i]
        cartoonArray[i] = cartoonArray[j]
        cartoonArray[j] = tempArray
        }
    }

    // when user clicks on a cartoon
    selectCartoon = id => {
        //If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
        //Otherwise it returns undefined.
        // item is passed in parameter to callback function id is the id of the cartoon picture
        const findCartoon = this.state.unselectedCartoons.find(item => item.id === id);

        // If find method doesn't find the item it is undefined
        if(findCartoon === undefined) {
            this.setState({ 
                //If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.
               // if didn't find item check if current score is greater than top score if is top score changed to value of current score otherwise stays same
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                // and current score changed back to 0
                currentScore: 0,
                // cartoons and unselected cartoons are once again from array from cartoons.json
                cartoons: cartoons,
                unselectedCartoons: cartoons
            });
        }
        else {
            // if item is found
            // The filter() method creates a new array with all elements that pass the test implemented by the provided function
            const newCartoons = this.state.unselectedCartoons.filter(item => item.id !== id);
            
            this.setState({ 
                currentScore: this.state.currentScore + 1,
                cartoons: cartoons,
                unselectedCartoons: newCartoons
            });
        }

        this.randomizeArray(cartoons);
    };

    render() {
        return (
            <Wrapper>
                <Nav
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                {
                    // loop through the array to display the images
                    this.state.cartoons.map(cartoon => (
                        <Cartoons
                            id={cartoon.id}
                            image={cartoon.image}
                            selectCartoon={this.selectCartoon} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;