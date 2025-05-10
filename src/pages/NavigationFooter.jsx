import React from "react";
import divider from "./divider.svg";
import icon2 from "./icocn2.svg";
import icon3 from "./icon3.svg";
import icon from "./icon.svg";
import image from "./image.svg";
import "./NavigationFooter.css";

export const NavigationFooter = () => {
    return (
        <div className="navigation-footer">
            <div className="items">
                <div className="text-wrapper">Topic</div>

                <div className="div">Page</div>

                <div className="div">Page</div>

                <div className="div">Page</div>
            </div>

            <div className="items-2">
                <div className="text-wrapper">Topic</div>

                <div className="div">Page</div>

                <div className="div">Page</div>

                <div className="div">Page</div>
            </div>

            <div className="items-3">
                <div className="text-wrapper">Topic</div>

                <div className="div">Page</div>

                <div className="div">Page</div>

                <div className="div">Page</div>
            </div>

            <div className="text-wrapper-2">Bookio</div>

            <div className="social-icons">
                <div className="button-icons">
                    <div className="icon">
                        <img className="img" alt="Icon" src={icon} />
                    </div>
                </div>

                <div className="button-icons">
                    <div className="icon">
                        <img className="icon-2" alt="Icon" src={image} />
                    </div>
                </div>

                <div className="button-icons">
                    <div className="icon">
                        <img className="icon-3" alt="Icon" src={icon2} />
                    </div>
                </div>

                <div className="button-icons">
                    <div className="icon">
                        <img className="img" alt="Icon" src={icon3} />
                    </div>
                </div>
            </div>

            <img className="divider" alt="Divider" src={divider} />
        </div>
    )
}