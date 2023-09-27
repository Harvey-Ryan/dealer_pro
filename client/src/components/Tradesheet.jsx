import '../App.css'


const Tradesheet = () => {


    return (
        <div className='printer d-flex justify-content-center container flex-column'>
            <div className=' d-flex w-100 justify-content-between'>
                <div className='d-flex flex-column'>
                    <h2 className="text-danger whitespace">Store Name</h2>
                    <p className="whitespace">Trade Sheet</p>
                    <p className="text-danger whitespace">Insert Date</p>
                </div>
                <a className='align top' href='/dashboard'>Back to Dashboard</a>
            </div>
            <form className='d-flex flex-column align-items-center justify-content-center'>
                <div className='form-group d-flex justify-content-around m-2 w-100'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Carfax</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label class="form-check-label" for="inlineCheckbox2">Damage Reported</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label class="form-check-label" for="inlineCheckbox3">Branded Title</label>
                    </div>
                </div>
                <div className='form-group d-flex justify-content-start w-100'>
                    <div className='d-flex row flex-column w-40 mt-4'>
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' for="formGroupExampleInput">VIN: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' for="formGroupExampleInput">Make: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' for="formGroupExampleInput">Model: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' for="formGroupExampleInput">Year: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' for="formGroupExampleInput">Color: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' for="formGroupExampleInput">Stock#: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around w-100 mt-3 p-2'>
                    <div className='d-flex flex-column w-50'>
                        <h3><u>Mechanical:</u></h3>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox1">Good</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Fair</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label class="form-check-label" for="inlineCheckbox3">Poor</label>
                        </div>
                    </div>
                    <div className='d-flex flex-column w-50'>
                        <h3><u>Appearance:</u></h3>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox1">Good</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Fair</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label class="form-check-label" for="inlineCheckbox3">Poor</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around w-100 mt-3'>
                    <div className='d-flex row flex-column w-50 mt-4'>
                        <h3><u>Value:</u></h3>
                        <div class="form-group row d-flex align-items-center justify-content-between">
                            <label className='d-flex col-5 col-form-label justify-content-start' for="formGroupExampleInput">Booked-In Ammount: </label>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group row d-flex align-items-center">
                            <label className='d-flex col-5 col-form-label justify-content-start' for="formGroupExampleInput">Black Book: </label>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Example input" />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex row flex-column w-50 mt-4'>
                        <div className='d-flex w-50'>
                            <h3 className=''><u>Mileage:</u></h3>
                            <input type="text" class="form-control" placeholder="Mileage" />
                        </div>
                        <div className='d-flex w-50 justify-content-between'>
                            <p>Needs tires:</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label class="form-check-label" for="inlineCheckbox3">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label class="form-check-label" for="inlineCheckbox3">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Tradesheet;