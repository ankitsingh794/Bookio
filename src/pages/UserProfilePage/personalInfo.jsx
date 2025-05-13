import React from "react";
import {Step1} from "./Step1";
import "./Style/personalInfo.css";
import DOBPicker from './DOBPicker'; 


export const Box = () => {
    return (
        <div className="box">
            <div className="personal-info">
                <div className="overlap">
                    <div className="heading">
                            <div className="overlap-group">
                                <Step1 className = "circular" />
                                <div className="text-wrapper-4">Personal Information</div>
                            </div>
                        </div>

                    <div className="form">
                        <div className="input">
                            <div className="text-wrapper-2">Username/Display Name</div>

                            <div className="field">
                                <div className="label">abcd1234</div>
                            </div>
                        </div>

                        <div className="input-2">
                            <div className="text-wrapper-2">First name</div>

                            <div className="field">
                                <div className="label">Jane</div>
                            </div>
                        </div>

                        <div className="input-3">
                            <div className="text-wrapper-2">Last name</div>

                            <div className="field">
                                <div className="label">Smitherton</div>
                            </div>
                        </div>

                        <div className="input">
                            <label className="text-wrapper-2" htmlFor="input-1">
                                Email address
                            </label>

                            <input
                                className="label-wrapper"
                                id = "input-1"
                                placeholder="email@janesfakedomain.net"
                                type="email"
                            />
                        </div>

                        <div className="docked-input-date">
                            <DOBPicker />
                        </div>

                        <div className="input">
                            <div className="text-wrapper-2">Phone</div>

                            <div className="div-wrapper">
                                <div className="label-2">+91 XXXXX XXXXX</div>
                            </div>
                        </div>

                        <div className="input-4">
                            <div className="text-wrapper-2">Billing Address</div>

                            <div className="div-wrapper">
                                <div className="label-2">42B Lakeview Apartments</div>
                            </div>
                        </div>

                        <div className="input-5">
                            <div className="text-wrapper-2">Landmark / Locality</div>

                            <div className="div-wrapper">
                                <div className="label-2">Salt Lake Sector V</div>
                            </div>
                        </div>

                        <button className="button">
                            <div className="text-wrapper-3">Clear</div>
                        </button>

                        <button className="button">
                            <div className="text-wrapper-3">Submit</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};