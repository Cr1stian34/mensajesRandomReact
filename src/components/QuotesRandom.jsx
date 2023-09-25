const QuotesRandom = ({quote, handleChangeQuote}) => {  
//   console.log(quote);
  return (
    <article className='container'>
    <section className='card'>
      <h1 className='title'>INFOGALAX</h1>
      <div className="phrase">
        {quote.phrase}
      </div>
      <i className='bx bx-reset' onClick={handleChangeQuote} ></i>
    </section>
    <footer className='footer'>
         Autor: {quote.author}
    </footer>
  </article>
  )
}

export default QuotesRandom;