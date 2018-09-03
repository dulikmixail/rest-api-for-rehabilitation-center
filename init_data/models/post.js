const Post = require('../../models/all/post');

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