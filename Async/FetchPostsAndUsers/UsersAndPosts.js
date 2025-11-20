const fetchUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
const fetchPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
(async () => {
    try {
        const [user, post] = await Promise.all([fetchUser(1), fetchPost(1)]);
        console.log('User:', user);
        console.log('Post:', post);
    }
    catch (err) {
        console.error(err);
    }
})();
export {};
//# sourceMappingURL=UsersAndPosts.js.map