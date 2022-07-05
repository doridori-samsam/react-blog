import React from 'react';
import { Link } from 'react-router-dom';
import dummy from '../../../db/data.json';
import './post.css';
import './category.css';
import './author.css';

function Post(){  

    return(
        <ul className="posts">
            {dummy.posts.map((list, i) => {
                return(
                 <li key={i}>
                 <Link className="post" to={`/postview/${list.id}`}>
                 <article>
                    <img
                    src={process.env.PUBLIC_URL + `${list.thumbnail}`}
                    alt="">
                    </img>
                    <div className="contents-wrap">
                        {/* 어려웠던 부분  */}
                    <dl className="category">                            
                        <dt className="a11y-hidden">Category</dt>
                        {list.category.map((tag, j) => {
                           return <dd key={j}>{tag}</dd>
                        })}
                    </dl>
                    <h3>{list.title}</h3>
                    <dl className="author-wrap">
                        <dt className="a11y-hidden">Author</dt>
                        <dd className="author">
                        <img src={process.env.PUBLIC_URL + `${list.profileImg}`} alt=""></img>
                        Chilli
                        </dd>
                        <dt className="a11y-hidden">Created</dt>
                        <dd className="created">{list.created}</dd>
                    </dl>
                    <p className="post-description">{list.contents[0].text}</p>
                    </div>
                 </article>
                 </Link>
                 </li>
                )
            })}
           
        </ul>
   )
}


export default Post;