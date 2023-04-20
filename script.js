let count=10;
// for(i=10; i<=10; i--){
//     console.log(count)
// }
// let content=document.getElementById('content')
content.innerText=count

setTimeout(()=>{
    count;
    content.innerText=10;
    setTimeout(()=>{
        count;
        content.innerText=9;
        setTimeout(()=>{
            count;
            content.innerText=8;
            setTimeout(()=>{
                count;
                content.innerText=7;
                setTimeout(()=>{
                    count;
                    content.innerText=6;
                    setTimeout(()=>{
                        count;
                        content.innerText=5;
                        setTimeout(()=>{
                            count;
                            content.innerText=4;
                            setTimeout(()=>{
                                count;
                                content.innerText=3;
                                setTimeout(()=>{
                                    count;
                                    content.innerText=2;
                                    setTimeout(()=>{
                                        count;
                                        content.innerText=1;
                                        setTimeout(()=>{
                                            count;
                                            content.innerText='Happy Independence Day';
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)

                },1000)
            },1000)
        },1000)
    }),1000
},1000)
