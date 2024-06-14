const result=document.querySelectorAll('.counter');

const speed=200;

result.forEach(counter=>
    {
        const updatecount=()=>
            {
                const target=+counter.getAttribute('data-target');
                const a_1=+counter.innerText;
                const inc=target/speed;
                if(a_1 < target)
                    {
                        counter.innerText=a_1+inc;
                        setTimeout(updatecount,50)
                    }
                else{
                    counter.innerText=target;
                }
            }
            updatecount();
    }
)