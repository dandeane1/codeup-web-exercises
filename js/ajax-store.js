(function() {
    "use strict";
    let html = "";

    let toolsData = (e) => {
        e.preventDefault();
        $("#insertProducts").html("");
        $.get("data/inventory.json").then(function(data) {
            data.forEach((tool) => {
                html += `<tr><td>${tool.title}</td><td>${tool.quantity}</td><td>${tool.price}</td><td>${tool.categories}</td></tr>`;
            });
            $("#insertProducts").html(html);
        });
    };
})();

(async () => {
    async function updateStore() {
        const response = await fetch('./data/inventory.json');
        const data = await response.json();
        console.log(data);
        return data;
    }

    function displayInventory(data) {
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += `<tr>
                      <td>${data[i].title}</td>
                      <td>${data[i].quantity}</td>
                      <td>${data[i].price}</td>
                      <td>${data[i].categories}</td>
                    </tr>`;
        }
        $("#insertProducts").html(html);
        return html;
    }

    let storedata = await updateStore();
    displayInventory(storedata);
})();