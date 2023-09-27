import '../App.css'


const Tradesheet = () => {


    return (
        <div className='printer d-flex justify-content-center container p-5'> 
            <div className=' d-flex w-100 justify-content-between'>
                <div className='d-flex flex-column'>
                    <h2 className="text-danger whitespace">Store Name</h2>
                    <p className="whitespace">Trade Sheet</p>
                    <p className="text-danger whitespace">Insert Date</p>
                </div>
                <a className='align top' href='/dashboard'>Back to Dashboard</a>
            </div>
            {/* <label>
                <input
                    type="checkbox"
                    name="option1"
                    checked={formData.option1}
                    onChange={handleCheckboxChange}
                />
                Option 1
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="option2"
                    checked={formData.option2}
                    onChange={handleCheckboxChange}
                />
                Option 2
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="option3"
                    checked={formData.option3}
                    onChange={handleCheckboxChange}
                />
                Option 3
            </label>
            <br />
            <button type="submit">Submit</button> */}
        </div>
    )
};

export default Tradesheet;