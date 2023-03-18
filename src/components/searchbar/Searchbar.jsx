import './searchbar.css'

const Searchbar = ({submitData, searchData, setSearchData}) => {

    const updateSearchData = (e) => {
        setSearchData({
            ...searchData, [e.target.name]: e.target.value
        })
    }
    
  return (
    <div className="searchbar">
          <form className="travel--form" onSubmit={submitData}>
              <div className="from">
                  <p className='from'>From</p>
                  <input type="text" name="from" id="from" onChange={updateSearchData} />
              </div>
              <div className="to">
                  <p className="to">To</p>
                  <input type="text" name="to" id="to" onChange={updateSearchData} />
              </div>
              <div className="depart">
                  <p className="depart">Depart</p>
                  <input type="date" name="depart" id="dpart" onChange={updateSearchData} />
              </div>
              <div className="return">
                  <p className="return">Return</p>
                  <input type="date" name="return" id="return" onChange={updateSearchData} />
              </div>
              <div className="submit_button">
                <button className="travel--form_submit">Submit</button>

              </div>
          </form>
    </div>
  )
}

export default Searchbar