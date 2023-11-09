
const children=$('tbody').children();

let arrChildren=[];

for (let i = 0; i < children.length; i++) {
    arrChildren.push(children[i]);    
}

const items=[];

arrChildren.forEach(e=>{

    const content={
        name:e.getAttribute('data-name'),
        size:parseInt(e.getAttribute('data-size')),
        time:parseInt(e.getAttribute('data-time')),
        html:e.outerHTML
    }
    items.push(content);
});
const sortStatus={
    name:'none',
    // size:,
    // lastModified:
}

const sort_name=(items,option)=>{
    items.sort((p1,p2)=>{
        const name1=p1.name.toUpperCase();
        const name2=p2.name.toUpperCase();
        if(name1<name2)
            return -1;
        if(name1>name2)
            return 1;
        return 0;
    })
    if(option==='down'){
        items.reverse();
    }
};

// sortNameUp(items);

// console.log("1 ",items);


// sortNameDown(items);
// console.log("2 ", items);

const fillTableBody=items=>{
    const content=items.map(e=>e.html).join('');
    $('tbody').html(content);
}

// fillTableBody(items);

document.getElementById('name').addEventListener('click',()=>{
    if(['none','down'].includes(sortStatus.name)){
        sort_name(items,'up');
        sortStatus.name='up';
    }
    else if(sortStatus.name==='up'){
        sort_name(items,'down');
        sortStatus.name='down';
    }
    fillTableBody(items);
});

