import { Component } from 'react';

class Table extends Component {
    render() {
        return(<>
            <div className="content">
                <br/>
                <h2>Table</h2>
                <p>Here are some of my favorite subreddits.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Link</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Am I the Asshole?</td>
                            <td><a href="https://www.reddit.com/r/AmItheAsshole/">r/AmItheAsshole</a></td>
                            <td>A catharsis for the frustrated moral philosopher in all of us, 
                                and a place to finally find out if you were wrong in an argument that's been bothering you. 
                                Tell us about any non-violent conflict you have experienced; give us both sides of the story, 
                                and find out if you're right, or you're the asshole.
                            </td>
                        </tr>
                        <tr>
                            <td>Comedy Heaven</td>
                            <td><a href="https://www.reddit.com/r/comedyheaven/">r/comedyheaven</a></td>
                            <td>so bad, it's ascended</td>
                        </tr>
                        <tr>
                            <td>Dank Memes</td>
                            <td><a href="https://www.reddit.com/r/dankmemes/">r/dankmemes</a></td>
                            <td>A Place to Post the Dankest Memes</td>
                        </tr>
                        <tr>
                            <td>Politics</td>
                            <td><a href="https://www.reddit.com/r/politics/">r/politics</a></td>
                            <td>/r/Politics is for news and discussion about U.S. politics.</td> 
                        </tr>
                        <tr>
                            <td>Watch People Die Inside</td>
                            <td><a href="https://www.reddit.com/r/WatchPeopleDieInside/">r/WatchPeopleDieInside</a></td>
                            <td>People dying - but on the inside.</td> 
                        </tr>
                        <tr>
                            <td>Play Stupid Games Win Stupid Prizes</td>
                            <td><a href="https://www.reddit.com/r/WinStupidPrizes/">r/WinStupidPrizes</a></td>
                            <td>Sub dedicated to gifs and videos of people playing stupid games and winning stupid prizes.</td> 
                        </tr>
                    </tbody>
                </table>
                <br/>
            </div>
        </>);
    }
}

export default Table;