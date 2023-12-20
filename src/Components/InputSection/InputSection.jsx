import React from 'react'
import './inputSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function InputSection() {
  return (
    <div className="input-section">
      <div className="form-group custom-select">
        <label className='input_label' htmlFor="storeName">Choose a name for your store</label>
        <input className='bottom-line-input' type="text" id="storeName" name="storeName" />

        <label htmlFor="storeType">Select your store type</label>
        <select className='bottom-line-input' id="storeType" name="storeType">
          <option className='selected_location' value="" disabled selected>Select Location</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="grocery">Grocery</option>
          {/* Add more options as needed */}
        </select>
        <div className="select-icon">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>

        <label htmlFor="storeLocation">Select your store Location:</label>
        <select id="storeLocation" className="bottom-line-input" name="storeLocation" >
          <option className='selected_location' value="" disabled selected>Select Location</option>
          <option value="mall">Mall</option>
          <option value="street">Street</option>
          <option value="plaza">Plaza</option>
          {/* Add more options as needed */}
        </select>
        <div className="select-icon1">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>

        <label htmlFor="permanentAddress">Permanent Address:</label>
        <input className='bottom-line-input' id="permanentAddress" name="permanentAddress" placeholder="Enter permanent address"></input>
        <div className="last_first_two_input">
          <div className="district">
            <label htmlFor="district">District</label>
            <input className='bottom-line-input1' type="text" id="district" name="district" placeholder=" District" />
          </div>

          <div className="two_input">
            <label htmlFor="state">State</label>
            <input className='bottom-line-input1' type="text" id="state" name="state" placeholder=" State" />
          </div>
        </div>
        <div className="last_first_two_input">
          <div className="district">
            <label htmlFor="district">Country</label>
            <input className='bottom-line-input1' type="text" id="district" name="district" placeholder="Country" />
          </div>

          <div className="two_input">
            <label htmlFor="state">Pincode</label>
            <input className='bottom-line-input1' type="text" id="state" name="state" placeholder="Pincode" />
          </div>
        </div>



      </div>

    </div>
  )
}

export default InputSection