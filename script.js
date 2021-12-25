document.addEventListener("click", e => {
    const isDropdownLink = e.target.matches("[data-dropdown-link]")
    console.log("isDropdownLink",isDropdownLink);
    console.log("closest", e.target.closest('[data-dropdown]'));
    if(!isDropdownLink && e.target.closest('[data-dropdown]') != null) return;
    
    let currentDropdown;
    if(isDropdownLink){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown){
           console.log("currentDropdown",dropdown);
            return;
        } 
        dropdown.classList.remove('active'); 
    })
})