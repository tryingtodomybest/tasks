let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]


let obj = model.reduce((a, c) => {
    //Regroup the model
        if (a[c.user.id]) a[c.user.id].posts.push(c)
        else  a[c.user.id] = {name: c.user.name, posts:[c]}
        return a;
    }, []);

    //to turn it into an array
let arr = Object.keys(obj).map(k => Object.assign({id: k}, obj[k]));

//output
console.log(JSON.stringify(arr))
