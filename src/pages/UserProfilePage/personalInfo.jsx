import React from "react";
import {Step1} from "./Step1";
import { TextField } from "@mui/material";
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
                        <TextField label="UserName/Display Name" fullWidth margin="normal" />

                        <div className="input-2">
                            <TextField label="First Name" fullWidth margin="normal" />
                        </div>

                        <div className="input-3">
                            <TextField label="Last Name" fullWidth margin="normal" />
                        </div>

                        <div className="input">
                            <TextField label="Email address" fullWidth margin="normal" />
                        </div>

                        <div className="docked-input-date">
                            <DOBPicker />
                        </div>

                        <div className="input">
                            <TextField label="Phone no" fullWidth margin="normal" />
                        </div>

                        <div className="input-4">
                            <TextField label="Address Line 1" fullWidth margin="normal" />
                        </div>

                        <div className="input-4">
                            <TextField label="Address Line 2" fullWidth margin="normal" />
                        </div>

                        <div className="input-5">
                            <TextField label="Landmark" fullWidth margin="normal" />
                        </div>

                        <div className="input-5">
                            <TextField label="PinCode" fullWidth margin="normal" />
                        </div>

                        <button className="button" style={{marginLeft:"2rem"}}>
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