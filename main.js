document.addEventListener('DOMContentLoaded', function() { //makes sure the html page is fully loaded
    const noteInput = document.getElementById('noteInput'); //creates a new const using noteInput
    const addNoteButton = document.getElementById('addNoteButton'); //creates a new const that calls the add note button
    const notesContainer = document.querySelector('.notesContainer'); //creates a new const calling the notes container

    addNoteButton.addEventListener('click', function() { //checks to see if the add note button has been clicked
        const noteContent = noteInput.value.trim(); //sets the note content to the noteInput value (trim just removes extra whitespace that the user may have accidentally entered)

        if (noteContent !== '') { //checks to see if the input box has text in it

            //creates new box and adds text
            const noteBox = document.createElement('div'); //creates a new div called noteBox
            noteBox.className = 'noteBox'; //sets the div to a class
            noteBox.textContent = noteInput.value.trim(); //sets the content of the box to noteContent

            //adds remove button
            const removeButton = document.createElement('button')
            removeButton.className = 'removeButton'
            removeButton.textContent = 'Remove'

            //adds view all button
            const viewAllButton = document.createElement('button')
            viewAllButton.className = 'viewButton'
            viewAllButton.textContent = 'View All'

            //creates a close note button
            const closeNoteButton = document.createElement('button')
            closeNoteButton.className = 'viewButton'
            closeNoteButton.textContent = 'Close Note'

            //adds content to the box
            notesContainer.appendChild(noteBox); //adds the new box to the notes container
            noteBox.appendChild(removeButton)
            noteBox.appendChild(viewAllButton)

            noteInput.value = ''; //clears the input box

            //remove button function
            removeButton.addEventListener('click', function(){
                notesContainer.removeChild(noteBox)
            })

            //view all button function
            viewAllButton.addEventListener('click', function(){
                const parentNoteBox = viewAllButton.closest('.noteBox')

                if(parentNoteBox){
                    parentNoteBox.className = 'viewBox'
                    noteBox.removeChild(viewAllButton)
                    noteBox.appendChild(closeNoteButton)

                    closeNoteButton.addEventListener('click', function(){
                        parentNoteBox.removeChild(closeNoteButton)
                        parentNoteBox.appendChild(viewAllButton)
                        parentNoteBox.className = 'noteBox'
                    })
                }
            })

        }

    });
});