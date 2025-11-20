const fetchUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
fetchUser(1).then(user => console.log(user)).catch(error => console.error(error));
export {};
//# sourceMappingURL=User.js.map