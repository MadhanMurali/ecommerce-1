import React from 'react';

import './AdditionalInfo.css';

const h5RandomText = "Duis quam ante, dictum eu vulputate nec, ultrices et enim.";
const pRandomText = "Donec consequat est efficitur neque auctor, semper imperdiet lorem varius. Praesent sit amet sollicitudin quam. Nullam sollicitudin velit eu congue sodales. Aliquam malesuada scelerisque lorem nec semper. Quisque tempus elit sit amet ex porttitor sollicitudin. Curabitur eget eros tristique, consequat lectus eget, maximus mauris. Vestibulum mollis id neque ac efficitur. Proin malesuada, mauris vitae vehicula tristique, felis lorem laoreet neque, at suscipit lorem elit id justo.";

const AdditionalInfo = () => {
    return(
        <div className = "card-panel">
            <table className="striped centered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Lorem Ipsum</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Lorem Ipsum</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Lorem Ipsum</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdditionalInfo;