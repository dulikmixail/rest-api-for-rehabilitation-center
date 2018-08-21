const Post = require('../models/post');

Post.deleteAll();
Post.create([
    {title: 'Лікар'},
    {title: 'Реабілітолог'},
    {title: 'Фізичний терапевт'},
    {title: 'Фізіотерапевт'},
    {title: 'Діетолог'},
    {title: 'Бальнео терапевт'},
    {title: 'Медсестра'},
],(err,result)=>{
    require('./employee');
});