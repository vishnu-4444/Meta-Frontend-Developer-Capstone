import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header"; 
import Booking from "./Booking";
import { useReducer } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {

    const seedRandom = function(seed){
        var m = 2**35-31;
        var a = 185852;
        var s = seed%m;
        return function(){
            return (s = s*a%m)/m;
        }
    }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 18; i <=24; i++){
            if(random()<0.5){
                result.push(i+':00');
            }
            if(random()>0.5){
                result.push(i+':30');
            }
        }
        return result;
    }

    const submitAPI = function(formData){
        return true;
    }

    const instialState = {availableTimes: fetchAPI(new Date())};
    const [state,dispatch] = useReducer(updateTimes, instialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function SubmitForm(formData) {
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }
    return (
        <Routes>
          <Route path="/" element={<Header />} />
    
          <Route 
            path="/booking/" 
            element={
              <Booking 
                availableTimes={state}
                dispatch={dispatch} 
                SubmitForm={SubmitForm}
              />
            } 
          />
    
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      );
    };
    
    export default Main;
