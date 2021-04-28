import React from 'react';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImmportant, onToggleLike}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} classNames='list-group-item'>
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImmportant={() => onToggleImmportant(id)}
                onToggleLike={() => onToggleLike(id)}/>
                {/* <PostListItem label={item.label} important={item.important}/> */}
            </li>
        )
    });

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;