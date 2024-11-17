/* -Button On Click Adds Info
    -Store variables input
    -A Way to Get the # Value
    -Way to Get Values from the Form when We Submit
    -Get Values With getElementById()
    -IDs on Values
    */ 

    const formButton = document.getElementById('formSubmit')

    let number = 0

    formButton.addEventListener('click', (event) => {
        event.preventDefault()
        //Variables to Hold Values of Form
        let bookTitle = document.getElementById('bookTitle').value
        let authorName = document.getElementById('authorName').value
        let genreType = document.getElementById('genreType').value

        //Create a Node, a tr Node to Append Form

        let newTableRow = document.createElement('tr')

        let numberNode = document.createElement('td')
            numberNode.innerHTML = number
            newTableRow.append(numberNode)

        let bookTitleNode = document.createElement('td')
        bookTitleNode.innerHTML = bookTitle
        newTableRow.append(bookTitleNode)

        let authorNameNode = document.createElement('td')
        authorNameNode.innerHTML = authorName 
        newTableRow.append(authorNameNode)

        let genreTypeNode = document.createElement('td')
        genreTypeNode.innerHTML = genreType
        newTableRow.append(genreTypeNode)

        document.getElementById('tBody').appendChild(newTableRow)

        document.getElementById('bookTitle').value = ''
        document.getElementById('authorName').value = ''
        document.getElementById('genreType').value = ''

        number++
})
