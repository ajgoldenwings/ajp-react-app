import React, { Component } from 'react';
import './Shared.css';

function ListItem(props) {
  //const value = props.value;
  // return (
  //   // Wrong! There is no need to specify the key here:
  //   <span key={value.toString()}>
  //     {value}
  //   </span>
	// );
	// Correct! There is no need to specify the key here:
  return <span> {props.value}</span>;
}

function NumberList(props) {
  const numbers = props.numbers;
	const listItems = numbers.map((number) =>
    // // Wrong! The key should have been specified here:
		// <ListItem value={number} />
		// Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <p><em>{listItems}</em></p>
  );
}

function Post(props) {
	return (
		<div id={props.id}>
			<b>{props.title}: </b>
			<span>{props.content}</span>
		</div>
	);
}

function Blog(props) {
  const sidebar = (
    <div><b>Posts: </b>
      {props.posts.map((post) =>
        <span key={post.id}> [{post.title}]</span>
      )}
    </div>
  );
  // const content = props.posts.map((post) =>
  //   <div key={post.id}>
  //     <b>{post.title}: </b>
  //     <span>{post.content}</span>
  //   </div>
	// );
	const content = posts.map((post) =>
		<Post
			key={post.id}
			id={post.id}
			title={post.title}
			content={post.content} />
	);
  return (
    <div>
      {sidebar}
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class Lists extends Component {
	render() {
		const numbers = [1, 2, 3, 4, 5];
		const doubled = numbers.map((number) => number * 2);
		const listItems = doubled.map((number) =>
			<span key={number.toString()}> {number}</span>
		);

    return (
      <div>
				<h2>Lists and Keys</h2>
				<p>{listItems}</p>
				<NumberList numbers={numbers} />
				<Blog posts={posts} />
      </div>
    );
  }
}

export default Lists;
