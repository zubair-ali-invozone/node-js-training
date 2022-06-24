const posts = [
    {title: 'Post 1', desc: 'This is the post 1'},
    {title: 'Post 2', desc: 'This is the post 2'},
    {title: 'Post 3', desc: 'This is the post 3'},
    {title: 'Post 4', desc: 'This is the post 4'}
];

const allPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `Data: ${post.title} \n`
        });
        console.log("The output is", output)
    }, 1000)
}

const createPost = (data, callback) => {
    setTimeout(() => {
        posts.push(data);
        callback();
    }, 2000);
}

// allPosts();

createPost({title: 'Post 5', desc: 'This is the post 5'}, allPosts);