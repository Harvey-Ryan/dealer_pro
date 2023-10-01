import '../App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const CreateTradesheet = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [vin, setVin] = useState('');
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [stocknumber, setStocknumber] = useState('');
    const [color, setColor] = useState('');
    const [mileage, setMileage] = useState('');
    const [bookedat, setBookedat] = useState('');
    const [blackbook, setBlackbook] = useState('');
    const [retail, setRetail] = useState('');
    const [tires, setTires] = useState('');
    const [setby, setSetby] = useState('');
    const [comments, setComments] = useState('');
    const [mechanical, setMechanical] = useState('');
    const [appearance, setAppearance] = useState('');
    const [vehicles, setVehicles] = useState(''); // FIELD USED FOR EDIT FORM? {VEHICLE.VIN} ETC?

    const [options, setOptions] = useState({
        twobyfour: false,
        fourbyfour: false,
        quadsts: false,
        sixcyl: false,
        fourcyl: false,
        thirdrow: false,
        rearair: false,
        sunroof: false,
        autotrans: false,
        eightcyl: false,
        manualtrans: false,
        cdplayer: false,
        leather: false,
        painted: false,
        salvagetitle: false,
    });

    const [carfax, setCarfax] = useState({
        report: false,
        damage: false,
        branded: false,
    });

    const handleMechanicalChange = (e) => {
        setMechanical(e.target.value);
    };

    const handleAppearanceChange = (e) => {
        setAppearance(e.target.value);
    };

    const handleTiresChange = (e) => {
        setNeedsTires(e.target.value);
    };

    const handleRetailChange = (e) => {
        setRetail(e.target.value);
    };

    const handleOptionChange = (e) => {
        const { name, checked } = e.target;
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }));
    };

    const handleCarfaxChange = (e) => {
        const { name, checked } = e.target;
        setCarfax((prevCarfax) => ({
            ...prevCarfax,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // MAY INHIBIT CHECKBOXES
        setErrors({});
        axios
            .post('/api/vehicle', {
                vin: vin,
                year: year,
                make: make,
                model: model,
                stocknumber: stocknumber,
                color: color,
                mileage: mileage,
                bookedat: bookedat,
                blackbook: blackbook,
                retail: retail,
                tires: tires,
                setby: setby,
                comments: comments,
                mechanical: mechanical,
                appearance: appearance,
                vehicles: vehicles,
                options: options,
                carfax: carfax,
            })
            .then((res) => {
                console.log(res.data);
                navigate('/dashboard');
            })
            .catch((err) => {
                if (err.response.data.errors && err.response) {
                    setErrors(err.response.data.errors);
                    console.log(err.response.data.errors);
                } else {
                    console.log(err);
                }
            });
    };


    return (
        <div className='printer d-flex container flex-column'>
            <div className=' d-flex w-100 justify-content-between'>
                <div className='d-flex flex-column'>
                    <h2 className="text-danger whitespace">Store Name</h2>
                    <p className="whitespace">Trade Sheet</p>
                    <p className="text-danger whitespace">Insert Date</p>
                </div>
                <a className='align top' href='/dashboard'>Back to Dashboard</a>
            </div>
            <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                {errors.carfax ? <p className='text-danger'>{errors.carfax.message}</p> : null}
                <div className='form-group d-flex justify-content-around m-2 w-75'>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="report"
                            name="report"
                            checked={carfax.report}
                            onChange={handleCarfaxChange}
                        />
                        <label class="form-check-label" htmlFor="report">Carfax</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="damage"
                            name="damage"
                            checked={carfax.damage}
                            onChange={handleCarfaxChange}
                        />
                        <label class="form-check-label" htmlFor="damage">Damage Reported</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="branded"
                            name="branded"
                            checked={carfax.branded}
                            onChange={handleCarfaxChange}
                        />
                        <label class="form-check-label" htmlFor="branded">Branded Title</label>
                    </div>
                </div>
                <div className='form-group d-flex justify-content-start w-100'>
                    <div className='d-flex row flex-column w-40 mt-4'>
                        {errors.vin ? <p className='text-danger'>{errors.vin.message}</p> : null}
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' htmlFor="vin">VIN: </label>
                            <div class="col-sm-10">
                                <input
                                    class="form-control"
                                    type="text"
                                    id="vin"
                                    name="vin"
                                    placeholder="Enter 17-Digit VIN"
                                    onChange={(e) => setVin(e.target.value)}
                                />
                            </div>
                        </div>
                        {errors.make ? <p className='text-danger'>{errors.make.message}</p> : null}
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' htmlFor="make">Make: </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Manufacturer"
                                    id="make"
                                    name="make"
                                    onChange={(e) => setMake(e.target.value)}
                                />
                            </div>
                        </div>
                        {errors.model ? <p className='text-danger'>{errors.model.message}</p> : null}
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' htmlFor="model">Model: </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Model"
                                    id="model"
                                    name="model"
                                    onChange={(e) => setModel(e.target.value)}
                                />
                            </div>
                        </div>
                        {errors.year ? <p className='text-danger'>{errors.year.message}</p> : null}
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' htmlFor="year">Year: </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Model Year"
                                    id="year"
                                    name="year"
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </div>
                        </div>
                        {errors.color ? <p className='text-danger'>{errors.color.message}</p> : null}
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' htmlFor="color">Color: </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Example input"
                                    id="color"
                                    name="color"
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>
                        {errors.stocknumber ? <p className='text-danger'>{errors.stocknumber.message}</p> : null}
                        <div class="form-group row d-flex align-items-center m-1 justify-content-between">
                            <label className='d-flex col-sm-2 col-form-label' htmlFor="stocknumber">Stock#: </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Example input"
                                    id="stocknumber"
                                    name="stocknumber"
                                    onChange={(e) => setStocknumber(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around w-100 mt-3 p-2'>
                    <div className='d-flex flex-column w-50 p-5'>
                        <h3><u>Mechanical:</u></h3>
                        {errors.mechanical ? <p className='text-danger'>{errors.mechanical.message}</p> : null}
                        <div class="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="good"
                                name="mechanical"
                                value="Good"
                                checked={mechanical === 'Good'}
                                onChange={handleMechanicalChange}
                            />
                            <label class="form-check-label" htmlFor="good">Good</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            id="fair" 
                            value="Fair"
                            name="mechanical"
                            checked={mechanical === 'Fair'}
                            onChange={handleMechanicalChange}
                            />
                            <label class="form-check-label" htmlFor="fair">Fair</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            id="poor" 
                            value="poor"
                            name="mechanical"
                            checked={mechanical === 'Poor'}
                            onChange={handleMechanicalChange}
                            />
                            <label class="form-check-label" htmlFor="inlineCheckbox3">Poor</label>
                        </div>
                    </div>
                    <div className='d-flex flex-column w-50 p-5'>
                        <h3><u>Appearance:</u></h3>
                        {errors.appearance? <p className='text-danger'>{errors.appearance.message}</p> : null}
                        <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            id="good" 
                            value="Good"
                            name="appearance"
                            checked={appearance === 'Good'}
                            onChange={handleAppearanceChange}
                            />
                            <label class="form-check-label" htmlFor="good">Good</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" 
                            type="radio" 
                            id="fair" 
                            value="Fair"
                            name="appearance"
                            checked={appearance === 'Fair'}
                            onChange={handleAppearanceChange}
                            />
                            <label class="form-check-label" htmlFor="fair">Fair</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" 
                            type="radio" 
                            id="poor" 
                            value="poor"
                            name="appearance"
                            checked={appearance === 'Poor'}
                            onChange={handleAppearanceChange}
                            />
                            <label class="form-check-label" htmlFor="poor">Poor</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around w-100 mt-3'>
                    <div className='d-flex row flex-column w-50 mt-4 p-5'>
                        <h3><u>Value:</u></h3>
                        {errors.bookedat? <p className='text-danger'>{errors.bookedat.message}</p> : null}
                        <div class="form-group row d-flex align-items-center justify-content-between">
                            <label className='d-flex col-5 col-form-label justify-content-start' htmlFor="bookedat">Booked-In Ammount: </label>
                            <div class="col">
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Enter booked-in value" 
                                id="bookedat" 
                                name="bookedat" 
                                onChange={(e) => setBookedat(e.target.value)}
                                />
                            </div>
                        </div>
                        {errors.blackbook ? <p className='text-danger'>{errors.blackbook.message}</p> : null}
                        <div class="form-group row d-flex align-items-center">
                            <label className='d-flex col-5 col-form-label justify-content-start' htmlFor="blackbook">Black Book: </label>
                            <div class="col">
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Black Book Value"
                                id="blackbook" 
                                name="blackbook" 
                                onChange={(e) => setBlackbook(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex row flex-column w-50 mt-4 p-5'>
                        {errors.mileage ? <p className='text-danger'>{errors.mileage.message}</p> : null}
                        <div className='d-flex w-50'>
                            <label htmlFor='mileage' className='h3'><u>Mileage:</u></label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Mileage"
                            id="mileage" 
                            name="mileage" 
                            onChange={(e) => setMileage(e.target.value)}
                            />
                        </div>
                        {errors.tires ? <p className='text-danger'>{errors.tires.message}</p> : null}
                        <div className='d-flex w-50 justify-content-between'>
                            <label htmlFor='tires'>Needs tires:</label>
                            <div class="form-check form-check-inline">
                                <input 
                                class="form-check-input" 
                                type="radio" 
                                id="yes" 
                                value="Yes"
                                name="tires"
                                checked={tires === 'Yes'}
                                onChange={handleTiresChange}
                                />
                                <label class="form-check-label" htmlFor="yes">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input 
                                class="form-check-input" 
                                type="radio" 
                                id="no" 
                                value="No"
                                name="tires"
                                checked={tires === 'No'}
                                onChange={handleTiresChange}
                                />
                                <label class="form-check-label" htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                {errors.retail ? <p className="text-danger">{errors.retail.message}</p> : null}
                <div className='d-flex mt-5 justify-content-between w-100'>
                    <div className='d-flex flex-column w-50 p-5'>
                        <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            id="retail" 
                            value="Retail" 
                            name="retail" 
                            checked={retail === 'Retail'}
                            onChange={handleRetailChange}
                            />
                            <label class="form-check-label" htmlFor="retail">Retail</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            id="wholesale" 
                            value="Wholesale" 
                            name="retail" 
                            checked={retail === 'Wholesale'}
                            onChange={handleRetailChange}
                            />
                            <label class="form-check-label" htmlFor="wholesale">Wholesale</label>
                        </div>
                    </div>
                    <div className='d-flex w-50 p-5'>
                        <div className='d-flex flex-column w-50 p-2'>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="twobyfour"
                                    name="twobyfour"
                                    checked={options.twobyfour}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="twobyfour">2x4</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fourbyfour"
                                    name="fourbyfour"
                                    checked={options.fourbyfour}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="fourbyfour">4x4</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"
                                    type="checkbox"
                                    id="quadsts"
                                    name="quadsts"
                                    checked={options.quadsts}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="quadsts">Quad STS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="sixcyl"
                                    name="sixcyl"
                                    checked={options.sixcyl}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="sixcyl">V6</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fourcyl"
                                    name="fourcyl"
                                    checked={options.fourcyl}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="fourcyl">4 Cyl.</label>
                            </div>
                        </div>
                        <div className='d-flex flex-column w-50 p-2'>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="thirdrow"
                                    name="thirdrow"
                                    checked={options.thirdrow}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="thirdrow">3rd Row</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="rearair"
                                    name="rearair"
                                    checked={options.rearair}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="rearair">Rear Air</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="sunroof"
                                    name="sunroof"
                                    checked={options.sunroof}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="sunroof">Sunroof</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="autotrans"
                                    name="autotrans"
                                    checked={options.autotrans}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="autotrans">Auto</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="eightcyl"
                                    name="eightcyl"
                                    checked={options.eightcyl}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="eightcyl">V8</label>
                            </div>
                        </div>
                        <div className='d-flex flex-column w-50 p-2'>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="manualtrans"
                                    name="manualtrans"
                                    checked={options.manualtrans}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="manualtrans">Manual</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="cdplayer"
                                    name="cdplayer"
                                    checked={options.cdplayer}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="cdplayer">CD</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="leather"
                                    name="leather"
                                    checked={options.leather}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="leather">Leather</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="painted"
                                    name="painted"
                                    checked={options.painted}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="painted">Been Painted</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="salvagetitle"
                                    name="salvagetitle"
                                    checked={options.salvagetitle}
                                    onChange={handleOptionChange}
                                />
                                <label class="form-check-label" htmlFor="salvagetitle">Salvage Title</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-100'>
                    <div className='d-flex w-75 p-5'>
                        <label class="form-check-label" htmlFor="inlineCheckbox2">Comments:</label>
                        <textarea class="form-control" rows="5" columns="25"></textarea>
                    </div>
                    <div className='d-flex justify-content-start w-25 p-5 align-items-center'>
                        <label htmlFor="inputState" className='col'>Set in by:</label>
                        <select id="inputState" class="form-control col">
                            <option selected>Choose...</option>
                            <option>Travis Kunce</option>
                            <option>Brandon Nash</option>
                            <option>Darrin Mills</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Save
                </button>
            </form>
        </div>
    )
};

export default CreateTradesheet;