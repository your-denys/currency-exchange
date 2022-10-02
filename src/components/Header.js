export function Header ({headerUSD, headerEUR, headerGBP}) {

  return(
    <header className="header">
        <p> 
        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="white" r="16"/><path d="M22.5 19.154c0 2.57-2.086 4.276-5.166 4.533V26h-2.11v-2.336A11.495 11.495 0 0 1 9.5 21.35l1.552-2.126c1.383 1.075 2.692 1.776 4.269 2.01v-4.58c-3.541-.888-5.19-2.173-5.19-4.813 0-2.523 2.061-4.252 5.093-4.486V6h2.11v1.402a9.49 9.49 0 0 1 4.56 1.776l-1.359 2.196c-1.067-.771-2.158-1.262-3.298-1.495v4.439c3.687.888 5.263 2.313 5.263 4.836zm-7.18-5.327V9.715c-1.527.117-2.327.935-2.327 1.963 0 .98.46 1.612 2.328 2.15zm4.318 5.49c0-1.05-.51-1.681-2.401-2.219v4.23c1.528-.118 2.401-.889 2.401-2.01z" fill="#3fa8ac"/></g></svg> 
         {headerUSD}</p>
       <p> <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="white" r="16"/><path d="M8 19.004L8.81 17h.857a16.279 16.279 0 0 1-.034-1.03c0-.448.019-.864.056-1.25H8l.81-2.003h1.274C11.27 8.906 13.944 7 18.103 7c1.367 0 2.666.177 3.897.532v2.524a8.92 8.92 0 0 0-3.683-.776c-2.493 0-4.096 1.146-4.81 3.438h7.423l-.81 2.003h-7.097a6.938 6.938 0 0 0-.056.995c0 .479.015.907.045 1.285h6.183l-.8 2.003H13.44c.533 1.389 1.183 2.355 1.949 2.9.765.544 1.858.816 3.277.816 1.014 0 2.125-.247 3.334-.741v2.373c-1.149.432-2.515.648-4.1.648-4.167 0-6.803-1.999-7.906-5.996z" fill="#3fa8ac"/></g></svg>
         {headerEUR}</p>
       <p> <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="white" r="16"/><path d="M11.087 14.815v-2.332c0-3.676 2.219-5.983 6.075-5.983 2.932 0 4.57 1.242 5.838 2.84l-2.483 1.9c-.951-1.165-1.85-1.85-3.328-1.85-1.77 0-2.827 1.217-2.827 3.17v2.255h6.578v2.637h-6.578v4.335h8.585V24.5H9v-1.977l2.087-.609v-4.462H9v-2.637z" fill="#3fa8ac"/></g></svg>
         {headerGBP}</p>
    </header>
  )
}