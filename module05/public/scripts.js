const currentPage = window.location.pathname
const menuItens = document.querySelectorAll("header .links a")

for (item of menuItens) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}



// Paginação
// totalPages = 20
// selectedPage = 15
// [1,..., 13, 14, 15, 16, 17, ..., 20]
function paginate(selectedPage, totalPages) {
    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

        if (firstAndLastPage || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
            if (oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }
            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }

            pages.push(currentPage)
            oldPage = currentPage
        }
    }
    return pages
}

function createPagination(pagination) {
    
const filter = +pagination.dataset.filter
const page = +pagination.dataset.page
const total = pagination.dataset.total
const pages = paginate(page, total)

let elements = ""

for (let page of pages) {
    if (String(page).includes("...")) {
        elements += `<span>${page}<span>`
    } else {
        if (filter) {
            elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
        } else {
            elements += `<a href="?page=${page}">${page}</a>`
        }
    }

}

pagination.innerHTML = elements
}

const pagination = document.querySelector(".pagination")

if (pagination) {
    createPagination(pagination)
}
