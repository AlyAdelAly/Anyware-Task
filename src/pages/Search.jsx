import React, { useState } from 'react';
import requireAuth from '../High Order Component/requireAuth';
import NavBar from '../components/Navbar';
import axios from 'axios';


const Search = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationResult, setVerificationResult] = useState([]);
    const [showVerificationResult, setShowVerificationResult] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleVerificationNumber = async () => {

        const data = await fetch(`http://localhost:8080/search/${phoneNumber}`,
            {
                method: "GET",
                redirect: "follow",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "RWaBTbDTPXktxRyHSvsFxrKhxsmwwgT6"
                }
            })
            .catch(error => alert('error', error));
        const result = await data.json();
        setVerificationResult(result);
        setShowVerificationResult(true);
    };


    const saveResults = async(e) => {
        e.preventDefault();
		try {
                const url = "http://localhost:8080/saveResults";
                const { res } = await axios.post(url, verificationResult);
                console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				console.log(error);
			}
		}
    };

    const clearResults = (e) => {
        setPhoneNumber('');
        setShowVerificationResult([]);
        setShowVerificationResult(false);
    };

    const verificationData =
        [
            {
                title: "Number: ",
                data: verificationResult.number
            },
            {
                title: "Local Format: ",
                data: verificationResult.local_format
            },
            {
                title: "International Format: ",
                data: verificationResult.international_format
            },
            {
                title: "Country Code: ",
                data: verificationResult.country_code
            },
            {
                title: "Country Prefix: ",
                data: verificationResult.country_prefix
            },
            {
                title: "Country Name: ",
                data: verificationResult.country_name
            },
            {
                title: "Location: ",
                data: verificationResult.location
            },
            {
                title: "Line Type: ",
                data: verificationResult.line_type
            },
            {
                title: "Valid: ",
                data: verificationResult.valid
            }
        ];
        
    return (
        <div className="flex flex-col justify-center items-center">

            <NavBar />

            <div className="w-auto flex flex-col justify-center items-center pt-8" >
                <h1 className='text-blue-600 text-3xl font-bold pb-12'>Verify Phone Number </h1>
                <h3 className='pb-2 text-xl text-white'>Please enter your phone number</h3>
                <input className='w-auto md:w-60 lg:w-80 p-2 rounded-lg bg-slate-600 mt-2 focus:border-blue-500 focus:outline-none' type="text" id="phone-number-input" value={phoneNumber} placeholder="Enter Phone Number " onChange={handlePhoneNumberChange} />
                <button className='w-36 my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 text-white font-semibold rounded-lg' onClick={handleVerificationNumber}>Verify</button>
                {showVerificationResult && (
                    <div className='flex flex-col justify-center'>
                        <div className='text-slate-300 bg-blue-600 mb-4 rounded-lg w-96 md:w-auto' >
                            {
                                verificationData.map(item => (
                                    <p key={item.title} className='p-2'>{item.title} {item.data?.toString()}</p>
                                ))
                            }
                        </div>
                        <div className='flex flex-row'>
                        <button className='w-36 my-4 py-2 bg-slate-300/40 shadow-lg hover:shadow-slate-500/25 text-white font-semibold rounded-lg' onClick={saveResults}>Save Result</button>
                        <button className='w-36 my-4 ml-auto py-2 bg-red-600 shadow-lg hover:shadow-red-500/80 text-white font-semibold rounded-lg' onClick={clearResults}>Clear Result</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default requireAuth(Search);
