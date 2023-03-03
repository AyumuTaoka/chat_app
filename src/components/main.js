import React from 'react';
import {TweetContainers} from './tweetContainers';
import { AddTweet } from './addTweet';

function Main(props) {
    return (
        <div className='Main'>
            <AddTweet
                name={props.name}
                img={props.img}
                tweet={props.tweet}
                onClick={props.onClick}
                tweetList={props.tweetList}
            />
            <TweetContainers tweetList={props.tweetList}/>
        </div>
    );
    }

export {Main};