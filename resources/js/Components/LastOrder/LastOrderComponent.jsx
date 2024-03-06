import React from 'react'

function LastOrderComponent() {
  return (
    <>
    <span className='text-semibold flex justify-start mx-5 font-semibold'>
        Last Order : 
    </span>
    <div className="overflow-x-auto mx-5 pb-20">
        <table className="table table-xs table-zebra">
            <thead>
            <tr>
                <th>#</th> 
                <th>Name</th> 
                <th>Job</th> 
                <th>company</th> 
                <th>location</th> 
                <th>Last Login</th> 
                <th>Favorite Color</th>
            </tr>
            </thead> 
            <tbody>
            <tr>
                <th>1</th> 
                <td>Cy Ganderton</td> 
                <td>Quality Control Specialist</td> 
                <td>Littel, Schaden and Vandervort</td> 
                <td>Canada</td> 
                <td>12/16/2020</td> 
                <td>Blue</td>
            </tr>
            <tr>
                <th>2</th> 
                <td>Hart Hagerty</td> 
                <td>Desktop Support Technician</td> 
                <td>Zemlak, Daniel and Leannon</td> 
                <td>United States</td> 
                <td>12/5/2020</td> 
                <td>Purple</td>
            </tr>
            <tr>
                <th>3</th> 
                <td>Brice Swyre</td> 
                <td>Tax Accountant</td> 
                <td>Carroll Group</td> 
                <td>China</td> 
                <td>8/15/2020</td> 
                <td>Red</td>
            </tr>
            <tr>
                <th>4</th> 
                <td>Marjy Ferencz</td> 
                <td>Office Assistant I</td> 
                <td>Rowe-Schoen</td> 
                <td>Russia</td> 
                <td>3/25/2021</td> 
                <td>Crimson</td>
            </tr>
            <tr>
                <th>6</th> 
                <td>Yancy Tear</td> 
                <td>Community Outreach Specialist</td> 
                <td>Wyman-Ledner</td> 
                <td>Brazil</td> 
                <td>5/22/2020</td> 
                <td>Indigo</td>
            </tr>
            <tr>
                <th>5</th> 
                <td>Yancy Tear</td> 
                <td>Community Outreach Specialist</td> 
                <td>Wyman-Ledner</td> 
                <td>Brazil</td> 
                <td>5/22/2020</td> 
                <td>Indigo</td>
            </tr>
            </tbody>
        </table>
        </div>
    </>
  )
}

export default LastOrderComponent