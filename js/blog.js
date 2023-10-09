(async()=>{
    async function updateStore() {
        const response = await fetch('./data/blog.json')
        const data = await response.json();
        console.log(data)
        return data
    }
    (function(){



        let html = "";
        $.ajax("data/blog.json").done(function(data){
            data.forEach(function(blog) {
                html += `<h1>${blog.title}</h1><p>${blog.content}</p><p>${blog.categories}</p><p>${blog.date}</p>`
            });
            $("#posts").html(html);
        });
    })();
})()


