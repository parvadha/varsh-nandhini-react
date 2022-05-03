import React from 'react';

const product=({data}) =>{
    return (
        <div><table>
            {
                data.map(data=>
                    <tr key={data.recipe.index}><td><img src={data.recipe.image}></img></td></tr>)
                    
            }
            </table>
        </div>
    );
}

export default product;