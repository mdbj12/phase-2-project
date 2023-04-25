import React from "react";
import '../HomePage/HomePage.css'

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Home</h1>
            <h2>Welcome
                <p>
                    What started out in SoHo as a passion project between two friends gradually introduced us to a new way of life.
                    We admired how the community accepted us with open arms and want to share all the culture and unique experiences coffee has to offer with everyone.
                    Our goal is to make specialty coffee approachable.
                    Every cup is crafted to be as palatable as it is aesthetically pleasing, with a focus on taste complemented by the delicacy of latte art.
                    Swing by, grab a cup, and let us share our passion with you.
                </p>
                <ul className="hours">
                    <li>
                        Manhattan
                        <br/>
                        120C Lafayette Street
                        <br/>
                        Monday - Friday
                        <br/>
                        8am - 4pm
                        <br/>
                        Saturday - Sunday
                        <br/>
                        9am - 4pm
                    </li>
                    <li></li>
                </ul>
            </h2>

        </div>
    )
}

export default HomePage;