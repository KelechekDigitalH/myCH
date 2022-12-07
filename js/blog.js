//blog page-filter
const filterBtn = document.querySelectorAll('.filter-blc button');
const cardItem = document.querySelectorAll('.blog-gallery .blogs__block');

filterBtn.forEach(button => {
    button.addEventListener('click', () =>{
        filterBtn.forEach(button => {
            button.className = "";
        });

        button.className = "active-btn";

        //Filter
        const value = button.textContent;
        cardItem.forEach(card => {
            card.classList.add('hidden');
            if (card.getAttribute('data-filter') == value.toLowerCase() || value == "ALLE") {
                card.classList.remove('hidden');
            }
        });

    });   
});
